import React, { useState } from 'react'
import { FloatingLabel, Form, Spinner } from 'react-bootstrap'
import { Link } from 'react-router'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { loginAPI, registerAPI } from '../sevices/allAPI'

const Auth = ({insideSignup}) =>{
  const navigate = useNavigate()
  const [isLogin,setIsLogin]=useState(false)
  const [inputData,setIinputData]=useState({
    username:'',email:'',password:''
  })
  console.log(inputData);
  //register
  const handleRegister = async (e)=>{
    e.preventDefault()
    console.log("inside handle register");
    if(inputData.username && inputData.password && inputData.email){
      // alert("make api call"
      try{
        const result= await registerAPI(inputData)
        console.log(result);
        if(result.status==200){
          alert(`welcome ${result.data.username} please login explore our website`)

          navigate('/login')
          setIinputData({username:"", email:"", password:""})
      }else{
        if(result.response.status==406){
          alert(result.response.data)
          setIinputData({username:"", email:"", password:""})
        }
      }

      }catch(err){
        alert(err)
      }
    }else{
      alert("please fill form")
    }

  }

  const handleLogin = async (e)=>{
    e.preventDefault()
    if(inputData.email && inputData.password){
      try {
        const result = await loginAPI(inputData)
        if(result.status==200){
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          
          setIsLogin(true)
          const user = JSON.parse(sessionStorage.getItem("user"))
          console.log(user);
          if (user.role === "Admin" ){
            setTimeout(() => {
              setIinputData({ username: "", email: "", password: "" })
              navigate('/adminside')
              setIsLogin(false)
            }, 2000)
          } else {
            setTimeout(() => {
              setIinputData({username:'',email:'',password:''})
              navigate('/home')
              setIsLogin(false)
            }, 2000);
          }

          
          
        }else{
          if(result.response.status==404){
            alert(result.response.data)
          }
        }
      } catch (err) {
        console.log(err);
        
      }
    }
  }

    return(
        <>
        <Header/>
          

        <div style={{minHeight:'100vh',width:'100%',backgroundColor:"black"}} className='d-flex justify-content-center align-items-center '>
        <div className='container w-75 '>
        
         <div style={{borderRadius:'20px',background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(78,25,157,1) 83%, rgba(150,26,203,1) 100%)"}} className='card shadow p-2  '>
         <div className='row align-items-center'>
          <div className='col-lg-2 '></div>
      
          
           
              

              <div className='col-lg-8 ' style={{textAlign:"center"}}>
                
                <h1 style={{color:"white"}} className='mt-2 text-center'>Sign {insideSignup?'Up':'In'} </h1>
               <Form className='mt-5 '>
                 {
                   insideSignup &&
                   <FloatingLabel controlId="floatingInputName" label="Username" className="mb-3">
                       <Form.Control value={inputData.username} onChange={(e)=>setIinputData({...inputData,username:e.target.value})} style={{borderRadius:'20px'}}  type="text" placeholder="Username" />
                  </FloatingLabel>

                 }
                  <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 border-rounded">
                    <Form.Control value={inputData.email}  onChange={(e)=>setIinputData({...inputData,email:e.target.value})}  style={{borderRadius:'20px'}} type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                       <Form.Control value={inputData.password} onChange={(e)=>setIinputData({...inputData,password:e.target.value})} style={{borderRadius:'20px'}}  type="password" placeholder="Password" />
                  </FloatingLabel>
                  {
                    insideSignup?
                    <div className='mt-3'>
                      <button style={{borderRadius:'20px'}}  onClick={handleRegister} className='btn btn-primary mb-2 ps-5 pe-5 '>Sign Up</button>
                      <p style={{color:"white"}}>Already have an account  ? <Link to={'/login'}>Sign In</Link></p>
                    </div>
                    :
                    <div   className='mt-3'>
                     
                        <button onClick={handleLogin}   style={{borderRadius:'20px'}}    className='btn btn-primary  mb-2 ps-5 pe-5'>Login
                        {isLogin && <Spinner className="ms-1" animation='border' variant='light'/>}
                        </button>
                     
                      <p style={{color:"white"}}>Don't have an account ? <Link to={'/register'}>Sign Up</Link></p>
                    </div>

                  }
               </Form>

              </div>
            
              

            </div>

         </div>
        
         
       </div>

     </div>

        </>

    )
}


export default Auth 