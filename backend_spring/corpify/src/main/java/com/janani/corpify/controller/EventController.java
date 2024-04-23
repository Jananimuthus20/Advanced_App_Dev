package com.janani.corpify.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.janani.corpify.dto.request.EventRequest;
import com.janani.corpify.model.Event;
import com.janani.corpify.service.EventService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/api/event/")
@RequiredArgsConstructor
@Tag(name = "Event", description = "Endpoints for user Events")
public class EventController {
    private final EventService eventService;
    @PostMapping("/saveEvent")
    public String saveEvent(@RequestBody EventRequest eventRequest) {
        return eventService.saveEvent(eventRequest);
    }
    @GetMapping("/getAllEvent")
    public List<Event> getAllEvent() {
        return eventService.findAllEvent();
    }
    @PutMapping("updateEvent/{id}")
    public Event updateEvent(EventRequest eventRequest,@PathVariable Long id) {
        return eventService.updateEvent(eventRequest, id);
    }
    @GetMapping("/getById/{id}")
    public  Optional<Event> getEventById(@PathVariable Long id) {
        return eventService.getById(id);
    }
    

    

    

}
