package com.janani.corpify.service;

import java.util.List;
import java.util.Optional;

import com.janani.corpify.dto.request.EventRequest;
import com.janani.corpify.model.Event;

public interface EventService {
     String saveEvent(EventRequest eventRequest);
     Event updateEvent(EventRequest eventRequest, Long eid);
      List<Event> findAllEvent();
     public Optional<Event>getById(Long id);

}
