import {LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip} from "recharts"
import { useState } from "react";
import io from "socket.io-client";

function Measure() {

    const [data2, setData] = useState([
        {
          sp2:0
        }
      ]);
    
    
    const socket = io("http://50.19.138.200:3000");
    
    socket.on("sensor_data_front", (newData) => {
          console.log(newData);
      
          const updatedData = [...data2];
          updatedData.push({ sp2: newData});
          setData(updatedData);
      
     });

    const iniciar = async() => {
        alert("Cuenta regresiva");

    } 

    return ( 
        <main>
            
            <div class="new-users">
            <h2>Medición</h2>
            <div class="user-list">
                <button onClick={iniciar}>Iniciar Medición</button><br />
                <h2>Aca iran las graficas y el boton</h2>
            </div>
            </div>

        </main>
     );
}

export default Measure;