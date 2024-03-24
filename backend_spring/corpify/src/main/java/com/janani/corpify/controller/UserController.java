package com.janani.corpify.controller;

import org.springframework.web.bind.annotation.RestController;

import com.janani.corpify.api.Api;
import com.janani.corpify.dto.request.UserRequest;
import com.janani.corpify.dto.response.UserResponse;
import com.janani.corpify.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@Tag(name="User Details")
@RequiredArgsConstructor
@RequestMapping(Api.USER)
public class UserController {
    private final UserService userService;
	
	@GetMapping("/getAll")
	public ResponseEntity<List<UserResponse>> getAllUsers() {
        List<UserResponse> userList = userService.getAllUsers();
        return !userList.isEmpty() ? ResponseEntity.ok().body(userList) : ResponseEntity.noContent().build();
    }
	
	@GetMapping("/getUserById/{id}")
	public ResponseEntity<UserRequest> getUser(@PathVariable Long id) {
        UserRequest userResponse = userService.getUser(id);
        return userResponse != null ? ResponseEntity.ok().body(userResponse) : ResponseEntity.notFound().build();
    }
	
	@PutMapping("/updateUser/{userid}")
    public ResponseEntity<UserResponse> updateUser(@RequestBody UserRequest request, @PathVariable Long userid) {
        UserResponse userResponse = userService.updateUser(request, userid);
        return userResponse != null ? ResponseEntity.ok().body(userResponse) : ResponseEntity.notFound().build();
    }
	
	@DeleteMapping("/deleteUser/{id}")
	public ResponseEntity<String>  deleteUser(@PathVariable Long id)
	{
		boolean isDeleted=userService.deleteUser(id);
		return isDeleted ? ResponseEntity.ok().body("User deleted successfully!")
                : ResponseEntity.notFound().build();
	}
    

}
