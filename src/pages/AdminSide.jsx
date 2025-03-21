import React from 'react'
import Add from '../components/Add'
import AdminView from '../components/AdminView'
import Header from '../components/Header'

const AdminSide = () => {

  return (
    <>
    <Header/>
    <div style={{backgroundColor:"black"}}>
      
      <div style={{ padding: "70px", backgroundColor: "black" }}>
         <Add/>
      </div>
  
      <div>
        <AdminView/>
      </div>
    </div>
    
    </>

)
}

export default AdminSide
