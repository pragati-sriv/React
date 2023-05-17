
import style from './molecule.module.css'
import { FcGoogle} from "react-icons/fc";
import Section from '../section/section'
import {useNavigate} from 'react-router-dom'

// FcGoogle
export default function Navbar()
{
    const nevigate = useNavigate()
// 
 function handle()
 {
    nevigate('/login')
 }

 function handleAbout()
 {
   nevigate('/About')
  }
 
 function handleProject()
 {
    nevigate('/Project')
}
function handleVideos()
{
    nevigate('/Videos')
 }
 
 





    const nav=[
        // 'Home',
        // 'About',
        // 'Project',
        // 'Videos',
        <button  onClick={handle}>Login</button>,
        <button  onClick={handleAbout}>About</button>,
        <button onClick={handleProject} >Project</button>,
        <button onClick={handleVideos} >Videos</button>,

        // 'Contacts',
    ]



    return(
        <>
       <div className={style.navbar}>
        <span className={style.navlogo}>   <FcGoogle/>  Google </span>
        <div className={style.navitems}>
     
       {
        nav.map((el)=>(
        <div>
            <p>{el}</p>
        </div>

        ))
       }

        {/* <a href="./home">Home</a>
        {/* <a href="./about">About</a> */}
        {/* <a href="./project">Project</a> */}
        {/* <a href="./videos">Videos</a>/ */}
        {/* <a href="./contacts">contacts</a> */} 
        </div>
        <div className={style.toogle}>
        <div  className={style.bar}></div>
        </div>
        </div>   
        <Section/>     
        </>
    )
}