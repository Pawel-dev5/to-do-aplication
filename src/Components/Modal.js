import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddForm from "./AddForm";

export default function ModalBox(props) {
    const {
        changeTitle,
        changeAutor,
        changeCat,
        changePri,
        ToDoAction,
        data,
        sumData,
        add,
        show,
        handleClose,
        changeStatus,
        handleChangeWho
    } = props;
    return (
        <>
            <Modal show={show} onHide={handleClose} data={data}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm
                        handleChangeWho={handleChangeWho}
                        add={add}
                        data={data}
                        sumData={sumData}
                        handleClose={handleClose}
                        ToDoAction={ToDoAction}
                        changeTitle={changeTitle}
                        changeAutor={changeAutor}
                        changeCat={changeCat}
                        changePri={changePri} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={add} >
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}