import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faArrowsAltV, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

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
        sumData,
        setSumData,
        handleShowEdit,
    } = props;
    const [color, setColor] = useState("mark-box");

    // Update item status & refresh data
    const updateItem = (id, whichvalue, newvalue) => {
        const index = id;
        console.log(index)

        let g = sumData[id]
        g[whichvalue] = newvalue
        if (index === -1) {
            // handle error
            console.log('no match')
        }
        else
            setSumData([
                ...sumData.slice(0, index),
                g,
                ...sumData.slice(index + 1)
            ]
            );
    }

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
                    {!d.status ? (
                        <>
                            <FontAwesomeIcon
                                onClick={() => updateItem(id, 'status', 'Done')}
                                icon={faCircle} />
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon
                                onClick={() => updateItem(id, 'status', '')}
                                icon={faCheckCircle}
                            />
                        </>
                    )}
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