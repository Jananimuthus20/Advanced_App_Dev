package com.janani.corpify.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.janani.corpify.model.Booking;


public interface BookingRepo extends JpaRepository<Booking,Long> {
    List<Booking> findByUserUid(Long userId);

}
