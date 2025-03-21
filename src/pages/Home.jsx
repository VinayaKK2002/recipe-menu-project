import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card'

const Home=()=> {

    return (
      <>
      <Header/>
      <div style={{ padding: "70px", backgroundColor: "black" }}>
        <div  >

          <Card className="bg-dark text-white" >
            <Card.Img style={{width:"100%",height:"600px"}} src="https://www.shutterstock.com/image-photo/thai-traditional-food-red-curry-600nw-1079365352.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='text-center mt-5' style={{ color: "white",fontSize:"50px" }}>Foodie Crush</Card.Title>
              <Card.Text className='text-center' style={{ color: "white" ,fontSize:"20px"}}>
                Please take a look at our menu featuring food ,drinks,and brunch. if you'd like to place an <br /> order ,use the 'Order outline' button located below the menu
              </Card.Text>
              <div className="d-flex align-items-center justify-content-center">
              <button className='btn btn-info'><a href="/login">Foods</a></button>
              </div>

            </Card.ImgOverlay>
          </Card>

        </div>

        </div>

      </>

    )
}

export default Home