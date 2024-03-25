package com.janani.corpify.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.janani.corpify.model.Booking;

@Repository
public interface BookingRepo extends JpaRepository<Booking,Integer> {

}
