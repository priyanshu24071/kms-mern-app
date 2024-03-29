import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App';
import { useContext } from 'react';

const Logout = () => {
    const {state,dispatch} = useContext(userContext)

    const navigate = useNavigate()

    useEffect(()=>{
        fetch("/logout",{
            method :"GET",
            headers : {
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            credentials : "include"
        }).then((res)=>{
            dispatch({type:"USER",payload:false})
            navigate("/login")
            if(!res.status===200){
                const error = new Error(res.Error)
                throw error
            }
        }).catch((err)=>{
            console.log(err);
        })

    },[])
    
  return (
    <>
    <h1>User logged out</h1>
    </>
  )
}

export default Logout