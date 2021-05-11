import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faArrowsAltV, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ToDoItem(props) {
    const {
        d,
        id,
        onCheck,
        onDragStart,
        onDragOver,
        onDrop,
        dragAndDrop,
        index,
        onDragLeave,
        changeTitle,
        changeAutor,
        changeCat,
        changePri,
        handleClose,
        handleShow,
        changeStatus,
        setData,
        sumData,
        data,
        setSumData,
        handleShowEdit,
        changeStatusItem
    } = props;
    const defaultShow = false;
    const [showEdit, setShowEdit] = useState(defaultShow);
    const [editData, setEditData] = useState(d);
    const [editedData, setEditedData] = useState({});
    const [categoryColor, setCategoryColor] = useState(d.category);
    const [color, setColor] = useState("mark-box");


    // function showw() {
    //     console.log(editedData)
    //     handleShow()
    //     return setEditData(d)
    // }

    // const changeStatusItem = () => {
    //     if (editData.status.length === 0) {
    //       // e.preventDefault();
    //       return setEditData(prevState => ({
    //         ...prevState,
    //         status: "Done"
    //       }))
    //     } else {
    //       return setEditData(prevState => ({
    //         ...prevState,
    //         status: ""
    //       }))
    //     }
    //   };

    return (
        <>
            <tr
                key={index}
                data-position={index}
                draggable
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onDragLeave={onDragLeave}
                className={dragAndDrop && dragAndDrop.draggedTo === Number(index) ? "dropArea" : "" && "todo"}
            >
                <td>
                    {/* <i className="bi bi-check"></i> */}
                    {!d.status ? (
                        <>
                            <FontAwesomeIcon onClick={() => { changeStatusItem(id)}} icon={faCircle} />
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon  onClick={changeStatusItem} icon={faCheckCircle} />
                        </>
                    )}
                    <div className="on-icon">
                        {/* <button id="helpButtons" type="button" value="Done" onClick={changeStatus}> */}
                            {/* <FontAwesomeIcon className="in-progress-icon" onClick={changeStatus} icon={faCircle} /> */}
                        {/* </button> */}
                    </div>
                    {/* <FontAwesomeIcon className="done-icon"  icon={faCheckCircle} /> */}
                </td>
                <td>
                    <table className="table table-striped table-bordered table-hover inline-table">
                        <tbody>
                            <tr className={`${d.status ? "done" : ""}`}>
                                <td>
                                    {d.title}
                                </td>
                            </tr>
                            <tr className={`${d.status ? "done" : ""}`}>
                                <td>
                                    <p>
                                        {d.name}
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td>
                    <div className="inline-table-box">
                        <div className={`${color} ${d.status ? "done" : ""}`}>
                            <p>
                                {d.category}
                            </p>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="inline-table-box">
                        <div className={`${color} ${d.status ? "done" : ""}`}>
                            <p>
                                {d.priority}
                            </p>
                        </div>
                    </div>
                </td>
                <td>
                    <FontAwesomeIcon className="fa-lg" icon={faArrowsAltV} />
                    <FontAwesomeIcon className="icon-edit" onClick={handleShowEdit} icon={faEdit} />
                    <FontAwesomeIcon className="icon-delete" onClick={() => { onCheck(id) }} icon={faTrash} />
                </td>
            </tr>
        </>
    )
};