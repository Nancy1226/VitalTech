import React from 'react'
import html2pdf  from "html2pdf.js";
import {useState, useEffect, useContext} from 'react';
import logo from "../../assets/VitalLogo.png"
import axios from 'axios';
import UserContext from '../../context/UserContext';

  
function HistorySection() {
  const [datos, setDatos] = useState([]);
  const [showExportButton, setShowExportButton] = useState(true);
  const {userName, setUserName} = useContext(UserContext);
  const [activoIMG, setactivoIMG] = useState(false)

  useEffect(() => {
    const fetchDataGrapichs = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/getAll", { withCredentials: true });
        console.log("Imprimiendo datos de la apiiii")
        console.log(response.data);
        setDatos(response.data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }

    fetchDataGrapichs();

    return () => {
      // Realiza la limpieza necesaria
    };

  }, []);

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
                  <th>Presion sistolica</th>
                  <th>Presion diastolica</th>
                  <th>Oxígeno en sangre</th>
                  <th>Fecha de medición</th>
                  <th></th>
                </tr>
              </thead>

              {/* tabla para el historial */}
              <tbody>
              <tr>
                {datos.map((item) => (
                  <React.Fragment key={item.id}>
                    <td>{item.heart_rate}</td>
                    <td>{item.systolic_pressure}</td>
                    <td>{item.diastolic_pressure}</td>
                    <td>{item.blood_oxygen}</td>
                    <td>{item.created_at}</td>
                  </React.Fragment>
                ))}
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