import React from 'react'
import { Link, useNavigate } from "react-router-dom"

const Header=()=> {

  const navigate=useNavigate()
  const logout=()=>{
    sessionStorage.clear()
    // setIsAuthorised(false)
    navigate("/")


  }
  

    return (
      <>
      <div>
      <nav class="navbar navbar-expand-lg  position-fixed w-100" style={{zIndex:1,background:"black"}} >
          <div class="container-fluid">
             <a class="navbar-brand" style={{textDecoration:'none',fontFamily: "Dancing Script"}} className='ms-4 fs-2 text-white'><img width={'200px'} src="https://www.deepnetsoft.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdns-blue-white.edf98572.png&w=3840&q=75" alt="no" /></a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarNavDropdown">
           <ul class="navbar-nav ms-auto">
             <li class="nav-item">
               <Link to={'/'}  style={{textDecoration:'none'}} className='me-4 mt-5 fs-5 text-white' >HOME</Link>
             </li>
            <li class="nav-item">
            <Link to={'/menu'}  style={{textDecoration:'none'}} className='me-4 pt-4 fs-5 text-white' >MENU</Link>
            </li>
            <li class="nav-item">
            <Link to={'/reservation'}  style={{textDecoration:'none'}} className='me-4 pt-4 fs-5 text-white' >MAKE A RESERVATION</Link>
            </li>
            <li class="nav-item">
            <Link to={'/contact'}  style={{textDecoration:'none'}} className='me-4 pt-4 fs-5 text-white' >CONTACT US</Link>
            </li>
            
        
          </ul>
        </div>
       </div>
      </nav>
      </div>
        
      </>
    )
  }
export default Header