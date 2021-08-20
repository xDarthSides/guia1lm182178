import React,{useState} from 'react'
import Todo from '../components/Todo';


const Form = () => {
    const [todo, setTodo]= useState({})
    const [todos, setTodos] = useState([{todo: '5-Manzana'}, {todo: '6-Gaseosa'}, {todo: '4-Detergente'},{todo: '7-jugo de manzana'} ])
const handleChange = e => setTodo({[e.Target.name]: e.Target.value})
const handleClick = e => {
    if(Object.keys (todo).length === 0 || todo.todo.trim() ==='') {
        alert('el campo no puede estar vacio')
        return
    }
    setTodo([...todos, todo])
}
const deleteTodo = indice => {
    const newTodos = [...todos]
    newTodos.splice(indice, 1)
    setTodo(newTodos)

}
return (
<>
<form onSubmit = {e => e.preventDefault()}>
    <label> Agregar Compra</label><br />
    <input placeholder="Jugo de naranja"
    className="form-control"/>
    <input placeholder="6"
    className="form-control" />
    <button onClick={handleClick}>agregar</button>
</form>
{
    todos.map ((value, index)=> (
    <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>))
}
</>


)
}
export default Form
