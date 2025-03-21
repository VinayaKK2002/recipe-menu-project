import React from 'react'
import { Col, Row } from 'react-bootstrap'


const Footer = () =>{
    return(
        <>

        <div style={{backgroundColor:'black',height:"400px"}} >
         <div className="container">
                <Row  style={{backgroundColor:'black',paddingTop:"100px"}}>
                    <Col className="mt-4 p-3 border rounded "   sm={12} md={6} lg={4} >
                        <h5 className="text-center" style={{color:"blue"}}>CONNECT WITH US</h5>
                        <h6 className="text-center" style={{color:"white"}}><span style={{color:"yellow"}}><i class="fa-solid fa-phone"></i>  </span>+9567843340</h6>
                        <h6 className="text-center" style={{color:"white"}}><span style={{color:"yellow"}}><i class="fa-solid fa-envelope"></i>  </span>info@deepnetsoft.com</h6>
                    </Col>
                    <Col  className="mt-4 p-3 border rounded  " sm={12} md={6} lg={4}>
                        <h3 className="text-center" style={{color:"white"}}><span style={{color:"blue"}}>DEEP </span>NET SOFT</h3>
                        <div className='d-flex justify-content-center'>
                            <i style={{color:"white"}} class="fa-brands fa-facebook fs-5 "></i>
                            <i style={{color:"white"}} class="fa-brands fa-instagram fs-5 ms-2"></i>
                            <i style={{color:"white"}} class="fa-brands fa-twitter fs-5 ms-2"></i>
                            <i style={{color:"white"}} class="fa-brands fa-youtube  fs-5 ms-2"></i>
                        </div>
                    </Col>
                    <Col  className="mt-4 p-3 border rounded  " sm={12} md={6} lg={4}>
                        <h5 className="text-center"  style={{color:"blue"}}>FIND US</h5>
                        <h6 style={{color:"white"}} className="text-center"><span style={{color:"yellow"}}><i class="fa-solid fa-location-dot"></i>  </span>first floor,Geo infopark, <br />
                        infopark EXPY,Kakkanad</h6>
        
                    </Col>
        
                </Row>
         </div>
        </div>
        

        </>

    )
}

export default Footer 