import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div>
      {todos.map((todo, index) => (
        <DisplayData key={index} todo={todo} />
      ))}
    </div>
  );
};

function DisplayData(props) {
  const { title, userId, id } = props.todo;
  return (
    <>
      <h2> {title}</h2>
      <h3>{userId}</h3>
      <p>{id}</p>
    </>
  );
}

export default Todo;
