import {useState} from 'react'
import axios from 'axios'
export default function Form()
{
    const [mobileNumber ,setMobileNumber]=useState('')
    const[response,setResponse]=useState(' ') 
    function handlesubmit(e)
    {
      e.preventDefault();
      if(!validMobileNumber(mobileNumber)){
        setResponse("enter the 10 digits number");
      }
    }
    axios.post("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP")
    // console.log(sum)
     .then((response)=>{
      if(response.valid === 200){
        setResponse("Succesfull")
      }
      else{
        setResponse("unsuccesfull")
      }
    })
 
    const validMobileNumber = (mobileNumber)=>
    {
      const regex = /^[6-9]\d{9}$/;
    return regex.test(mobileNumber);
    }

    return(
       <>
       <box submit={handlesubmit}>
       <input type ="number" placeholder='mobile' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}/>
       <button> Get Otp </button>
       </box>
       </>
    )
}