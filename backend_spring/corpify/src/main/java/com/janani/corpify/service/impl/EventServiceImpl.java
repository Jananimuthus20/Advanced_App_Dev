package com.janani.corpify.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.janani.corpify.dto.request.EventRequest;
import com.janani.corpify.model.Event;
import com.janani.corpify.repository.EventRepo;
import com.janani.corpify.service.EventService;

@Service
public class EventServiceImpl implements EventService{
    @Autowired
	private EventRepo eventRepository;
	@Override
	 public String saveEvent(EventRequest eventRequest) {
		var event = Event.builder()
                .eventType(eventRequest.getEventType())
                .description(eventRequest.getDescription())
                .count(eventRequest.getCount())
                .mode(eventRequest.getMode())
                .price(eventRequest.getPrice())
                .build();
        eventRepository.save(event);
        return "Event saved successfully.";
	}
    public Event updateEvent(EventRequest eventRequest, Long eid) {
	        Optional<Event> eventExist = eventRepository.findById(eid);
	        var newEvent = new Event();
            if (eventExist.isPresent()) {
	            newEvent = Event.builder()
	            		.eid(eid)
                        .eventType(eventRequest.getEventType())
                        .description(eventRequest.getDescription())
                        .count(eventRequest.getCount())
                        .mode(eventRequest.getMode())
                        .price(eventRequest.getPrice())
	                    .build();
	            eventRepository.save(newEvent);
	        }
	        return newEvent;
	    }

	@Override
	public List<Event> findAllEvent() {
		// It returns a list
		return (List<Event>) eventRepository.findAll();
	}

	@Override
	public Optional<Event>getById(Long id) {
		return eventRepository.findById(id);
	}

}
