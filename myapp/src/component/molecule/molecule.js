import style from './molecule.module.css'
import {FcGoogle} from  "react-icons/fc"
import Section from '../section/section'
// FcGoogle
export default function Navbar()
{
    return(
        <>
       <div className={style.navbar}>
       {/* <FcGoogle/> */}
        <span className={style.navlogo}>   <FcGoogle/>  Google </span>
        <div className={style.navitems}>
        <a href="./home">Home</a>
        <a href="./about">About</a>
        <a href="./project">Project</a>
        <a href="./videos">Videos</a>
        <a href="./contacts">contacts</a>
        </div>
        <div className={style.toogle}>
            <div  className={style.bar}></div>
        </div>
        </div>   
        <Section/>     
        </>
    )
}