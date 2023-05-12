import style from './game.module.css'
import Square from './square';
import { useState } from 'react';

export default function Box()
{
    const [state , setState] = useState(Array(9).fill(null))
    // console.log("state",state)
    function customClick(index)
    {
        console.log("index",index)
    }
    return(
        <>
        <div className={style.container}>
            <div className={style.row1}>
            <Square onClick={()=>customClick(0)} data={state[0]}/>
            <Square  data={state[1]} onClick={()=>customClick(1)}/>
            <Square  data={state[2]} onClick={()=>customClick(2)}/>
            </div>  
            <div className={style.row1}>
            <Square  data={state[3]} onClick={()=>customClick(3)}/>
            <Square  data={state[4]} onClick={()=>customClick(4)}/>
            <Square  data={state[5]} onClick={()=>customClick(5)}/>   
             </div> 
            <div className={style.row1}>
            <Square  data={state[6]} onClick={()=>customClick(6)}/>
            <Square  data={state[7]} onClick={()=>customClick(7)}/>
            <Square  data={state[8]} onClick={()=>customClick(8)}/>
            </div> 
        </div>
        
        </>
    )
}