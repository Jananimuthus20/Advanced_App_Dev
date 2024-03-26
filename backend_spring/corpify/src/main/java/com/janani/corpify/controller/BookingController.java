package com.janani.corpify.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.janani.corpify.dto.request.BookingRequest;
import com.janani.corpify.dto.response.BookingResponse;
import com.janani.corpify.service.BookingService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/booking")
@RequiredArgsConstructor
@Tag(name = "Booking", description = "Endpoints for Bookings")
public class BookingController {
     private final BookingService bookingService;
    @PostMapping("/save/{userId}")
   public ResponseEntity<String> createBooking(@PathVariable Long userId, @RequestBody BookingRequest bookingRequest) {
        try {
            bookingService.saveBooking(userId, bookingRequest);
            return ResponseEntity.status(HttpStatus.CREATED).body("Booking created successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    @GetMapping("/getById/{bookingId}")
    public ResponseEntity<?> getBookingById(@PathVariable Long bookingId) {
        Optional<BookingResponse> bookingResponseOptional = bookingService.getById(bookingId);
        if (bookingResponseOptional.isPresent()) {
            return ResponseEntity.ok(bookingResponseOptional.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Booking not found with ID: " + bookingId);
        }
    }
     @PutMapping("/update/{userId}/{bookingId}")
    public ResponseEntity<String> updateBooking(@PathVariable Long userId,@PathVariable Long bookingId,
            @RequestBody BookingRequest bookingRequest) {
        try {
            bookingService.updateBooking(userId, bookingId, bookingRequest);
            return ResponseEntity.status(HttpStatus.OK).body("Booking updated successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

   @GetMapping("/getAll")
   public List<BookingResponse> getAll() {
       return bookingService.getAllBooking();
   }

   @DeleteMapping("/delete/{bid}")
   public String delete(@PathVariable Long bid)
   {
    bookingService.deleteBooking(bid);
    return "Booking Deleted Successfully"; 
   }

}
