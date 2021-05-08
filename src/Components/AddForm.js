import Form from 'react-bootstrap/Form';
export default function AddForm(props) {
    const {
        changeTitle,
        changeAutor,
        changeCat,
        changePri
    } = props;
    return (
        <>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Tytuł" onChange={changeTitle} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Autor" onChange={changeAutor} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Kategoria</Form.Label>
                    <Form.Control as="select" onChange={changeCat}>
                        <option> </option>
                        <option>Kryminał</option>
                        <option>Science-fiction</option>
                        <option>Fantasy</option>
                        <option>Poezja</option>
                        <option>Dramat</option>
                        <option>Nauki ścisłe</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Priorytet</Form.Label>
                    <Form.Control as="select" onChange={changePri}>
                        <option> </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </>
    )
}