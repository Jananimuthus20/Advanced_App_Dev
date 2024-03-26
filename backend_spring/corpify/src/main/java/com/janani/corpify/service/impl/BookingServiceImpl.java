package com.janani.corpify.service.impl;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.janani.corpify.dto.request.BookingRequest;
import com.janani.corpify.dto.response.BookingResponse;
import com.janani.corpify.model.Booking;
import com.janani.corpify.model.User;
import com.janani.corpify.repository.BookingRepo;
import com.janani.corpify.repository.UserRepo;
import com.janani.corpify.service.BookingService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class BookingServiceImpl implements BookingService{
     private final BookingRepo bookingRepository;
    private final UserRepo userRepository;

    @Transactional
    public void saveBooking(Long userId, BookingRequest bookingRequest) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with ID: " + userId));
        
        Booking booking = Booking.builder()
                .submissionDate(bookingRequest.getSubmissionDate())
                .eventDate(bookingRequest.getEventDate())
                .status(bookingRequest.getStatus())
                .headCount(bookingRequest.getHeadCount())
                .build();
        System.out.println(booking);
        booking.setUser(user);
        bookingRepository.save(booking);
    }
     public void updateBooking(Long uid,Long bookingId, BookingRequest bookingRequest) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new IllegalArgumentException("Booking not found with ID: " + bookingId));
        User user = userRepository.findById(uid)
                .orElseThrow(() -> new IllegalArgumentException("User not found with ID: " + uid));
    
        booking.setSubmissionDate(bookingRequest.getSubmissionDate());
        booking.setEventDate(bookingRequest.getEventDate());
        booking.setStatus(bookingRequest.getStatus());
        booking.setHeadCount(bookingRequest.getHeadCount());
        booking.setUser(user);
        bookingRepository.save(booking);
    }


   public List<BookingResponse> getAllBooking() {
        List<Booking> bookings = bookingRepository.findAll();
        return bookings.stream()
                .map(this::mapToBookingResponse)
                .collect(Collectors.toList());
    }

    public Optional<BookingResponse> getById(Long bookingId)
    {
        Optional<Booking> bookingOptional = bookingRepository.findById(bookingId);
        return bookingOptional.map(this::mapToBookingResponse);

    }

    private BookingResponse mapToBookingResponse(Booking booking) {
        return BookingResponse.builder()
                .bid(booking.getBid())
                .submissionDate(booking.getSubmissionDate())
                .eventDate(booking.getEventDate())
                .status(booking.getStatus())
                .headCount(booking.getHeadCount())
                .build();
    }

    public void deleteBooking(Long bookingId) {
        bookingRepository.deleteById(bookingId);
    }


}
