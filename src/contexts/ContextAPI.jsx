import React, { createContext, useState } from 'react'

export const addPlanResponseContext =createContext()
export const editPlanResponseContext =createContext()
export const deletePlanResponseContext =createContext()


const ContextAPI =({children})=>{
    const [addPlanResponse,setAddPlanResponse]=useState('')
    const [editPlanResponse,setEditPlanResponse]=useState('')
    const [deletePlanResponse,setDeletePlanResponse]=useState('')
     

    return(
        <deletePlanResponseContext.Provider value={{deletePlanResponse,setDeletePlanResponse}}>
            <editPlanResponseContext.Provider value={{editPlanResponse,setEditPlanResponse}}>
                <addPlanResponseContext.Provider value={{addPlanResponse,setAddPlanResponse}} >
                    {children}
                </addPlanResponseContext.Provider>
            </editPlanResponseContext.Provider>
        </deletePlanResponseContext.Provider>

    )

}

export default ContextAPI