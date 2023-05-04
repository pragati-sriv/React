import { useState } from "react"
// import Handle from "../component/atom/atom"
export default function Primary()
{

const [mobile,setMobile]=useState()
  
function save()
{
    // console.log(mobile)
    let user={mobile}     // {mobile}
    fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
    }).then((result)=>{
        result.json().then((resp)=>{
           console.log("resp",resp)
        })
    })
}

    return(
        <>
        <h3>Generate Otp </h3>
        <input type="text" placeholder="Number" onChange={(e)=>{setMobile(e.target.value)}}/>
        <button onClick={save}>Get Otp</button>
        {/* <Handle/> */}
        </>
    )
}