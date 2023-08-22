import Dropdown from 'react-bootstrap/Dropdown'

function LocationDropdown() {
    return(
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success">
                    Alege orasul
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => {
                        console.log('Bucuresti')
                    }}>Bucuresti</Dropdown.Item>
                    <Dropdown.Item>Cluj</Dropdown.Item>
                    <Dropdown.Item>Brasov</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>           
        </>
    )
}

export default LocationDropdown;