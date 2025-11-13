package com.dk.fotografia.eventObj;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/event")
@RequiredArgsConstructor
public class EventController 
{

    private final EventService eventService;

    @PostMapping(value = "/save")
    public ResponseEntity<ApiResponse<EventModel>> createUser(@RequestBody EventDTO evet) 
    {
        System.out.println(evet);
        EventModel savedEvent = eventService.save(evet);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(new ApiResponse<>("Evento guardado satisfactoriamente", savedEvent));
    }

    @GetMapping("/all")
    public List<EventModel> getAllEvents() {
        return eventService.getAllEvents();
    }


    @Getter
    @AllArgsConstructor
    private static class ApiResponse<T> 
    {
        private String message;
        private T data;
    }
}
