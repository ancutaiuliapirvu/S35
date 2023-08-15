import { Button } from "react-bootstrap";

function AddUser() {
    return(
        <>
            <label>Name</label>
            <input type="text"></input>
            <button type="submit">Submit</button>
            <Button variant="primary">Buton</Button>
        </>
    )
}

export default AddUser;