import Dropdown from 'react-bootstrap/Dropdown'

function LocationDropdown(props) {

    console.log('props dropdown', props)
    const {setLocationSelected} = props;
    return(
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success">
                    Alege orasul
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item 
                        onClick={() => setLocationSelected('Bucuresti') }>
                        Bucuresti</Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => setLocationSelected('Cluj')}
                    >Cluj</Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => setLocationSelected('Brasov')}
                    >Brasov</Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => setLocationSelected('Timisoara')}
                    >Timisoara</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>           
        </>
    )
}

export default LocationDropdown;