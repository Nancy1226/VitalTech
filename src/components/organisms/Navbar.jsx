import { NavLink } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import logo from "../../assets/VitalLogo.png"

function Navbar() {
    const {userName, setUserName} = useContext(UserContext);
    const {setIsLoged} = useContext(UserContext);

    const logout = async () => {
        window.localStorage.removeItem("loggedUser");
        console.log(userName);
        setIsLoged(false);
        setUserName("");
        console.log(userName);
        const res = await axios.get("http://localhost:4000/api/logout", {
          withCredentials: true,
        });
        console.log(res);
        console.log("Cerrar sesion, limpiando cookie..");
      }

    return ( 
    <>
    <aside>
            <div class="toggle">
                <div class="logo">
                    <img src={logo} />
                </div>
                <div class="close" id="close-btn">
                    <span class="material-icons-sharp">
                        close
                    </span>
                </div>
            </div>

            <div class="sidebar">
                    <NavLink to={"/home"} exact activeClassName="active">
                    <span class="material-icons-sharp">
                        dashboard
                    </span>
                    <h3>Medir</h3>
                    </NavLink>
                    
                
                    <NavLink to={"/dashboard"} exact activeClassName="active">
                    <span class="material-icons-sharp">
                        insights
                    </span>
                    <h3>Analytics</h3>
                </NavLink>
                <NavLink to={"/history"} exact activeClassName="active">
                    <span class="material-icons-sharp">
                        settings
                    </span>
                    <h3>Historial</h3>
                </NavLink>
                
                <NavLink to={"/"} exact activeClassName="active">
                    <span class="material-icons-sharp" onClick={logout}>
                        logout
                    </span>
                    <h3>Logout</h3>
                </NavLink>
            </div>
        </aside>
    </> 
    
    );
}

export default Navbar;