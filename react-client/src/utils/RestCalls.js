import {URL} from './Constants.js'

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function json(response) {
    return response.json()
}

export function GetFlights() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');

    let myInit = {method: "GET", headers: headers, mode: "cors"};
    let request = new Request(URL, myInit);

    return fetch(request)
        .then(status)
        .then(json)
        .then(data => {
            console.log(data);
            return data

        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        });

}

export function DeleteFlight(id) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');

    let myInit = {method: "DELETE", headers: headers, mode: "cors"};
    let request = new Request(URL + '/' + id, myInit);

    return fetch(request)
        .then(status)
        .then(response => {
            console.log(response);
            return response.text();
        })
        .catch(err => {
            console.log(err)
            return Promise.reject(err)
        });
}

export function AddFlight(flight) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append("Content-Type", "application/json");

    let myInit = {method: "POST", headers: headers, mode: "cors", body: JSON.stringify(flight)}
    let request = new Request(URL , myInit);

    return fetch(request)
        .then(status)
        .then(response=>{
            return response.text();
        })
        .catch(err => {
            console.log(err)
            return Promise.reject(err)
        });
}
export function UpdateFlight(flight){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append("Content-Type", "application/json");
    let myInit={method: "PUT", headers: headers, mode: "cors",body: JSON.stringify(flight)};
    let request = new Request(URL + '/' + flight.id,myInit);
    return fetch(request).
        then(status)
        .then(response=>{
            return response.text();
        })
        .catch(err=>{
            console.error(err);
            return new Promise.reject(err);
        })

}
