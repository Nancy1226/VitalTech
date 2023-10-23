import GroupCards from "../molecules/GroupCards";

function BodyDashboard() {
    return (
      <>
        <main>
          <h1>Graficas de cada uno</h1>

          <div class="analyse">
            <div class="sales">
              <GroupCards
                title={"Total sales"}
                info={"$65,024"}
                porcentaje={"81%"}
              />
            </div>
            <div class="visits">
              <GroupCards
                title={"Searches"}
                info={"14,147"}
                porcentaje={"21%"}
              />
            </div>
            <div class="searches">
              <GroupCards
                title={"Site Visit"}
                info={"24,981"}
                porcentaje={"48%"}
              />
            </div>
          </div>
          {/* <!-- End of Analyses --> */}

          {/* <!-- Section graficas --> */}

          <div class="new-users">
            <h2>Grafica general</h2>

            <div class="user-list"></div>
          </div>

          {/* <!-- Section graficas --> */}

          {/* <!-- Cardsssss tabla de info--> */}
          <div class="recent-orders">
            <h2>Sensores</h2>
            <table>
              <thead>
                <tr>
                  <th>Sensor uno</th>
                  <th>Sensor dos</th>
                  <th>Sensor tres</th>
                  <th>Sensor cuatro</th>
                  <th></th>
                </tr>
              </thead>

              {/* tabla para el historial */}
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>6</td>
                  <td class="primary">Details</td>
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