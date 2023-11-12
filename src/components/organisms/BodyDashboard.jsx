import GroupCards from "../molecules/GroupCards";
import GraphicGroup from "../molecules/GraphicGroup";
function BodyDashboard() {
    return (
      <>
        <main>
          <div class="analyse">
            <div class="sales">
              <GroupCards
                title={"Temperatura Corporal"}
                info={"$65,024"}
                porcentaje={"81%"}
              />
            </div>
            <div class="visits">
              <GroupCards
                title={"Pulsaciones por minuto"}
                info={"14,147"}
                porcentaje={"21%"}
              />
            </div>
            <div class="searches">
              <GroupCards
                title={"Oxígeno en sangre"}
                info={"24,981"}
                porcentaje={"48%"}
              />
            </div>
          </div>
        
          <div class="new-users">
            <h2>Gráficas</h2>
            <div class="user-list">
             {/* <Graphic/> */}
             <GraphicGroup graphicName={"Presión arterial"} color1={"#367a9d"} color2={"#5183b5"} columnas={2} variable={"mm Hg"} datakey1={"sistolica"} datakey2={"distolica"}/>
             <GraphicGroup graphicName={"Temperatura corporal"} color1={"#1865d7"} columnas={1} datakey1={"temp"} variable={"°C"}/>
             <GraphicGroup graphicName={"Oxígeno en sangre"} color1={"#34ad70"} columnas={1} datakey1={"oxigeno"} variable={"%"}/>
             <GraphicGroup graphicName={"Frecuencia cardiaca"} color1={"#5819cc"} columnas={1} datakey1={"ppm"} variable={"PPM"}/>
            </div>
          </div>

          {/* <!-- Section graficas --> */}
        </main>
      </>
    );
}

export default BodyDashboard;