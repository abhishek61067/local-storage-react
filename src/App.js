import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AddTaskForm from "./components/AddTaskForm"
import UpdateForm from "./components/UpdateForm"
import ToDo from "./components/ToDo"
import React from "react";




import logo from './logo.svg';

import './App.css';

function App() {
  //states of todo list
  const [toDo, setToDo] = useState([]);

  //temp states
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState("");

  //functions for crud

  //add
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]) //toDo is a list thats why wrapping with [] like in useState.
      //to empty the input field after we click add
      setNewTask("");
      // localStorage.setItem("tasks", "nothing");
      // console.log("no prob in addTask func")
    }
  }

  // Delete task 
  ///////////////////////////
  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks);
    //that onlick ={deleteTask(id)} work when the line just above is absent.
  }

  //change task for update update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      status: updateData.status,
      title: e.target.value,
    }
    setUpdateData(newEntry);


  }

  const updateTask = () => {
    let filteredList = [...toDo].filter((task) => task.id !== updateData.id);
    setToDo([...filteredList, updateData]);
    // setUpdateData(""); this not working
    // setUpdateData({}); this not working too
    // setUpdateData({ id: 0, title: "", status: false });
    setUpdateData(""); //now it is working
  }

  //mark done
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status, });
        // return ({ ...task, status: false, status: !task.status, });
      }
      else {
        return task;
      }

    })
    setToDo(newTask);
  }

  //cancel update

  const cancelUpdate = () => {
    // setUpdateData({ id: 0, title: "", status: false });

    setUpdateData("");
  }





  return (
    <div className="container app">
      <h2>To Do list</h2>




      {updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          addTask={addTask}
          newTask={newTask}
          setNewTask={setNewTask} />
      )

      }









      {toDo.length ? "" : "No tasks"}
      <ToDo
        setUpdateData={setUpdateData}
        markDone={markDone}
        deleteTask={deleteTask}
        toDo={toDo}
      />

    </div>
  );
}


export default App;
