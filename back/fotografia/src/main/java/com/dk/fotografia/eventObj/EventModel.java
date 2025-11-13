package com.dk.fotografia.eventObj;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "event_purchase")
public class EventModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "fk_user")
    private Integer fkUser;

    @Column(name = "date", nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd") 
    private LocalDate date;

    @Column(name = "location")
    private String location;

    @Column(name = "notes")
    private String notes;

    @Column(name = "card_number")
    private String cardNumber;

    @Column(name = "card_name")
    private String cardName;

    @Column(name = "expiry")
    private String expiry;

    @Column(name = "cvv")
    private String cvv;

    @Column(name = "package_name")
    private String packageName;

    @Column(name = "price")
    private Double price;
}
