package com.janani.corpify.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.janani.corpify.model.Token;

public interface JwtRepo extends JpaRepository<Token, String> {
    List<Token>findAllByUser_UidAndExpiredFalseAndRevokedFalse(Long uid);
    Optional<Token> findByToken(String token);
    void deleteByUserUid(Long uid);

}
