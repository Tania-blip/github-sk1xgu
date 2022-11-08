import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/todos';

function BeApp() {
    const [todos, setTodos] = useState([
        {
            id: "None",
            text: "plimba",
            done: false,
        }
    ]);

    async function getTodos() {
        let response = await axios.get(API_URL);
        setTodos(response.data);
    }

    useEffect(() => {
        getTodos();
    }, []);

    async function addNewTodo(form) {
        form.preventDefault();
        let body = {
            text: form.target.todoText.value
        };

        await axios.post(API_URL, body);
        await getTodos();
    }

    /*
    async function updateTodo(item) {
        await axios.patch(API_URL + item._id, {
            text: item.text,
            done: !item.done
        })
        await getTodos();
    }

    async function removeTodo(item) {
        await axios.delete(API_URL + item._id);
        await getTodos();
    }
    */

    return (
    <div className="App">
        {/* 
            TODO 1.1: Scoate blocul urmator din comentarii
                      si vezi ce apare pe ecran
        */}

        <h1>To Do App - Workshop IT</h1>
        <form action="" onSubmit={addNewTodo}>
            <label htmlFor="todoAdder">Add new item</label>
            <input type="text" name="todoText" id="todoText" placeholder={"Tasteaza aici."} required={true}/>
            <button type="submit">Adauga</button>
        </form>

        <ul>
            {todos.map((item, index)=>{
                return (
                <li className={item.done ? "finished" : "notFinished"} key={item._id}>
                    {`${index}: ${item.text}`}
                    <span>
                        <button onClick={() => null}>
                            Mark as {item.done? "unfinished": "finished"}
                        </button>
                        <button onClick={() => null}>
                            Delete
                        </button>
                    </span>
                </li>
                )
            })}
        </ul>
    </div>
  );
}

export default BeApp;
