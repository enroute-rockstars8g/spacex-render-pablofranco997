import { useEffect, useState } from "react";

export const Rockets =  () => {

    const [rocketsGet, setRocketsGet] = useState([])

    const rocketsFetch = async() => {
        try{
        const response = await fetch(`https://api.spacex.land/rest/rockets`);
        if (response.status !== 200) return;
        const rockets = await response.json();
        return rockets;
        }
        catch(e){
            console.log(e)
        };
    }
    
    useEffect(() => {
        rocketsFetch()
        .then(result => setRocketsGet(result))
        .catch(e => console.log("otra cosa" + e))
    }, []);
    

    return(
            <>
                <h2>Rockets</h2>
                <div className="container-flex">
                    {
                    rocketsGet.map(rocket =>
                    <div key={rocket.id} className="rockets-info" >
                        <h4>{rocket.name}</h4>
                        <p>{rocket.description}</p>
                        <p>Height: {rocket.height.meters} mts.</p>
                        <p>Diameter: {rocket.diameter.meters} mts.</p>
                        <p>Weight: {rocket.mass.kg} kgs.</p>
                        <p>First Flight: {rocket.first_flight} </p>
                    </div>
                    )
                    }
                </div>
            </>
    )
};