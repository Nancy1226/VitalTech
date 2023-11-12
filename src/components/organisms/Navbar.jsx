import logo from "../../assets/VitalLogo.png"
import { NavLink } from "react-router-dom";
function Navbar() {
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
                
                <a href="#">
                    <span class="material-icons-sharp">
                        logout
                    </span>
                    <h3>Logout</h3>
                </a>
            </div>
        </aside>
    </> 
    
    );
}

export default Navbar;