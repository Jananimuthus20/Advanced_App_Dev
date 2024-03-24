package com.janani.corpify.service;

import java.util.List;

import com.janani.corpify.dto.request.UserRequest;
import com.janani.corpify.dto.response.UserResponse;


public interface UserService {

    List<UserResponse> getAllUsers();
    UserResponse updateUser(UserRequest request, Long user_id);
    UserRequest getUser(Long user_id);
    boolean deleteUser(Long id);
   
    
} 


