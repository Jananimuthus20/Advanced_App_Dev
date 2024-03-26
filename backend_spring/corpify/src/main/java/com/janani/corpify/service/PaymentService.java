package com.janani.corpify.service;

import java.util.List;

import com.janani.corpify.dto.request.PaymentRequest;
import com.janani.corpify.dto.response.PaymentResponse;

public interface PaymentService {
    void savePayment(Long userId, PaymentRequest paymentRequest); 
    void updatePayment(Long uid,Long paymentId, PaymentRequest paymentRequest); 
    List<PaymentResponse> getAllPayment();
    void deletePayment(Long paymentId); 

}
