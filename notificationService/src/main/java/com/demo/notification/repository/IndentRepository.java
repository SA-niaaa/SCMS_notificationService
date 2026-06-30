package com.demo.notification.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.notification.entity.Indent;

public interface IndentRepository
        extends JpaRepository<Indent, Long> {

    Optional<Indent> findByIndentId(
            String indentId
    );
}