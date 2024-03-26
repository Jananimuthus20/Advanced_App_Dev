package com.janani.corpify.service;

import com.janani.corpify.dto.request.LoginRequest;
import com.janani.corpify.dto.request.RegisterRequest;
import com.janani.corpify.dto.response.LoginResponse;

public interface AuthService {
     String register(RegisterRequest registerRequest);
    LoginResponse login(LoginRequest loginRequest);
    String createAdmin();
} 
