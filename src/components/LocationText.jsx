function LocationText(props) {
    console.log('props', props);
    
    const {locationSelected} = props;

    return (
        <p>
            Orasul curent este <strong>{locationSelected}</strong>
        </p>
    )
}

export default LocationText;