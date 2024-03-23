package com.janani.corpify.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.janani.corpify.model.User;

public interface UserRepo extends JpaRepository<User, Long>{
    Optional<User> findByEmail(String email);
}
