import React from 'react'
import  html2pdf  from "html2pdf.js";
import {useEffect,useState, useContext} from 'react';
import logo from "../../assets/VitalLogo.png"
import UserContext from '../../context/UserContext';
import { getAllVital } from '../../api/routes';
import { format } from 'date-fns';
import styled from 'styled-components';


function HistorySection() {
  const {userName, setUserName} = useContext(UserContext);
  const [signos, setsignos] = useState([])

  const [showExportButton, setShowExportButton] = useState(true);

  const [activoIMG, setactivoIMG] = useState(false)

  useEffect(() => {

    async function obtener (){
      try{
        const response = await getAllVital()
        console.log("Estamos imprimiendo los datos que vienen")
        console.log(response.data)
        setsignos(response.data)
      }catch(error){
        console.log(error)
      }
    }

    obtener()
    
  }, [])


  const generatePDF = async () => {
   
    setTimeout(() => {
      setactivoIMG(false);
    }, 2000); // Puedes ajustar el tiempo según tus necesidades


    setactivoIMG(!activoIMG);
    setShowExportButton(false);
    const content = document.getElementById('content-to-pdf');

    const options = {
      margin: 10,
      filename: 'mi_historial.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    try {
      const pdf = await html2pdf().set(options).from(content).save();
    } catch (error) {
      console.error('Error al generar el PDF:', error);
    } finally {

      setShowExportButton(true);
    }
    
};

    return (
        <>
        <main id="content-to-pdf">

        
        <div className='datos-paciente'>
          <div>
            <h2>Datos del paciente</h2>
            <h3>Nombre: {userName}</h3>
          </div>
          {showExportButton && (
          <StyledButton onClick={generatePDF}>Exportar como PDF</StyledButton>
       // <button class="Export" onClick={generatePDF}>Exportar historial</button>
        )}

          <img src={logo} style={
            {
              width:'150px',
              display: activoIMG ? 'flex' : 'none', 
            }

          }/>

        </div>

          
        <div class="recent-orders">
            <h2>Historial de mediciones</h2>
            <table>
              <thead>
                <tr>
                  <th>Frecuencia cardiaca</th>
                  <th>Oxígeno en sangre</th>
                  <th>Temperatura</th>
                  <th>Presion arterial</th>
                  <th>Fecha de medición</th>
                  <th></th>
                </tr>
              </thead>

              {/* tabla para el historial */}
              <tbody>
                  {signos.map((item) =>(
                      <tr>
                      <td>{item.heart_rate}</td>
                      <td>{item.systolic_pressure}</td>
                      <td>{item.diastolic_pressure}</td>
                      <td>{item.blood_oxygen}</td>
                      <td>
                      {" "}
                    {format(
                      new Date(
                        item.create_at.split("T")[0].split("-")
                      ),
                      "dd - MM - yyyy"
                    )}  </td>
                      </tr>
                  ))}
               
              </tbody>

            </table>

            <img src={logo} style={{ display: 'none' }} />
          
          </div>

        </main>
        </>
      );
}

export default HistorySection;

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
    box-shadow: 5px 5px 10px #c5c5c5,
             -5px -5px 10px #ffffff;
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