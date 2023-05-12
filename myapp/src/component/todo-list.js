export default function List(props)
{
    return(
        <>
          <li>
            {props.item}
        <span>
        <i class="fa-sharp fa-solid fa-trash" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>

            </li> 
        </>
    )
}