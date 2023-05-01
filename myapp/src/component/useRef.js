import { Fragment,useRef } from "react";

export default function Primary()
{
  const value=useRef(null)
  function customClick()
  {
    value.current.focus()
  }
  return(
    <Fragment>
     {/* <h1>Problem of Useref</h1> */}
     <input type="file"
     ref={value}/>
     <button  onClick={customClick}>picke the file </button>
     </Fragment>
  )
}