import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [todolist, setTodoList] = useState([]);

  let saveTodoList = (event) => {
    event.preventDefault();
    let toname = event.target.toname.value;

    if (!todolist.includes(toname)) {
      let finalTodoList = [...todolist, toname];
      setTodoList(finalTodoList);
    } else {
      alert("Todo name already exists");
    }
  };

  let list = todolist.map((value, index) => {
    return (
      <TodoListItem 
        key={index} 
        value={value} 
        indexNumber={index} 
        todolist={todolist} 
        setTodoList={setTodoList} 
      />
    );
  });

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name="toname" required />
        <button type="submit">Save</button>
      </form>
      <div className="outerDiv">
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function TodoListItem({ value, indexNumber, todolist, setTodoList }) {
  let deleteRow = () => {
    let finalData = todolist.filter((_, i) => i !== indexNumber);
    setTodoList(finalData);
  };

  return (
    <li>{indexNumber + 1} {value} <span onClick={deleteRow} style={{ cursor: 'pointer' }}>&times;</span></li>
  );
}
