package com.janani.corpify.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class EventResponse {
    private Long eid;
    private String eventType;
    private String description;
    private int count;
    private String mode;
    private int price;

}
