package com.dk.fotografia.eventObj;

import java.util.List;

import org.springframework.stereotype.Service;

import com.dk.fotografia.userObj.UserModel;
import com.dk.fotografia.userObj.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EventService {

    private final EventRepository eventRepository;
    private final UserRepository userRepository;

    public EventModel save(EventDTO eventDTO)
    {
        UserModel user = userRepository.findByUsername(eventDTO.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        EventModel event = new EventModel();
        event.setFkUser(user.getId());
        event.setLocation(eventDTO.getLocation());
        event.setNotes(eventDTO.getNotes());
        event.setCardNumber(eventDTO.getCardNumber());
        event.setCardName(eventDTO.getCardName());
        event.setExpiry(eventDTO.getExpiry());
        event.setCvv(eventDTO.getCvv());
        event.setPackageName(eventDTO.getPackageName());
        event.setPrice(eventDTO.getPrice());
        event.setDate(eventDTO.getDate());

        EventModel eventSaved = eventRepository.save(event);
        System.out.println(eventSaved);
        return eventSaved;
    }

    public List<EventModel> getAllEvents() {
        return eventRepository.findAll();
    }

}
