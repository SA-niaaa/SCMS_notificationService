package com.demo.notification.repository;

import com.demo.notification.entity.Manufacturer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManufacturerRepository
        extends JpaRepository<Manufacturer, Long> {
}