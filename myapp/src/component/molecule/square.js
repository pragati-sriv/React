import style from './square.module.css'
export default function Square(props)
{
    return(
        <>
        <div className={style.square}  onClick={props.onClick}>
            <h5>{props.data}</h5>
        </div>
       
        </>
    )
}