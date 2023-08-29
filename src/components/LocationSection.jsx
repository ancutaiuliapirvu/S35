import { useState } from "react";
import LocationDropdown from "./LocationDropdown";
import LocationText from "./LocationText";

function LocationSection() {
    // o sa aducem state-ul lui locationDropdown aici in parinte folosind principiul de lift state up
    const [locationSelected, setLocationSelected] = useState("Bucuresti");

    // o sa pasam state-ul lui locationDropdown de aici spre LocationText folosind props
    return(
        <div>
            {/* Sunt pe acelasi nivel, deci sunt "siblings" (frati) - au acelasi parinte, pe LocationSection */}
            <LocationText locationSelected={locationSelected}/>
            <LocationDropdown setLocationSelected={setLocationSelected}/>
            {/* pasam datele intre frati
                nu putem pasa date decat prin props de la un parinte catre un copil
                daaaar mai exista un mod de a pasa informatii de la copil catre parinte lifting state up
            */}
        </div>    
    )
}

export default LocationSection;