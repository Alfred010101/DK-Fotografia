package com.dk.fotografia.eventObj;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EventDTO{
    String username;
    LocalDate date;
    String location;
    String notes;
    String cardNumber;
    String cardName;
    String expiry;
    String cvv;
    String packageName;
    Double price;
}
