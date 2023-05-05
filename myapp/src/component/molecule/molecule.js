import {useEffect, useState } from "react"
// import { unstable_renderSubtreeIntoContainer } from "react-dom"
import axios from 'axios'
export default function Axios()
{
  const [image,setImage]=useState([])
   useEffect(()=>{
   axios.get("https://dog.ceo/api/breeds/image/random")
  //  console.log(sum);
  .then((response)=>setImage(response.data.message))
   },[])


  return(
    <>
    {/* <button onClick={submit}>click Me</button> */}
    <img src={image} height="150px" width="150px" alt =" "/>
    </>
  )
}