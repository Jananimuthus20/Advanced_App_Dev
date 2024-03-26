package com.janani.corpify.dto.request;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class PaymentRequest {
     private String pStatus;
    private Date pDate;
    private String pMode;

}
