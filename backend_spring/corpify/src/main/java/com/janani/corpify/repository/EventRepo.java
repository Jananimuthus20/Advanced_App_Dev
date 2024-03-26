package com.janani.corpify.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.janani.corpify.model.Event;

public interface EventRepo extends JpaRepository<Event,Long>{

}
