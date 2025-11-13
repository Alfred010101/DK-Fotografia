package com.dk.fotografia.eventObj;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<EventModel, Integer>{

    Optional<EventModel> findByFkUser(Integer fkUser);

}
