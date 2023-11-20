import { getAllVital } from "../../api/routes";
import GroupCards from "../molecules/GroupCards";
import GraphicGroup from "../molecules/GraphicGroup";
import { getOneMesaure, getDataGraph, getProbability } from "../../api/routes";
import { useEffect,useState } from "react";

function BodyDashboard() {
  const [Datos, setDatos] = useState([])
  const [LastData, setLastData] = useState([])
  const [probability, setprobability] = useState()

  useEffect(() => {

    async function obtener (){
      try{
        const response = await getOneMesaure()
        setLastData(response.data)
        const graphData = await getDataGraph();
        const porcentaje = await getProbability()
        setprobability(porcentaje.data)
        console.log("Estamos imprimiendo los ultimos 7 Dias")
        console.log(graphData.data.totalPromedios)
        setDatos(graphData.data.totalPromedios)
        console.log("Estamos imprimiendo la ultima medicion")
        console.log(response.data)
      }catch(error){
        console.log(error)
      }
    }

    obtener()
    
  }, [])


    return (
      <>
        <main>

          <div class="analyse">
            <div class="sales">
              <GroupCards
                title={"Temperatura Corporal"}
                info={LastData.temperature}
                porcentaje={"81%"}
              />
            </div>
            <div class="visits">
              <GroupCards
                title={"Pulsaciones por minuto"}
                info={LastData.heart_rate}
                porcentaje={"21%"}
              />
            </div>
            <div class="searches">
              <GroupCards
                title={"Oxígeno en sangre"}
                info={LastData.blood_oxygen}
                porcentaje={"48%"}
              />
            </div>
          </div>

          <h2>La probabilidad de que usted tenga Fiebre es de : {probability} %</h2>
          <h4> ** Los datos son calculados a partir de su ultima medición ** </h4>
          <div class="new-users">
            <h2>Gráficas</h2>
            <div class="users-list">
             {/* <Graphic/> */}
             <GraphicGroup graphicName={"Presión arterial"} color1={"#367a9d"} color2={"#5183b5"} columnas={2} variable={"mm Hg"} datakey1={"promedioSystolicPressure"} datakey2={"promedioDiastolicPressure"} data={Datos} alias1={"Sistólica"} alias2={"Diastólica"}/>
             <GraphicGroup graphicName={"Temperatura corporal"} color1={"#1865d7"} columnas={1} datakey1={"promedioTemperature"} variable={"°C"} data={Datos} alias1={"Temperatura"}/>
             <GraphicGroup graphicName={"Oxígeno en sangre"} color1={"#34ad70"} columnas={1} datakey1={"promedioBloodOxygen"} variable={"%"} data={Datos} alias1={"Oxígeno"}/>
             <GraphicGroup graphicName={"Frecuencia cardiaca"} color1={"#5819cc"} columnas={1} datakey1={"promedioHeartRate"} variable={"PPM"} data={Datos} alias1={"Frecuencia Cardiaca"}/>
            </div>
          </div>

          {/* <!-- Section graficas --> */}
        </main>
      </>
    );
}

export default BodyDashboard;