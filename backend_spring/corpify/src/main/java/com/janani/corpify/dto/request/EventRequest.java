package com.janani.corpify.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class EventRequest {
    private String eventType;
    private String description;
    private int count;
    private String mode;
    private int price;

}
