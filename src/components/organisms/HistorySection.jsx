import React from 'react'
import  html2pdf  from "html2pdf.js";
import {useState, useContext} from 'react';
import logo from "../../assets/VitalLogo.png"
import UserContext from '../../context/UserContext';


function HistorySection() {
  const {userName, setUserName} = useContext(UserContext);

  const [showExportButton, setShowExportButton] = useState(true);

  const [activoIMG, setactivoIMG] = useState(false)

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

        {showExportButton && (
        <button class="Export" onClick={generatePDF}>Exportar historial</button>
        )}

        <div className='datos-paciente'>
          <div>
            <h3>Datos del paciente</h3>
            <h3>Nombre: {userName}</h3>
          </div>
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
                <tr>
                  <td>98</td>
                  <td>98%</td>
                  <td>30 °C</td>
                  <td>124</td>
                  <td>02/03/2023</td>
                </tr>
              </tbody>

            </table>

            <img src={logo} style={{ display: 'none' }} />
          
          </div>

        </main>
        </>
      );
}

export default HistorySection;