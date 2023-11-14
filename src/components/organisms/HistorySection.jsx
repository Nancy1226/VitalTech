import React from 'react'
import  html2pdf  from "html2pdf.js";
import {useState} from 'react';
import logo from "../../assets/VitalLogo.png"


function HistorySection() {
  const [showExportButton, setShowExportButton] = useState(true);

  const generatePDF = async () => {
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

          <h3>Datos del paciente</h3>
          <h3>Nombre: Prueba</h3>
          <h3>Edad: XX</h3>
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