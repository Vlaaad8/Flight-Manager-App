import './App.css'
import './utils/RestCalls.js'
import {useEffect, useState} from "react";
import {AddFlight, DeleteFlight, GetFlights, UpdateFlight} from "./utils/RestCalls.js";
import FlightTable from "./FlightTable.jsx";
import FlightForm from "./FlightForm.jsx";

function App() {
    const [flights, setFlights] = useState([]);

    async function addFunction(flight) {
        try {
            await AddFlight(flight);

            const data = await GetFlights();
            setFlights(data);
        } catch (err) {
            console.error(err)
        }
    }

    async function DeleteFunction(id) {
        try {
            await DeleteFlight(id)
            const data = await GetFlights();
            setFlights(data);
        } catch (err) {
            console.error(err)
        }


    }
    async function UpdateFunction(flight){
        try{
            console.log("I am here")
            await UpdateFlight(flight);
            console.log("I am here 2")
            const data=await GetFlights();
            setFlights(data);
        }catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        GetFlights().then(data => {
            setFlights(data);
        })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return (
        <>  <h1>Ryanair - revolutionary aviation</h1>
            <div className="FlightDiv">
                <div>{<FlightForm addFunc={addFunction}/>}</div>
                <div><FlightTable flights={flights} deleteFunction={DeleteFunction} updateFunction={UpdateFunction}/></div>
            </div>
        </>
    )
}

export default App
