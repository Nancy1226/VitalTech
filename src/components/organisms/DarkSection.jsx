import React, { useState } from 'react'
import {useContext} from "react";
import UserContext from '../../context/UserContext';
import '../styles/Dashboard.css'

function DarkSection() {
    const {userName, setUserName} = useContext(UserContext);
    const {setIsLoged} = useContext(UserContext);
    const [darkModeActive, setDarkModeActive] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkModeActive(!darkModeActive);
    document.body.classList.toggle('dark-mode-variables');

  };

    return (
      <>
        <div class="right-section">
          <div class="nav">
            <button id="menu-btn">
              <span class="material-icons-sharp">menu</span>
            </button>
            <div class="dark-mode">
              <div className={`dark-mode ${darkModeActive ? 'active' : ''}`} onClick={handleDarkModeToggle}>
              <span class="material-icons-sharp active">light_mode</span>
                <span class="material-icons-sharp">dark_mode</span>
              </div>
            </div>

            <div class="profile">
              <div class="info">
                <p>
                  Hola, <b>{userName}</b>
                </p>
                <small class="text-muted">Usuario</small>
              </div>
              <div class="profile-photo">
                <img src="images/profile-1.jpg" />
              </div>
            </div>
          </div>
          {/* <!-- End of Nav --> */}
        </div>
      </>
    );
}

export default DarkSection;