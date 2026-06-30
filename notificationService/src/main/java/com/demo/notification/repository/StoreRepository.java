package com.demo.notification.repository;

import com.demo.notification.entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoreRepository
        extends JpaRepository<Store, Long> {
}