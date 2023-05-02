import './molecule.css'
import {useState,useEffect} from 'react'
export default function Card(){
    const[data ,setData]=useState([])

    
    

  useEffect(()=>{
    // fetch('https://reqres.in/api/users/')
    // .then((data)=>data.json())
    // .then((response)=>setData(response.data))
    // .catch((error=>console.log(error)))
    
  },[])


 function customClick()
 {
    fetch('https://reqres.in/api/users/')
    .then((data)=>data.json())
    .then((response)=>setData(response.data))
    .catch((error=>console.log(error)))
 }





    return(
         <>

     {/* <h1 className='design'>click</h1> */}

     <button className="click" onClick={customClick} > Get Users</button>
     <div className='cardContainer'>
    {data.map((users)=>(
        <div>
         <h3>{users.id}</h3>   
        <h3>{users.first_name}</h3>
        <h3>{users.last_name}</h3>
        <p>{users.email}</p>
        <img src={users.avatar}  alt="avatar"/>
        </div>
    ))}

     </div>
     </>
    )
}