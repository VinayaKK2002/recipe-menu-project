import React, { useContext, useEffect, useState } from 'react'
import { getMenuAPI } from '../sevices/allAPI'
import { addPlanResponseContext, deletePlanResponseContext, editPlanResponseContext } from '../contexts/ContextAPI'
// import Edit from './Edit'




const View = () => {
  const { editPlanResponse, setEditPlanResponse } = useContext(editPlanResponseContext)
  const { deletePlanResponse, setDeletePlanResponse } = useContext(deletePlanResponseContext)
  const { addPlanResponse, setAddPlanResponse } = useContext(addPlanResponseContext)

  const [userPlan, setUserPlan] = useState([])
  const [activeMenu, setActiveMenu] = useState(null);


  useEffect(() => {
    getUserPlan()
  },[addPlanResponse,editPlanResponse,deletePlanResponse])
  console.log(userPlan);

  const getUserPlan = async () => {
    

      try {
        const result = await getMenuAPI()
        console.log(result)
        if (result.status == 200) {
          setUserPlan(result.data)
        }

      } catch (err) {
        console.log(err);
      }
   
  }




  // Toggle function to show/hide menu items
  const toggleMenu = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };




  return (

    <>

   


    <div className='mt-2 p-5'>

{/* Row for Menu Buttons */}
<div className="d-flex flex-wrap gap-2">
  {userPlan?.length > 0 ? (
    userPlan.map((menu) => (
      <button
        key={menu._id}
        className="btn btn-info flex-grow-1 text-center fw-bold p-3"
        onClick={() => toggleMenu(menu._id)}
        style={{ minWidth: "150px" }} 
      >
        {menu.menuname}
      </button>
    ))
  ) : (
    <div className='text-center text-warning fw-bolder' style={{ fontSize: '20px', paddingTop: '30px' }}>
      No menu uploaded yet 🚀
    </div>
  )}
</div>

{/* Show Selected Menu Items Below */}
{activeMenu && (
  <div style={{backgroundColor:"#38063a"}} className="mt-4 p-3 border rounded  text-white w-100">
    {userPlan
      .filter((menu) => menu._id === activeMenu)
      .map((menu) =>
        menu.items.map((m, index) => (
          <div key={index} className="border-bottom pb-2 mb-2">
            <h5 style={{ padding: '12px', color: "white" }}>
              {m.name} <span className="text-warning">.............${m.price}</span>
            </h5>
            <p style={{ padding: '12px', color: "white" }}>{m.discription}</p>
          </div>
        ))
      )}
  </div>
)}

</div>

   

     



</>

  )
}

export default View


















