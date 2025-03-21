import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AdminSide from './pages/AdminSide'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Menu from './pages/Menu'

function App() {

  return (
    <>
   
    <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/login'} element={<Auth/>} />
        <Route path={'/register'} element={<Auth insideSignup={true}/>} />
        <Route path={'/menu'} element={<Menu/>} />
        <Route path={'/adminside'} element={<AdminSide/>} />
       

      </Routes>
    
     <Footer/>
    </>
  )
}

export default App
