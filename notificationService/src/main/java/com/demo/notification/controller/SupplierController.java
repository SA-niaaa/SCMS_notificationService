package com.demo.notification.controller;

import com.demo.notification.entity.Supplier;
import com.demo.notification.service.SupplierService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/suppliers")
@CrossOrigin("*")
public class SupplierController {

    private final SupplierService supplierService;

    public SupplierController(
            SupplierService supplierService
    ) {
        this.supplierService = supplierService;
    }

    @GetMapping
    public List<Supplier> getAllSuppliers() {
        return supplierService.getAllSuppliers();
    }

    @GetMapping("/{id}")
    public Supplier getSupplierById(
            @PathVariable Long id
    ) {
        return supplierService.getSupplierById(id);
    }

    @PostMapping
    public Supplier createSupplier(
            @RequestBody Supplier supplier
    ) {
        return supplierService.saveSupplier(supplier);
    }

    @PutMapping("/{id}")
    public Supplier updateSupplier(
            @PathVariable Long id,
            @RequestBody Supplier supplier
    ) {
        return supplierService.updateSupplier(
                id,
                supplier
        );
    }

    @DeleteMapping("/{id}")
    public String deleteSupplier(
            @PathVariable Long id
    ) {

        supplierService.deleteSupplier(id);

        return "Supplier Deleted Successfully";
    }
}