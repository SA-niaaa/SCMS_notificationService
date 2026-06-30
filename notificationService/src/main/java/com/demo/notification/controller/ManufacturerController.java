package com.demo.notification.controller;

import com.demo.notification.entity.Manufacturer;
import com.demo.notification.service.ManufacturerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/manufacturers")
@CrossOrigin("*")
public class ManufacturerController {

    private final ManufacturerService manufacturerService;

    public ManufacturerController(
            ManufacturerService manufacturerService
    ) {
        this.manufacturerService = manufacturerService;
    }

    @GetMapping
    public List<Manufacturer> getAllManufacturers() {
        return manufacturerService.getAllManufacturers();
    }

    @GetMapping("/{id}")
    public Manufacturer getManufacturerById(
            @PathVariable Long id
    ) {
        return manufacturerService.getManufacturerById(id);
    }

    @PostMapping
    public Manufacturer createManufacturer(
            @RequestBody Manufacturer manufacturer
    ) {
        return manufacturerService.saveManufacturer(manufacturer);
    }

    @PutMapping("/{id}")
    public Manufacturer updateManufacturer(
            @PathVariable Long id,
            @RequestBody Manufacturer manufacturer
    ) {
        return manufacturerService.updateManufacturer(
                id,
                manufacturer
        );
    }

    @DeleteMapping("/{id}")
    public String deleteManufacturer(
            @PathVariable Long id
    ) {

        manufacturerService.deleteManufacturer(id);

        return "Manufacturer Deleted Successfully";
    }
}