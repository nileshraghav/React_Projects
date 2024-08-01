import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import ToDoName from "./ToDoName";
import ToDoItems from "./ToDoItems";
import "./App.css";
import AddTodo from "./AddTodo";
import TestCss from "./TestCss";

function App() {
  var items = [
    {
      itemname: "Buy Milk",
      date: "10/04/2024",
    },
    {
      itemname: "Buy Laptop",
      date: "10/04/2024",
    },
    {
      itemname: "Visit Cyber Succes",
      date: "10/04/2024",
    },
  ];
  return (
    <>
      <TestCss></TestCss>
      <ToDoName></ToDoName>
      <AddTodo></AddTodo>
      <div className="row">
        <ToDoItems item={items}></ToDoItems>
      </div>
    </>
  );
}

export default App;
