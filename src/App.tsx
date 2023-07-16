import React, { useState } from "react";
import "./App.css";
import List from "./List";
import AddTodo from "./AddTodo";

const todos: Todo[] = [];
function App() {
  const [data, setData] = useState(todos);
  return (
    <div className="container">
      <AddTodo setData={setData} />
      <List setData={setData} data={data} />
    </div>
  );
}

export default App;
