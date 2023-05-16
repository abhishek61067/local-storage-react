import React from "react";
// we are importing react because we are using fragments (<></>)
const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return (
        <>
            <div className='update row'>
                <div className='col' >
                    <input className='form-control form-control-lg' value={updateData.title} onChange={(e) => { changeTask(e) }} />
                </div>
                <div className='col-auto' >
                    <button className='btn btn-lg btn-success' onClick={updateTask} >Update Task</button>
                    <button className='btn  btn-lg btn-warning' onClick={cancelUpdate}>Cancel</button>
                </div>
            </div>
        </>
    );
}

export default UpdateForm  