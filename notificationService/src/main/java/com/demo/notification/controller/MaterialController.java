package com.demo.notification.controller;

import com.demo.notification.entity.Material;
import com.demo.notification.service.MaterialService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/materials")
@CrossOrigin("*")
public class MaterialController {

    private final MaterialService materialService;

    public MaterialController(
            MaterialService materialService
    ) {
        this.materialService = materialService;
    }

    @GetMapping
    public List<Material> getAllMaterials() {
        return materialService.getAllMaterials();
    }

    @GetMapping("/{id}")
    public Material getMaterialById(
            @PathVariable Long id
    ) {
        return materialService.getMaterialById(id);
    }

    @PostMapping
    public Material createMaterial(
            @RequestBody Material material
    ) {
        return materialService.saveMaterial(material);
    }

    @PutMapping("/{id}")
    public Material updateMaterial(
            @PathVariable Long id,
            @RequestBody Material material
    ) {
        return materialService.updateMaterial(
                id,
                material
        );
    }

    @DeleteMapping("/{id}")
    public String deleteMaterial(
            @PathVariable Long id
    ) {

        materialService.deleteMaterial(id);

        return "Material Deleted Successfully";
    }
}