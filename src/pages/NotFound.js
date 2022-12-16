import React, { useEffect } from 'react'
import {  redirect } from "react-router-dom";

const NotFound = () => {
    useEffect(()=>{
        redirect("/")
    },[])
  return (
  <></>
  )
}

export default NotFound