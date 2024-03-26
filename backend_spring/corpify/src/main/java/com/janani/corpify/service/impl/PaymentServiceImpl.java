package com.janani.corpify.service.impl;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import com.janani.corpify.dto.request.PaymentRequest;
import com.janani.corpify.dto.response.PaymentResponse;
import com.janani.corpify.model.Payment;
import com.janani.corpify.model.User;
import com.janani.corpify.repository.PaymentRepo;
import com.janani.corpify.repository.UserRepo;
import com.janani.corpify.service.PaymentService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService{
     private final PaymentRepo paymentRepository;
    private final UserRepo userRepository;

    public void savePayment(Long userId, PaymentRequest paymentRequest) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with ID: " + userId));

        Payment payment = Payment.builder()
                .pStatus(paymentRequest.getPStatus())
                .pDate(paymentRequest.getPDate())
                .pMode(paymentRequest.getPMode())
                .build();
        payment.setUser(user);
        paymentRepository.save(payment);
    }

    public void updatePayment(Long uid,Long paymentId, PaymentRequest paymentRequest) {
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new IllegalArgumentException("Payment not found with ID: " + paymentId));
        User user = userRepository.findById(uid)
                .orElseThrow(() -> new IllegalArgumentException("User not found with ID: " + uid));
    
        payment.setPStatus(paymentRequest.getPStatus());
        payment.setPDate(paymentRequest.getPDate());
        payment.setPMode(paymentRequest.getPMode());
        payment.setUser(user);
        paymentRepository.save(payment);
    }


   public List<PaymentResponse> getAllPayment() {
        List<Payment> payment = paymentRepository.findAll();
        return payment.stream()
                .map(this::mapToPaymentResponse)
                .collect(Collectors.toList());
    }

    private PaymentResponse mapToPaymentResponse(Payment payment) {
        return PaymentResponse.builder()
                .pid(payment.getPid())
                .pStatus(payment.getPStatus())
                .pDate(payment.getPDate())
                .pMode(payment.getPMode())
                .build();
    }

    public void deletePayment(Long paymentId) {
        paymentRepository.deleteById(paymentId);
    }

   

}
