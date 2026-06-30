package com.demo.notification.service;

import com.demo.notification.entity.Manufacturer;
import com.demo.notification.repository.ManufacturerRepository;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
public class ManufacturerService {

    private final ManufacturerRepository manufacturerRepository;

    public ManufacturerService(
            ManufacturerRepository manufacturerRepository
    ) {
        this.manufacturerRepository = manufacturerRepository;
    }

    public List<Manufacturer> getAllManufacturers() {
        return manufacturerRepository.findAll();
    }

    public Manufacturer getManufacturerById(
            Long id
    ) {
        return manufacturerRepository.findById(id)
                .orElse(null);
    }

    public Manufacturer saveManufacturer(
            Manufacturer manufacturer
    ) {

        if (manufacturer.getStatus() == null) {
            manufacturer.setStatus("ACTIVE");
        }

        Timestamp now =
                new Timestamp(System.currentTimeMillis());

        manufacturer.setCreatedAt(now);
        manufacturer.setUpdatedAt(now);

        return manufacturerRepository.save(manufacturer);
    }

    public Manufacturer updateManufacturer(
            Long id,
            Manufacturer updatedManufacturer
    ) {

        Manufacturer manufacturer =
                manufacturerRepository.findById(id)
                        .orElse(null);

        if (manufacturer == null) {
            return null;
        }

        manufacturer.setManufacturerCode(
                updatedManufacturer.getManufacturerCode()
        );

        manufacturer.setManufacturerName(
                updatedManufacturer.getManufacturerName()
        );

        manufacturer.setContactPerson(
                updatedManufacturer.getContactPerson()
        );

        manufacturer.setPhone(
                updatedManufacturer.getPhone()
        );

        manufacturer.setEmail(
                updatedManufacturer.getEmail()
        );

        manufacturer.setAddress(
                updatedManufacturer.getAddress()
        );

        manufacturer.setWebsite(
                updatedManufacturer.getWebsite()
        );

        manufacturer.setStatus(
                updatedManufacturer.getStatus()
        );

        manufacturer.setUpdatedAt(
                new Timestamp(System.currentTimeMillis())
        );

        return manufacturerRepository.save(manufacturer);
    }

    public void deleteManufacturer(
            Long id
    ) {
        manufacturerRepository.deleteById(id);
    }
}