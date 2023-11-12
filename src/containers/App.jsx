import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import History from '../pages/History'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/dashboard' element={<Dashboard />} ></Route>
          <Route path='/history' element={<History />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
