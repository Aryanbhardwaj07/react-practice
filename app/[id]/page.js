"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const page = ({params}) => {
  const{id}=params;
  const [users,setusers]= useState([])
  const getUsers=async()=>{
   const {data}=await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
   setusers(data)
  }
 useEffect(()=>{
  getUsers()
 },[])
  return (
    <div className='py-2 px-4 ml-5 mt-6'>
      {JSON.stringify(users)}
    </div>
  )
}

export default page
 