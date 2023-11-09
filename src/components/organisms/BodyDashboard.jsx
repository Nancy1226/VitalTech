import GroupCards from "../molecules/GroupCards";
import GraphicGroup from "../molecules/GraphicGroup";
function BodyDashboard() {
    return (
      <>
        <main>
          <h1>Graficas de cada uno</h1>
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

          {/* <!-- Cardsssss tabla de info--> */}
          <div class="recent-orders">
            <h2>Historial de mediciones</h2>
            <table>
              <thead>
                <tr>
                  <th>Frecuencia cardiaca</th>
                  <th>Oxígeno en sangre</th>
                  <th>Temperatura</th>
                  <th>Presion arterial</th>
                  <th>Fecha</th>
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
            <a href="#">Show All</a>
          </div>

        </main>
      </>
    );
}

export default BodyDashboard;