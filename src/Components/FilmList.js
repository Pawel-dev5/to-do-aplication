import Table from 'react-bootstrap/Table';
import ModalBox from "./Modal";
import ToDoItem from './TodoItem';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCsv, faFilePdf, faPlusCircle, } from '@fortawesome/free-solid-svg-icons';
import { CSVLink } from "react-csv";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { useState } from "react";

export default function FilmList(props) {
    const {
        changeTitle,
        changeAutor,
        changeCat,
        changePri,
        sumData,
        setData,
        add,
        clearAll,
        show,
        handleClose,
        handleShow,
        removeItem,
        setSortValue,
        sort,
        sorted,
        sumDataCopy,
        setSumData,
        filter,
        setFilterValue,
        // filtr
    } = props;

    const data = [sumData]
    // Table counter
    const count = sumData.length;
    // CSV export headers. To export use https://www.npmjs.com/package/react-csv
    const headers2 = [
        { label: "Tytuł", key: "title" },
        { label: "Autor", key: "name" },
        { label: "Kategoria", key: "category" },
        { label: "Priorytet", key: "priority" }
    ];
    // PDF exports, use https://www.npmjs.com/package/jspdf and https://www.npmjs.com/package/jspdf-autotable
    function exportPDF() {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);
        doc.setLanguage("pl-Pl")


        const title = "Lista filmów do obejrzenia";
        const headers = [["Tytul", "Autor", "Kategoria", "Priorytet"]];

        const data = sumData.map(elt => [elt.title, elt.name, elt.category, elt.priority]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("Lista filmów.pdf")
    }
    // Function clear category filter
    function ClearFilter() {
        if (sumDataCopy.length !== 0) {
            setSumData(sumDataCopy)
        }
        return
    }

    // Drop & Drag
    // It doesn't work on mobile devices, so an implementation with mouse events would need to be done.
    const initialDnDState = {
        draggedFrom: null,
        draggedTo: null,
        isDragging: false,
        originalOrder: [],
        updatedOrder: []
    }
    const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

    // onDragStart fires when an element
    // starts being dragged
    const onDragStart = (event) => {
        const initialPosition = Number(event.currentTarget.dataset.position);
        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: initialPosition,
            isDragging: true,
            originalOrder: sumData
        });

        // Note: this is only for Firefox.
        // Without it, the DnD won't work.
        // But we are not using it.
        event.dataTransfer.setData("text/html", '');
    }

    // onDragOver fires when an element being dragged
    // enters a droppable area.
    // In this case, any of the items on the list
    const onDragOver = (event) => {

        // in order for the onDrop
        // event to fire, we have
        // to cancel out this one
        event.preventDefault();

        let newList = dragAndDrop.originalOrder;

        // index of the item being dragged
        const draggedFrom = dragAndDrop.draggedFrom;

        // index of the droppable area being hovered
        const draggedTo = Number(event.currentTarget.dataset.position);

        const itemDragged = newList[draggedFrom];
        const remainingItems = newList.filter((item, index) => index !== draggedFrom);

        newList = [
            ...remainingItems.slice(0, draggedTo),
            itemDragged,
            ...remainingItems.slice(draggedTo)
        ];

        if (draggedTo !== dragAndDrop.draggedTo) {
            setDragAndDrop({
                ...dragAndDrop,
                updatedOrder: newList,
                draggedTo: draggedTo
            })
        }

    }

    const onDrop = (event) => {

        setSumData(dragAndDrop.updatedOrder);

        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: null,
            draggedTo: null,
            isDragging: false
        });
    }

    function onDragLeave() {
        setDragAndDrop({
            ...dragAndDrop,
            draggedTo: null
        });

    }
    // Not needed, just for logging purposes:
    // useEffect(() => {
    //     console.log("Dragged From: ", dragAndDrop && dragAndDrop.draggedFrom);
    //     console.log("Dropping Into: ", dragAndDrop && dragAndDrop.draggedTo);
    // }, [dragAndDrop])

    // useEffect(() => {
    //     console.log("List updated!");
    // }, [sumData])
    return (
        <>
            <ModalBox
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                add={add}
                clearAll={clearAll}
                sumData={sumData}
                changeTitle={changeTitle}
                changeAutor={changeAutor}
                changeCat={changeCat}
                changePri={changePri}
            />
            <div className="container-list">
                <div>
                    <div className="header-container">
                        <Button variant="primary" onClick={handleShow} >
                            Dodaj film
                        <FontAwesomeIcon className="add-icon" icon={faPlusCircle} />
                        </Button>
                        <div className="clear-container">
                            <h6>Filmy do obejrzenia: {count}</h6>
                            <div>
                                <Button onClick={clearAll} variant="primary" className="btn-rmv">Wyczyść listę</Button>
                                <Button onClick={ClearFilter}>Wyczyść filtr</Button>
                            </div>
                        </div>
                        <div className="filter-container">
                            <Form>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Label>Sortowanie:</Form.Label>
                                    <Form.Control as="select" custom value={sort} onClick={sorted} onChange={setSortValue}>
                                        <option value="title">Tytuł</option>
                                        <option value="name">Autor</option>
                                        <option value="category">Kategoria</option>
                                        <option value="priority">Priorytet</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Label>Filtr kategorii:</Form.Label>
                                    <Form.Control as="select" custom onClick={filter}>
                                        <option value="Kryminał" onChange={setFilterValue}>Kryminał</option>
                                        <option value="Science-fiction" onChange={setFilterValue}>Science-fiction</option>
                                        <option value="Fantasy">Fantasy</option>
                                        <option value="Poezja">Poezja</option>
                                        <option value="Dramat" onChange={setFilterValue}>Dramat</option>
                                        <option value="Nauki ścisłe">Nauki ścisłe</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Tytuł</th>
                                <th>Autor</th>
                                <th>Kategoria</th>
                                <th>Priorytet</th>
                                <th className="guide">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sumData.map((d, index) => {
                                return (
                                    <ToDoItem
                                        key={index}
                                        id={index}
                                        index={index}
                                        d={d}
                                        onCheck={removeItem}
                                        setData={setData}
                                        handleShow={handleShow}
                                        handleClose={handleClose}
                                        show={show}
                                        add={add}
                                        data={d}
                                        clearAll={clearAll}
                                        sumData={sumData}
                                        changeTitle={changeTitle}
                                        changeAutor={changeAutor}
                                        changeCat={changeCat}
                                        changePri={changePri}
                                        setSumData={setSumData}
                                        onDragStart={onDragStart}
                                        onDragOver={onDragOver}
                                        onDrop={onDrop}
                                        dragAndDrop={dragAndDrop}
                                        onDragLeave={onDragLeave}
                                    />
                                )
                            })}
                        </tbody>
                    </Table>
                    {sumData.length !== 0 ? (
                        <>
                            <CSVLink data={data[0]} headers={headers2} filename={"Lista filmów.csv"} separator={';'}>
                                <Button>
                                    Pobierz CSV
                                    <FontAwesomeIcon className="download-icon" icon={faFileCsv} />
                                </Button>
                            </CSVLink>
                            <Button className="pdf-button" onClick={() => exportPDF()}>
                                Generuj PDF
                                <FontAwesomeIcon className="download-icon" icon={faFilePdf} />
                            </Button>
                        </>
                    ) : (
                            <>
                                <p>Aby pobrać tabelę dodaj film</p>
                            </>
                        )}
                </div>
            </div>
        </>
    )
}