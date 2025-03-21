import React from 'react'
import Card from 'react-bootstrap/Card'
import Header from '../components/Header'
import View from '../components/View'

const Menu = () => {

  return (
    <>

    <Header/>
    
      <div style={{ padding: "70px", backgroundColor: "black" }}>
        <div  >

          <Card className="bg-dark text-white" >
            <Card.Img style={{width:"100%",height:"400px"}} src="https://media.istockphoto.com/id/2156816451/photo/empty-wooden-cutting-board-with-spices-salt-and-herbs.webp?a=1&b=1&s=612x612&w=0&k=20&c=-_KpMbquefy2brAuCOaTVP7JMuuY8XQ4NvDL3ICCL_I=" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='text-center mt-5' style={{ color: "white",fontSize:"100px" }}>MENU</Card.Title>
              <Card.Text className='text-center' style={{ color: "white" ,fontSize:"20px"}}>
                Please take a look at our menu featuring food ,drinks,and brunch. if you'd like to place an <br /> order ,use the 'Order outline' button located below the menu
              </Card.Text>

            </Card.ImgOverlay>
          </Card>

        </div>


        <div>
          <View/>
        </div>




      </div>

    </>

  )
}

export default Menu
