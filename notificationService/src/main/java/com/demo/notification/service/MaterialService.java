package com.demo.notification.service;

import com.demo.notification.entity.Material;
import com.demo.notification.repository.MaterialRepository;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
public class MaterialService {

    private final MaterialRepository materialRepository;

    public MaterialService(
            MaterialRepository materialRepository
    ) {
        this.materialRepository = materialRepository;
    }

    public List<Material> getAllMaterials() {
        return materialRepository.findAll();
    }

    public Material getMaterialById(Long id) {
        return materialRepository.findById(id).orElse(null);
    }

    public Material saveMaterial(
            Material material
    ) {

        if (material.getStatus() == null) {
            material.setStatus("ACTIVE");
        }

        Timestamp now =
                new Timestamp(System.currentTimeMillis());

        material.setCreatedAt(now);
        material.setUpdatedAt(now);

        return materialRepository.save(material);
    }

    public Material updateMaterial(
            Long id,
            Material updatedMaterial
    ) {

        Material material =
                materialRepository.findById(id).orElse(null);

        if (material == null) {
            return null;
        }

        material.setMaterialCode(
                updatedMaterial.getMaterialCode()
        );

        material.setMaterialName(
                updatedMaterial.getMaterialName()
        );

        material.setCategory(
                updatedMaterial.getCategory()
        );

        material.setUnit(
                updatedMaterial.getUnit()
        );

        material.setCurrentStock(
                updatedMaterial.getCurrentStock()
        );

        material.setMinimumStock(
                updatedMaterial.getMinimumStock()
        );

        material.setUnitPrice(
                updatedMaterial.getUnitPrice()
        );

        material.setDescription(
                updatedMaterial.getDescription()
        );

        material.setStoreId(
                updatedMaterial.getStoreId()
        );

        material.setStatus(
                updatedMaterial.getStatus()
        );

        material.setUpdatedAt(
                new Timestamp(System.currentTimeMillis())
        );

        return materialRepository.save(material);
    }

    public void deleteMaterial(
            Long id
    ) {
        materialRepository.deleteById(id);
    }
}