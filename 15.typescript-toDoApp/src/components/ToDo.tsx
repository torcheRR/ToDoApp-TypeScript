import React, { useState } from "react";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoByID, updateTodo } from "../redux/toDoSlice";

interface todoProps {
  todoProps: TodoType;
}
function ToDo({ todoProps }: todoProps) {
  const { id, content } = todoProps;
  const dispatch = useDispatch();
  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const handleRemoveTodo = () => {
    dispatch(removeTodoByID(id));
  };

  const handleUpdateTodo = () => {
    const paylaod: TodoType = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodo(paylaod));
    setEditable(false);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
        borderRadius: "5px",
        padding: "8px",
        marginTop: "10px",
      }}
    >
      {editable ? (
        <input
          type="text"
          value={newTodo}
          style={{
            width: "400px",
            border: "none",
            borderBottom: "1px solid lightgrey",
            outline: "none",
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div style={{ fontSize: "14px", fontFamily: "Helvetica" }}>
          {content}
        </div>
      )}

      <div style={{ fontSize: "22px" }}>
        <IoRemoveCircleOutline
          onClick={handleRemoveTodo}
          style={{ marginRight: "6px", cursor: "pointer" }}
        />

        {editable ? (
          <FaCheck
            style={{ cursor: "pointer" }}
            onClick={handleUpdateTodo}
          />
        ) : (
          <FaRegEdit
            style={{ cursor: "pointer" }}
            onClick={() => setEditable(true)}
          />
        )}
      </div>
    </div>
  );
}

export default ToDo;
