import Form from 'react-bootstrap/Form';
export default function AddForm(props) {
    const {
        changeTitle,
        changeAutor,
        changeCat,
        changePri,
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
                    <Form.Label>Category</Form.Label>
                    <div>
                        <button id="helpButtons" type="button" value="Fruits" onClick={changeCat}>Fruits</button>
                        <button id="helpButtons" type="button" value="Vegetables" onClick={changeCat}>Vegetables</button>
                        <button id="helpButtons" type="button" value="Cheese" onClick={changeCat}>Cheese</button>
                        <button id="helpButtons" type="button" value="Drinks" onClick={changeCat}>Drinks</button>
                        <button id="helpButtons" type="button" value="Meat" onClick={changeCat}>Meat</button>
                        <button id="helpButtons" type="button" value="Chemistry" onClick={changeCat}>Chemistry</button>

                    </div>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Prioryty</Form.Label>
                    <div>
                        <button id="helpButtons" type="button" value="1" onClick={changePri}>1</button>
                        <button id="helpButtons" type="button" value="2" onClick={changePri}>2</button>
                        <button id="helpButtons" type="button" value="3" onClick={changePri}>3</button>
                        <button id="helpButtons" type="button" value="4" onClick={changePri}>4</button>
                        <button id="helpButtons" type="button" value="5" onClick={changePri}>5</button>

                    </div>
                </Form.Group>
            </Form>
        </>
    )
}