package com.janani.corpify.service;

import java.util.List;
import java.util.Optional;

import com.janani.corpify.dto.request.BookingRequest;
import com.janani.corpify.dto.response.BookingResponse;

public interface BookingService {
    void saveBooking(Long userId, BookingRequest bookingRequest);
      void updateBooking(Long uid,Long bookingId, BookingRequest bookingRequest) ;
    List<BookingResponse> getAllBooking();
    Optional<BookingResponse> getById(Long bookingId);
    void deleteBooking(Long bookingId);

}
