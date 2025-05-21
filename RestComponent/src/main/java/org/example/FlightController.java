package org.example;

import org.example.clientfx.Flight;
import org.example.clientfx.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@CrossOrigin(origins="http://localhost:5174")
@RestController
@RequestMapping({"ryanair/flights"})
public class FlightController {

    @Autowired
    private FlightRepository flightRepository;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Flight> getFlights() {
        System.out.println("Printing all the flights...");
        return flightRepository.findAll();

    }
    @RequestMapping(method = RequestMethod.POST)
    public Flight add(@RequestBody Flight flight){
        flightRepository.add(flight);
        return flight;
    }
    @RequestMapping(value ="/{id}",method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody Flight flight,@PathVariable int id){
        System.out.println("Updating flight");
        if(flight.getId()!=id){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        flightRepository.update(id,flight);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public ResponseEntity<?> getById(@PathVariable int id){
        Flight flight=flightRepository.findById(id).orElse(null);
        if(flight==null){
            return new ResponseEntity<String>("Flight not found", HttpStatus.NOT_FOUND);
        }
        else{
            return new ResponseEntity<>(flight, HttpStatus.OK);
        }
    }
    @RequestMapping(value="/{id}",method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable int id){
        try{
            Flight flight=new Flight("","",0,"", LocalDateTime.now());
            flight.setId(id);
            Optional<Flight> deletedFlight=flightRepository.delete(flight);
            if(deletedFlight.isPresent()) {
                return new ResponseEntity<>("Flight Updated", HttpStatus.OK);
            }
            else{
                return new ResponseEntity<>("Flight not found", HttpStatus.NOT_FOUND);
            }
        }
        catch(Exception e){
            return new ResponseEntity<String>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }
    }





