import style from './section.module.css'
export default function Section()
{
    return(
        <>
        <div className={style.container}>
        <div className={style.image}>
          
            < img src ="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?cs=srgb&dl=pexels-hasan-albari-1229861.jpg&fm=jpg"  alt =" "/>
          
        </div>
        <div className={style.sectionhero}>
         <h1>BE THERE</h1>   
        <p>Deliever brillamt message in the moments that truly define your brand</p>
        <button className={style.button}>See How</button>
        </div>
     
        </div>
        </>
    )
}