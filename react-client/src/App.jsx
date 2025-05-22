import './App.css'
import './utils/RestCalls.js'
import {useEffect, useState} from "react";
import {AddFlight, DeleteFlight, GetFlights, Login, UpdateFlight} from "./utils/RestCalls.js";
import FlightTable from "./FlightTable.jsx";
import FlightForm from "./FlightForm.jsx";
import LoginPage from "./LoginPage.jsx";

function App() {
    const [flights, setFlights] = useState([]);
    const [token,setToken] = useState("");

    async function addFunction(flight) {
        try {
            console.log("Din addFunction a plecat cu urmatorul token:" +token);
            await AddFlight(flight,token);

            const data = await GetFlights(token);
            setFlights(data);
        } catch (err) {
            console.error(err)
        }
    }

    async function DeleteFunction(id) {
        try {
            await DeleteFlight(id,token)
            const data = await GetFlights(token);
            setFlights(data);
        } catch (err) {
            console.error(err)
        }


    }
    async function UpdateFunction(flight){
        try{
            await UpdateFlight(flight,token);
            const data=await GetFlights(token);
            setFlights(data);
        }catch(err){
            console.error(err)
        }
    }
    async function LoginEmployee(username,password){
        try{
            let newToken=await Login(username,password);
            setToken(newToken);
        }
        catch(err){
            console.error(err);
        }
    }
    useEffect(() => {
        console.log(token)
        GetFlights(token).then(data => {
            setFlights(data);
        })
            .catch(error => {
                console.log(error)
            })
    }, []);
    if(token) {
        return (
            <>  <h1>Ryanair - revolutionary aviation</h1>
                <div className="FlightDiv">
                    <div>{<FlightForm addFunc={addFunction}/>}</div>
                    <div><FlightTable flights={flights} deleteFunction={DeleteFunction}
                                      updateFunction={UpdateFunction}/></div>
                </div>
            </>
        )
    }
        return(
            <>
                {<LoginPage loginFunction={LoginEmployee}/>}
            </>
        )

}

export default App
