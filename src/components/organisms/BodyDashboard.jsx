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
          {/* <!-- End of Analyses --> */}

          {/* <!-- Section graficas --> */}

          <div class="new-users">
            <h2>Gráficas</h2>
            <div class="user-list">
             {/* <Graphic/> */}
             <GraphicGroup graphicName={"Frecuencia Cardiaca"} color={"#367a9d"}/>
             <GraphicGroup graphicName={"Oxígeno en sangre"} color={"#1865d7"}/>
            </div>
          </div>

          {/* <!-- Section graficas --> */}
        </main>
      </>
    );
}

export default BodyDashboard;