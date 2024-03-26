package com.janani.corpify.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.janani.corpify.dto.request.UserRequest;
import com.janani.corpify.dto.response.UserResponse;
import com.janani.corpify.enums.Role;
import com.janani.corpify.model.User;
import com.janani.corpify.repository.JwtRepo;
import com.janani.corpify.repository.UserRepo;
import com.janani.corpify.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    @Autowired
	UserRepo userRepository; 
	private final PasswordEncoder passwordEncoder;
	@Autowired
	JwtRepo jwtRepository;
		
	public List<UserResponse> getAllUsers()
	{
		List<User> userList = userRepository.findAll();
        return userList.stream()
                .filter(user -> !user.getRole().equals(Role.Admin))
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
	}
	
	
	public UserResponse updateUser(UserRequest request, Long user_id) {
	        User user = userRepository.findByUid(user_id);
	        User newUser = new User();
	        if (user != null) {
	            newUser = User.builder()
	            		.uid(user_id)
	                    .name(request.getName())
	                    .email(request.getEmail())
	                    .password(passwordEncoder.encode(request.getPassword()))
	                    .role(request.getRole())
                        .phone(request.getPhone())
	                    .build();
	            userRepository.save(newUser);
	        }
	        return mapUserToUserResponse(newUser);
	    }
	public UserRequest getUser(Long user_id)
	{
		 User user = userRepository.findByUid(user_id);
	        return mapUserToUserRequest(user);
	}
	
	public boolean deleteUser(Long id)
	{
		User user = userRepository.findByUid(id);

        if (user != null) {
            jwtRepository.deleteByUserUid(id);
            userRepository.deleteByUid(id);
            return true;
        } else {
            return false;
        }
	}
	
	private UserRequest mapUserToUserRequest(User user) {
        return UserRequest.builder()
                .name(user.getName())
                .email(user.getEmail())
                .password(user.getPassword())
                .phone(user.getPhone())
                .role(user.getRole())
                .build();
    }
	
	private UserResponse mapUserToUserResponse(User user) {
        return UserResponse.builder()
        		.uid(user.getUid())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .phone(user.getPhone())
                .build();
    }


}
