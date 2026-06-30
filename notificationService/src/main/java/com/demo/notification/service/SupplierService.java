package com.demo.notification.service;

import com.demo.notification.entity.Supplier;
import com.demo.notification.repository.SupplierRepository;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
public class SupplierService {

    private final SupplierRepository supplierRepository;

    public SupplierService(
            SupplierRepository supplierRepository
    ) {
        this.supplierRepository = supplierRepository;
    }

    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    public Supplier getSupplierById(Long id) {
        return supplierRepository.findById(id).orElse(null);
    }

    public Supplier saveSupplier(
            Supplier supplier
    ) {

        if (supplier.getStatus() == null) {
            supplier.setStatus("ACTIVE");
        }

        Timestamp now =
                new Timestamp(System.currentTimeMillis());

        supplier.setCreatedAt(now);
        supplier.setUpdatedAt(now);

        return supplierRepository.save(supplier);
    }

    public Supplier updateSupplier(
            Long id,
            Supplier updatedSupplier
    ) {

        Supplier supplier =
                supplierRepository.findById(id).orElse(null);

        if (supplier == null) {
            return null;
        }

        supplier.setSupplierCode(
                updatedSupplier.getSupplierCode()
        );

        supplier.setSupplierName(
                updatedSupplier.getSupplierName()
        );

        supplier.setContactPerson(
                updatedSupplier.getContactPerson()
        );

        supplier.setPhone(
                updatedSupplier.getPhone()
        );

        supplier.setEmail(
                updatedSupplier.getEmail()
        );

        supplier.setAddress(
                updatedSupplier.getAddress()
        );

        supplier.setGstNumber(
                updatedSupplier.getGstNumber()
        );

        supplier.setStatus(
                updatedSupplier.getStatus()
        );

        supplier.setUpdatedAt(
                new Timestamp(System.currentTimeMillis())
        );

        return supplierRepository.save(supplier);
    }

    public void deleteSupplier(
            Long id
    ) {
        supplierRepository.deleteById(id);
    }
}