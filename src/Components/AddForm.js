import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { useState, useEffect } from 'react'
export default function AddForm(props) {
    const {
        changeTitle,
        changeAutor,
        changeCat,
        changePri,
        data
    } = props;

    const categories = [
        { name: 'Fruits', value: 'Fruits', color: "fruits-color" },
        { name: 'Vegetables', value: 'Vegetables', color: "vege-color" },
        { name: 'Cheese', value: 'Cheese', color: "cheese-color" },
        { name: 'Drinks', value: 'Drinks', color: "drink-color" },
        { name: 'Meat', value: 'Meat', color: "meat-color" },
        { name: 'Chemistry', value: 'Chemistry', color: "chem-color" },
    ];
    const prioryties = [
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
        { name: '4', value: '4' },
        { name: '5', value: '5' },
        { name: '6', value: '6' },
    ];

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
                    <ButtonGroup toggle>
                        {categories.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="secondary"
                                name="radio"
                                className={`${radio.color} radio-buttons `}
                                value={radio.value}
                                checked={data.category === radio.value}
                                onChange={changeCat}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Prioryty</Form.Label>
                    <div className="priority-check-container">
                        <ButtonGroup toggle>
                            {prioryties.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    type="radio"
                                    variant="secondary"
                                    name="radio"
                                    className="radio-buttons"
                                    value={radio.value}
                                    checked={data.priority === radio.value}
                                    onChange={changePri}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </div>
                </Form.Group>
            </Form>
        </>
    )
}