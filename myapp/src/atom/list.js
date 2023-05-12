import { useState } from "react"
import Input from "../molecule/todo"
import List from "../component/todo-list"
export default function TodoList()

{
    const [list , setList]= useState([])
    let addList =(Input)=>{
        setList([...list,Input])
    }
    const itemDelete=(key)=>{
        let newList = [...list];
        newList.splice(key,1)
        setList([...newList])
    }
    return(
        <>
        <Input  addList ={addList}/>
        {list.map((item,i)=>{
            return(
                <List key={i} index={i} item={item} deleteItem={itemDelete}/>
            )
        })}
        </>
    )
} 