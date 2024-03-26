package com.janani.corpify.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.janani.corpify.model.Payment;

public interface PaymentRepo extends JpaRepository<Payment,Long>{
      List<Payment> findByUserUid(Long userId);
    void deleteByPid(Long pid);

}
