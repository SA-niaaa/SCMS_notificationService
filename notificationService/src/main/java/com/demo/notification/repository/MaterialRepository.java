package com.demo.notification.repository;

import com.demo.notification.entity.Material;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaterialRepository
        extends JpaRepository<Material, Long> {
}