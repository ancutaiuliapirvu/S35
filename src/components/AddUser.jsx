import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function AddUser() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleNameChange(event) {
        const nameInput = event.target.value;
        setName(nameInput);
    }

    function handleEmailChange(event) {
        const emailInput = event.target.value;
        setEmail(emailInput);
    }

    return(
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" onChange={handleNameChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" onChange={handleEmailChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </>
    )
}

export default AddUser;