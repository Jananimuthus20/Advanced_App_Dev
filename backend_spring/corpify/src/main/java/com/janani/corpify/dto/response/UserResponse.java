package com.janani.corpify.dto.response;

import com.janani.corpify.enums.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private Long uid;
    private String email;
    private String name;
    private String phone;
    private Role role;

}
