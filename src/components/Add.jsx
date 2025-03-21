import React, { useContext, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { addMenuAPI } from '../sevices/allAPI';
 import { addPlanResponseContext } from '../contexts/ContextAPI';

const Add = () => {
   const { addPlanResponse, setAddPlanResponse } = useContext(addPlanResponseContext)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [menuname, setName] = useState("");
  const [menudiscription, setMenuDiscription] = useState("");
  const [items, setItems] = useState([
    { name: "", discription: "", price: 0 }
  ]);
  // Update item fields
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  console.log(items);

  // Add a new item field
  const addItemField = () => {
    setItems([...items, { name: "", discription: "", price: 0 }]);
  };

  //add submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!menuname || items.length === 0) {
      alert("fill the details")
    } else {
      const reqBody = { "menuname": menuname,"menudiscription":menudiscription, "items": items }
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }
        
        try {
          const result = await addMenuAPI(reqBody,reqHeader)
          
          if (result.status == 200) {
            console.log(result)
            alert("added successfully")
            setAddPlanResponse(result)
            handleClose()
            setName("")
            setMenuDiscription("")
            setItems([...items, { name: "", discription: "", price: 0 }])

          } else {
            if (result.response.status == 406) {
              alert(result.response.data)
            }

          }


        } catch (error) {
          console.log(error);
        }

      }
    }

  }

  return (

    <>

      <div  style={{background: 'black',borderRadius: '75px',boxShadow: '0 4px 10px rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',color: 'white'}} className='mt-5  d-flex  '>

          <div className="row">
            
            
            <div className="col-lg-6">
              <div className='mt-3 d-flex  align-item-center' >
                  <h5 className="text-center " style={{fontSize:"35px",color:"#307ab9"}}>Create Your Menu</h5>
                  
              </div>
            </div>
            <div className="col-lg-6">
              <button  onClick={handleShow} className='btn mt-4  ms-3  fw-bolder text-center'><i style={{fontSize:"45px",color:"#8e30b9"}}  class="fa-solid fa-square-plus ms-5"></i></button>
              </div>

          </div>
        </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Menu Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div style={{
            maxWidth: '500px',
            padding: '20px',
            background: 'black',
            borderRadius: '15px',
            boxShadow: '0 4px 10px rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            color: 'white'
          }}>
            <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
              Add Menu
            </h2>

            <form>
              <input
                type="text"
                placeholder="Menu Name"
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: 'none',
                  background: '#d9d9e8',
                  color: 'black',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
               <input className='mt-2'
                type="text"
                placeholder="Menu discription"
                onChange={(e) => setMenuDiscription(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: 'none',
                  background: '#d9d9e8',
                  color: 'black',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />

              <h3 style={{ fontSize: '18px', marginTop: '10px' }}>Items:</h3>

              {items.map((items, index) => (
                <div key={index} style={{
                  padding: '15px',
                  borderRadius: '10px',
                 
                  boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.1)'
                }}>
                  <input className='mt-2'
                    type="text"
                    placeholder="item Name"
                    onChange={(e) => handleItemChange(index, "name", e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      marginBottom: '10px',
                      borderRadius: '8px',
                      border: 'none',
                      background: '#d9d9e8',
                      color: 'black',
                      fontSize: '17px',
                      outline: 'none',

                    }}
                  />
                  <br />
                  <div >
                    <input className='mt-2'
                      type="text"
                      placeholder="discription"
                      onChange={(e) => handleItemChange(index, "discription", e.target.value)}
                      required
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '8px',
                        border: 'none',
                        background: '#d9d9e8',
                        color: 'black',
                        fontSize: '17px',
                        outline: 'none'
                      }}
                    />
                    <br />
                    <input className='mt-2'
                      type="number"
                      placeholder="price"
                      onChange={(e) => handleItemChange(index, "price", e.target.value)}
                      required
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '8px',
                        border: 'none',
                        background: '#d9d9e8',
                        color: 'black',
                        fontSize: '17px',
                        outline: 'none'
                      }}
                    />
                   
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={addItemField}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #ff416c, #ff4b2b)',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: '0.3s'
                }}
                onMouseOver={(e) => e.target.style.opacity = '0.8'}
                onMouseOut={(e) => e.target.style.opacity = '1'}
              >
                + Add Menu
              </button>
            </form>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSubmit} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>



    </>

  )
}
export default Add



















