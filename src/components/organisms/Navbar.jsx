import { NavLink } from "react-router-dom";
import "../../assets/styles/Load.css"
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { images } from "../../images/images";
import { logoutUser } from "../../api/routes";

function Navbar() {
    const {userName, setUserName} = useContext(UserContext);
    const {setIsLoged} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    
    const logout = async () => {
      setLoading(true);
        window.localStorage.removeItem("loggedUser");
        setIsLoged(false);
        setUserName("");
        const res = await logoutUser
        setLoading(false);
      }

    return (
      <>
        <aside>
          <div class="toggle">
            <div class="logo">
              <img src={images.logo} />
              <h2>
                Vital<span class="danger">Tech</span>
              </h2>
            </div>
            <div class="close" id="close-btn">
              <span class="material-icons-sharp">close</span>
            </div>
          </div>

          <div class="sidebar">
            <NavLink to={"/measure"} exact activeClassName="active">
              <span class="material-icons-sharp">dashboard</span>
              <h3>Medir</h3>
            </NavLink>

            <NavLink to={"/dashboard"} exact activeClassName="active">
              <span class="material-icons-sharp">insights</span>
              <h3>Analiticas</h3>
            </NavLink>
            <NavLink to={"/history"} exact activeClassName="active">
              <span class="material-icons-sharp">settings</span>
              <h3>Historial</h3>
            </NavLink>

            <NavLink to={"/"} exact activeClassName="active" onClick={logout}>
              <span class="material-icons-sharp">
                logout
              </span>
              <h3>Logout</h3>
              {loading && <div className="loader">a</div>}
            </NavLink>
          </div>
        </aside>
      </>
    );
}

export default Navbar;