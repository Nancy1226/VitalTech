import React, { useState } from 'react'
import {useContext} from "react";
import UserContext from '../../context/UserContext';
import '../../assets/styles/Dashboard.css'
import { images } from '../../images/images';


function DarkSection() {
    const {userName, setUserName} = useContext(UserContext);
    const {setIsLoged} = useContext(UserContext);
    const [darkModeActive, setDarkModeActive] = useState(false);
    const [isMenuVisible, setMenuVisible] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkModeActive(!darkModeActive);
    document.body.classList.toggle('dark-mode-variables');
  };
  
  const openMenu = () => {
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };


    return (
      <>
        <div class="right-section">
          <div class="nav">
            <button id="menu-btn" onClick={openMenu}>
              <span class="material-icons-sharp">menu</span>
            </button>
            <div class="dark-mode">
              <div
                className={`dark-mode ${darkModeActive ? "active" : ""}`}
                onClick={handleDarkModeToggle}
              >
                <span
                  class={`material-icons-sharp ${
                    darkModeActive ? "" : "active"
                  }`}
                >
                  light_mode
                </span>
                <span
                  class={`material-icons-sharp ${
                    darkModeActive ? "active" : ""
                  }`}
                >
                  dark_mode
                </span>
              </div>
            </div>

            <div class="profile">
              <div class="info">
                <p>
                  Hola, <b>{userName.user.userName}</b>
                </p>
                <small class="text-muted">Usuario</small>
              </div>
              <div class="profile-photo"> 
                <img src={images.icon} />
              </div>
            </div>
          </div>
          {/* <!-- End of Nav --> */}
          <div class="user-profile">
            <div class="logo">
              <img src={images.logo} />
              <h2>VitalTech</h2>
              <p>Signos vitales</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default DarkSection;