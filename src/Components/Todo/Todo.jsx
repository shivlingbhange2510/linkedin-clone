import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { addTodo } from '../../Redux/Todo/TodoAction'
// import { addTodo } from '.'
// import {Navbar} from '../Components/Navbar'
import {addTodo} from '../../Redux/Todo/todoAction'
export const Todo = () => {
    const[title, setTitle]=useState('');
    const todoItem = useSelector(store=>store.todo);

    const dispatch=useDispatch();
    console.log('store is ', todoItem)
    
    const handleSubmit =()=>{
        let data={
            name:title,
            id:Math.random()
        }
        dispatch(addTodo(data))

    }
  return (
    <div>
        Todo
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}
