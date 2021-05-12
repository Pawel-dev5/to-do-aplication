import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faArrowsAltV, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
// import CategoryColor from "./CategoryColor";

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
    
    const [color, setColor] = useState(d.category);
    useEffect(() => {
        if (d.category === "Vegetables") {
            setColor("vege-color")
        } if (d.category === "Chemistry") {
            setColor("chem-color")
        } if (d.category === "Drinks") {
            setColor("drink-color")
        } if (d.category === "Fruits") {
            setColor("fruits-color")
        } if (d.category === "Cheese") {
            setColor("cheese-color")
        } if (d.category === "Meat") {
            setColor("meat-color")
        }
    }, [])  
      // CategoryColor(d)
    // const color = (d) => {
    //     CategoryColor(d)
    // } 
    // const color = CategoryColor(id)
    // if (d === "undefined") {
    //     setColor("mark-box")
    // } else setColor(color)

    // const color = "vege-color"
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
                className={dragAndDrop && dragAndDrop.draggedTo === Number(index) ? "dropArea" : ""}
            >
                <td>
                    {!d.status ? (
                        <>
                            <FontAwesomeIcon
                                onClick={() => updateItem(id, 'status', 'Done')}
                                icon={faCircle}
                                className="circle"
                            />
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon
                                onClick={() => updateItem(id, 'status', '')}
                                icon={faCheckCircle}
                                className="circle-done"
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
                                <td className="comment-container">
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