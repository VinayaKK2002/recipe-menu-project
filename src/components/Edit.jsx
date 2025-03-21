import React, { useContext, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { updateMenuAPI } from '../sevices/allAPI';
import { editPlanResponseContext} from '../contexts/ContextAPI';

const Edit=({menu})=> {
  const {editPlanResponse,setEditPlanResponse}=useContext(editPlanResponseContext)


  const [show, setShow] = useState(false);
  

  const [menuname, setName] = useState(menu.menuname)
  const [menudiscription, setMenuDiscription] = useState(menu.menudiscription)
  const [items, setItems] = useState(menu.items)

  const handleClose = () => {
    setShow(false);
    const [menuname, setName] = useState(menu.menuname)
    const [menudiscription, setMenuDiscription] = useState(menu.menudiscription)
    const [items, setItems] = useState(menu.items)
  }
    const handleShow = () => {
      setShow(true);
      const [menuname, setName] = useState(menu.menuname)
      const [menudiscription, setMenuDiscription] = useState(menu.menudiscription)
      const [items, setItems] = useState(menu.items)

 }
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
  }

  const handleUpdate = async (e) => {

    e.preventDefault()
    const id=menu._id
    console.log(id)
    if (!menuname || items.length === 0) {
      alert("fill the details")
    }else{
      const reqBody = { "menuname": menuname,"menudiscription":menudiscription, "items": items }
       const token=sessionStorage.getItem("token")
       if (token) {
          const reqHeader={
            "Authorization":`Bearer ${token}`
          }
          try {
             const result=await updateMenuAPI(id,reqBody,reqHeader)
             console.log(result)
             alert("updated successfully")
            setEditPlanResponse(result)
           
             handleClose()
            

                   
          } catch (error) {
            console.log(error);    
          }
       
        }
    }

  }

    return (
      <>
      <div>
        <button className='btn' onClick={handleShow}><i style={{ fontSize: '25px' }} className='fa-solid fa-edit text-danger'></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Menu Details</Modal.Title>
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
              Update Menu
            </h2>

            <form>
              <input
                type="text"
                placeholder="Menu Name"
                value={menuname}
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
                value={menudiscription}
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

              {items.map((item, index) => (
                <div key={index} style={{
                  padding: '15px',
                  borderRadius: '10px',
                 
                  boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.1)'
                }}>
                  <input className='mt-2'
                    type="text"
                    placeholder="item Name"
                    value={item.name}
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
                      value={item.discription}
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
                      value={item.price}
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
          <Button onClick={handleUpdate} variant="primary">Edit</Button>
        </Modal.Footer>
      </Modal>

      

      </>

    )
}

export default Edit