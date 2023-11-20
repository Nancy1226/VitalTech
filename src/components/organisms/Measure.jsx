import { useState, useEffect } from "react";
import io from "socket.io-client";
import { insertVital } from "../../api/routes";
import styled from "styled-components";
import Modal from "../molecules/Modal";

function Measure() {
    const arrayPPM = [];
    const arrayOxi = [];
    const arrayTemp = [];

    const [showModal, setShowModal] = useState(false);
    const [connected, setConnected] = useState(false);
    const [promedioOxi, setPromedioOxi] = useState(0);  
    const [promedioTemp, setpromedioTemp] = useState(0)
    const [promedioPPM, setpromedioPPM] = useState(0)
    const [sistolica, setsistolica] = useState(0)
    const [diastolica, setdiastolica] = useState(0)

   
    const socket = io("wss://websocket-server.testsoftware.dev:3000");

    useEffect(() => {
        // Manejar eventos de conexión
        socket.on("connect", () => {
          console.log("Conectado al servidor WebSocket");
          setConnected(true);
        });
    
        // Manejar eventos de desconexión
        socket.on("disconnect", () => {
          console.log("Desconectado del servidor WebSocket");
          setConnected(false);
        });
    
        // Manejar eventos de errores
        socket.on("error", (error) => {
          console.error("Error en la conexión WebSocket:", error);
        });
    
        // Devuelve una función de limpieza para desconectar el socket cuando el componente se desmonta
        return () => {
          if (socket.connected) {
            socket.disconnect();
            setConnected(false);
          }
        };
      }, []);
    
    
    
    socket.on("sensor_data_front_ppm", (newData) => {
          arrayPPM.push(newData);
     });

     socket.on("sensor_data_front_oxigeno", (newData) => {
         arrayOxi.push(newData);
    });

    socket.on("sensor_data_front_temperatura", (newData) => {
        arrayTemp.push(newData);
        });
 
    const iniciar = async() => {
        try {

            if (!connected) {
                // Solo intenta conectar si no está conectado
                socket.connect();
              }
              
            if (socket.connected) {
                alert("Mensaje enviado a la raspberry");
                socket.emit('conexion', "Iniciar");
                setShowModal(true);

                setTimeout(() => {
                    socket.emit('conexion', "Detener");
                    alert(`Estamos deteniendo la ejecucion del archivo`)
                    setShowModal(false);
                    let oxigeno = 0
                    let temp = 0
                    let frecu = 0
                    let sis = 0
                    let dis = 0


                    if (arrayOxi.length === 0) {
                        setPromedioOxi(0);
                      } else {
                        let total=0, res, numDatos, item;
                        numDatos = arrayOxi.length;
                        for (item = 0; item < numDatos; item++)
                            {
                                total += arrayOxi[item];
                            }
                        res = total/numDatos;
                        const promedioRedondeado = Math.round(res);
                        oxigeno = promedioRedondeado
                        setPromedioOxi(promedioRedondeado);
                      }

                      if (arrayTemp.length === 0) {
                        setpromedioTemp(0);
                      } else {
                        let total=0, res, numDatos, item;
                        numDatos = arrayTemp.length;
                        for (item = 0; item < numDatos; item++)
                            {
                                total += arrayTemp[item];
                            }
                        res = total/numDatos;
                        const promedioRedondeado = Math.round(res);
                        temp = promedioRedondeado
                        setpromedioTemp(promedioRedondeado);
                      }

                      if (arrayPPM.length === 0) {
                        setpromedioPPM(0);
                        setsistolica(0) 
                        setdiastolica(0)
                      } else {
                        let total=0, res, numDatos, item;
                            numDatos = arrayPPM.length;
                            for (item = 0; item < numDatos; item++)
                                {
                                    total += arrayPPM[item];
                                }
                            res = total/numDatos;
                        const promedioRedondeado = Math.round(res);
                        const sistolica = 90 + (0.6 * promedioRedondeado);
                        const diastolica = 60 + (0.4 * promedioRedondeado)
                        const rSistolica = Math.round(sistolica)
                        const rDiastolica = Math.round(diastolica)
                        setsistolica(rSistolica) 
                        setdiastolica(rDiastolica)
                        setpromedioPPM(promedioRedondeado);

                        frecu = promedioRedondeado
                        sis = rSistolica
                        dis = rDiastolica

                      }

                      const data = {
                        "heart_rate": frecu,
                        "temperature": temp,
                         "systolic_pressure": sis, 
                         "diastolic_pressure": dis,
                         "blood_oxygen": oxigeno
                     }

                      insertDB(data)

                      console.log("Imprimiendo la data")
                      console.log(data)

                  }, 45000);
            } else {
                console.error('El socket no está conectado.');
            }
        } catch (error) {
            alert(error);
        }

    } 

    const insertDB = async(data) =>{
        try{
            const response = await insertVital(data)
            console.log(response);
        }catch(error){
            console.log(error);
        }


    }

    return ( 
        <main>
            
            <div class="new-users">
            <h2>Medición</h2>
                <div class="button-site">
                   <StyledButton onClick={iniciar}>Iniciar Medición</StyledButton>
                </div>
                <div class="user-list">
                    {showModal && <Modal />}
                    <div>
                        <h2>Temperatura corporal: {promedioTemp} °C</h2>
                        <h2>Frecuencia cardiaca:  {promedioPPM} PPM </h2>
                        <h2>Oxigeno en sangre: {promedioOxi} % </h2>
                        <h2>Presion Sistolica: {sistolica} mmHg</h2>
                        <h2>Presion Diastolica: {diastolica} mmHg</h2>
                    </div>
                    
                </div>

            </div>

        </main>
     );
}

export default Measure;

const StyledButton = styled.button`
    width: 9em;
    height: 3em;
    border-radius: 30em;
    font-size: 15px;
    font-family: inherit;
    border: none;
    position: relative;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
    box-shadow: 6px 6px 12px #c5c5c5,
             -6px -6px 12px #ffffff;
    &:before{
        content: '';
        width: 0;
        height: 3em;
        border-radius: 30em;
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(90deg, hsla(210, 90%, 80%, 1) 0%, hsla(212, 93%, 49%, 1) 100%); transition: .5s ease;
        display: block;
        z-index: -1;
    }
    &:hover:before{
        width: 9em;
        color: blue;
    }
`;