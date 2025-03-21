import React, { useContext, useEffect, useState } from 'react'
import { getMenuAPI, removeMenuAPI } from '../sevices/allAPI'
import Edit from './Edit';





const AdminView = () => {
    

    const [userPlan, setUserPlan] = useState([])
    const [activeMenu, setActiveMenu] = useState(null);


    useEffect(() => {
        getUserPlan()
    }, [])
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

    const deleteMenu = async (id) => {
        const token = sessionStorage.getItem("token")
        if (token) {
            //api call
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await removeMenuAPI(id, reqHeader)
                console.log(result)
                getUserPlan()


            }catch(err) {
                console.log(err)
            }
        }
    }


    // Toggle function to show/hide menu items
    const toggleMenu = (menuId) => {
        setActiveMenu(activeMenu === menuId ? null : menuId);
    };




    return (

        <>




            <div style={{background: 'black',borderRadius: '75px',boxShadow: '0 4px 10px rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',color: 'white'}} className='mt-2 p-5'>

                {/* Row for Menu Buttons */}
                <div className="d-flex flex-wrap gap-2">
                    {userPlan?.length > 0 ? (
                        userPlan.map((menu) => (
                            <div className='d-flex align-items-center' style={{backgroundColor:"lightblue"}}>
                             <button key={menu._id} className="btn btn-info flex-grow-1 text-center fw-bold p-3" onClick={() => toggleMenu(menu._id)} style={{ minWidth: "150px" }}>{menu.menuname} </button>
                             <div><Edit menu={menu} /></div>
                             <button
                               onClick={() => deleteMenu(menu._id)}
                               className='btn text-danger ms-2'
                               style={{ fontSize: '25px' }}>
                               <i className='fa-solid fa-trash'></i>
                             </button>
                           </div>
                           
                        ))
                    ) : (
                        <div className='text-center text-warning fw-bolder' style={{ fontSize: '20px', paddingTop: '30px' }}>
                            No menu uploaded yet 
                        </div>
                    )}
                </div>

                {/* Show Selected Menu Items Below */}
                {activeMenu && (
                    <div className="mt-4 p-3 border rounded bg-dark text-white w-100">
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

export default AdminView


















