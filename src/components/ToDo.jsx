import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons"



const ToDo = ({ markDone, setUpdateData, deleteTask, toDo }) => {
    return (
        <>
            {
                toDo.sort((a, b) =>
                    a.id < b.id ? -1 : 1 //here after => i am not using return, because arrow function
                    // will use return in the back scene for 1 line. 
                ).map((task, key) => {
                    return (
                        <>
                            {/* this div holds the task number, name and control icons */}
                            <div className='col taskBg'>

                                {/* this div holds the task number and name. */}
                                <div className={task.status ? "done" : ""}>
                                    <span className={"taskNumber"} >{key + 1 + " "}</span>
                                    <span className={"taskText"} >{task.title}</span>
                                </div>

                                {/* this div holds the icons */}
                                <div className='iconsWrap'>
                                    <span> <FontAwesomeIcon icon={faCircleCheck} title="completed/uncompleted" onClick={() => { markDone(task.id); }} /></span>
                                    {task.status ? null : (<span> <FontAwesomeIcon icon={faPen} title="edit" onClick={() => setUpdateData({
                                        id: task.id,
                                        title: task.title,
                                        status: task.status,
                                    })} /></span>)}
                                    {/* when we click on edit, we are sending the data of the clicked item to the updateData object. */}
                                    <span> <FontAwesomeIcon icon={faTrashCan} title="delete" onClick={() => deleteTask(task.id)} /></span>
                                    {/* in normal js, we use functionName() but in react, we just use functionName thats why onClick= {deleteTask(task.id)} is a wrong way  */}


                                </div>




                            </div>
                        </>
                    )
                }
                )
            }</>


    );
}

export default ToDo  