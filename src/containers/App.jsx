import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
