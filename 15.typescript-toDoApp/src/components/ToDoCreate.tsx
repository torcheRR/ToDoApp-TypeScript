import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {createTodo} from '../redux/toDoSlice'
import { TodoType } from "../types/Types";

function ToDoCreate() {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>('');



  const handleCreateTodo = () => {
    if(newTodo.trim().length==0){
        alert("todo giriniz!")
        return;
    }

    const payload:TodoType = {
        id: Math.floor(Math.random()*999999999),
        content: newTodo
    }
    dispatch(createTodo(payload))
    setNewTodo('')
  };


  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        placeholder="ToDo Giriniz..."
        className="todo-input"
        type="text"
      />
      <button onClick={handleCreateTodo} className="todo-create-button">
        Oluştur
      </button>
    </div>
  );
}

export default ToDoCreate;
