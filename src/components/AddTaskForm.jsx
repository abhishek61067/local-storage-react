import React from "react";
const AddTaskForm = ({ addTask, newTask, setNewTask }) => {
    return (
        // for add form
        <div className='row add' >
            <div className='col' >
                <input className='form-control form-control-lg' value={newTask} onChange={(e) => { setNewTask(e.target.value) }} />
            </div>
            <div className='col-auto' >
                <button className='btn btn-lg btn-success' onClick={addTask}>Add Task</button>
            </div>
        </div>
    );
}

export default AddTaskForm  