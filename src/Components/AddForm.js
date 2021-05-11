import Form from 'react-bootstrap/Form';
export default function AddForm(props) {
    const {
        changeTitle,
        changeAutor,
        changeCat,
        changePri,
        handleChangeWho
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
                    {/* <Form.Control as="select" onChange={changeCat}>
                        <option> </option>
                        <option>Fruits</option>
                        <option>Vegetables</option>
                        <option>Cheese</option>
                        <option>Drinks</option>
                        <option>Meat</option>
                        <option>Chemistry</option>
                    </Form.Control> */}
                    <div>
                    <button id="helpButtons" type="button" value="Fruits" onClick={handleChangeWho}>Fruits</button>
                    <button id="helpButtons" type="button" value="Vegetables" onClick={handleChangeWho}>Vegetables</button>
                    <button id="helpButtons" type="button" value="Cheese" onClick={handleChangeWho}>Cheese</button>
                    <button id="helpButtons" type="button" value="Drinks" onClick={handleChangeWho}>Drinks</button>
                    <button id="helpButtons" type="button" value="Meat" onClick={handleChangeWho}>Meat</button>
                    <button id="helpButtons" type="button" value="Chemistry" onClick={handleChangeWho}>Chemistry</button>

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