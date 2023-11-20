import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import UserContext from '../context/UserContext'
import RouteProtected from './RouteProtected'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'
import History from '../pages/History'

function App() {
  const [isLoged, setIsLoged] = useState(
    () => window.localStorage.getItem("loggedUser") !== null
  );

  const [userName, setUserName] = useState(
    () => {
      const loggedUser = window .localStorage.getItem("loggedUser");
      return loggedUser ? JSON.parse(loggedUser).userName : "";
    }
  );

  return (
    <>
      <BrowserRouter>
      <UserContext.Provider value={{ isLoged, setIsLoged, userName, setUserName }}>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          
          
          <Route element={<RouteProtected session={isLoged}/>}>
            <Route path='/dashboard' element={<Dashboard />} ></Route>
            <Route path='/history' element={<History />} ></Route>
          </Route>
            <Route path='/home' element={<Home/>}></Route>

          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App
