import GroupCards from "../molecules/GroupCards";
import GraphicGroup from "../molecules/GraphicGroup";
import { getOneMesaure, getDataGraph, getProbability } from "../../api/routes";
import { useEffect,useState, useContext } from "react";
import UserContext from "../../context/UserContext";

function BodyDashboard() {
  const {userName} = useContext(UserContext);
  const [Datos, setDatos] = useState([])
  const [LastData, setLastData] = useState([])
  const [probability, setprobability] = useState()

  useEffect(() => {

    async function obtener (){
      try{
        const storedUserData = JSON.parse(localStorage.getItem('loggedUser'));
        let {user} = storedUserData
        const response = await getOneMesaure(user.id_user)
        setLastData(response.data)
        let {temperature} = response.data
        console.log("Imprimineod el serponse de las cartas:")
        console.log(temperature)
        const graphData = await getDataGraph(user.id_user);
        const porcentaje = await getProbability(user.id_user)
        setprobability(porcentaje.data)
        setDatos(graphData.data.totalPromedios)
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
                info={`${LastData.temperature ? LastData.temperature : 0} °C`}
                porcentaje={ <span class="material-icons-sharp">device_thermostat</span>}
               
              />
            </div>
            <div class="visits">
              <GroupCards
                title={"Frecuencia cardiaca"}
                info={`${LastData.heart_rate ? LastData.heart_rate : 0} PPM`}
                porcentaje={ <span class="material-symbols-outlined">
                cardiology  
                </span>}
                
              />
            </div>
            <div class="searches">
              <GroupCards
                title={"Oxígeno en sangre"}
                info={`${LastData.blood_oxygen ? LastData.blood_oxygen : 0} %`}
                porcentaje={ <span class="material-symbols-outlined">
                spo2
                </span>}
              
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