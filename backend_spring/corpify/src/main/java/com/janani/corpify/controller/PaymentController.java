package com.janani.corpify.controller;

import java.util.List;

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

import com.janani.corpify.dto.request.PaymentRequest;
import com.janani.corpify.dto.response.PaymentResponse;
import com.janani.corpify.service.PaymentService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/payment")
@RequiredArgsConstructor
@Tag(name = "Payment", description = "Endpoints for Payments")
public class PaymentController {
    private final PaymentService paymentService;
    @PostMapping("/save/{userId}")
   public ResponseEntity<String> createPayment(@PathVariable Long userId, @RequestBody PaymentRequest paymentRequest) {
        try {
            paymentService.savePayment(userId, paymentRequest);
            return ResponseEntity.status(HttpStatus.CREATED).body("Payment created successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PutMapping("/update/{userId}/{paymentId}")
    public ResponseEntity<String> updateBooking(@PathVariable Long userId,@PathVariable Long paymentId,
            @RequestBody PaymentRequest paymentRequest) {
        try {
            paymentService.updatePayment(userId, paymentId, paymentRequest);
            return ResponseEntity.status(HttpStatus.OK).body("Payment updated successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

   @GetMapping("/getAll")
   public List<PaymentResponse> getAll() {
       return paymentService.getAllPayment();
   }

   @DeleteMapping("/delete/{pid}")
   public String delete(@PathVariable Long pid)
   {
    paymentService.deletePayment(pid);
    return "Payment Deleted Successfully"; 
   }

}
