import { useState } from "react"

export default function Input(props)
{
    const [input,setInput] = useState("")
    function customClick(e)
    {
        setInput(e.target.value)
        console.log(setInput)
    }
    return(
        
       <div>
        <h3>TODO</h3>
        <input type="text"   placeholder="Add item"  onChange={customClick} value={input}/>
        <button onClick={()=>{props.addList(input) 
        setInput(" ")}}  style={{marginLeft:"13px",width:"30px" , height:"30px", borderRadius:"50%" ,backgroundColor:"blue",color:"whitesmoke"}}>+</button>
       </div>
        
    )
}