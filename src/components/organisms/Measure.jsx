import {LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip} from "recharts"
import { useState, useEffect } from "react";
import io from "socket.io-client";

function Measure() {
    const arrayPPM = [];
    const arrayOxi = [];
    const arrayTemp = [];

    const [promedioOxi, setPromedioOxi] = useState(0);  
    const [promedioTemp, setpromedioTemp] = useState(0)
    const [promedioPPM, setpromedioPPM] = useState(0)


    const socket = io("http://50.19.138.200:3000");
    
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
            if (socket.connected) {
                alert("Mensaje enviado a la raspberry");
                socket.emit('conexion', "Iniciar");

                setTimeout(() => {
                    socket.emit('conexion', "Detener");
                    alert(`Estamos deteniendo la ejecucion del archivo`)
                    console.log("Estamos imprimiendo el array PPM al detener la medicion")
                    console.log(arrayPPM)
                    
                    if (arrayOxi.length === 0) {
                        setPromedioOxi(0);
                      } else {
                        const suma = arrayOxi.reduce((acumulador, elemento) => acumulador + elemento, 0);
                        const promedio = suma / arrayOxi.length;
                        const promedioRedondeado = Math.round(promedio);
                        setPromedioOxi(promedioRedondeado);
                      }

                      if (arrayTemp.length === 0) {
                        setpromedioTemp(0);
                      } else {
                        const suma = arrayTemp.reduce((acumulador, elemento) => acumulador + elemento, 0);
                        const promedio = suma / arrayOxi.length;
                        const promedioRedondeado = Math.round(promedio);
                        setpromedioTemp(promedioRedondeado);
                      }

                      if (arrayPPM.length === 0) {
                        setpromedioPPM(0);
                      } else {
                        const suma = arrayPPM.reduce((acumulador, elemento) => acumulador + elemento, 0);
                        const promedio = suma / arrayOxi.length;
                        const promedioRedondeado = Math.round(promedio);
                        setpromedioPPM(promedioRedondeado);
                      }
                  }, 45000);
            } else {
                console.error('El socket no está conectado.');
            }
        } catch (error) {
            alert(error);
        }

    } 




    return ( 
        <main>
            
            <div class="new-users">
            <h2>Medición</h2>
                <div class="user-list">
                    <button onClick={iniciar}>Iniciar Medición</button><br />
                </div>
                <div class="user-list">
                    <div>
                        <h2>Temperatura corporal: {promedioTemp} °C</h2>
                        <h2>Frecuencia cardiaca:  {promedioPPM} PPM </h2>
                        <h2>Oxigeno en sangre: {promedioOxi} % </h2>
                        <h2>Presion Sistolica: </h2>
                        <h2>Presion Diastolica: </h2>
                    </div>
                    
                </div>

            </div>

        </main>
     );
}

export default Measure;