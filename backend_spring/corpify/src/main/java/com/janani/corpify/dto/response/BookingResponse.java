package com.janani.corpify.dto.response;


import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
@AllArgsConstructor
public class BookingResponse {
    private Long bid;
    private Date submissionDate;
    private Date eventDate;
    private String status;
    private int headCount;

}
