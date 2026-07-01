import MainLayout from "../../layouts/MainLayout";
import MaterialTable from "../../components/MaterialTable";
import AddMaterialModal from "../../components/AddMaterialModal";

import {
  getMaterials,
  addMaterial,
  updateMaterial,
  deleteMaterial,
} from "../../services/api";

import { addActivity } from "../../services/activityService";
import { useEffect, useState } from "react";


interface MaterialType {
  materialId: number;
  materialCode: string;
  materialName: string;
  category: string;
  currentStock: number;
  minimumStock: number;
  unit: string;
  unitPrice: number;
  description: string;
}

function Material() {

  const [materials, setMaterials] =
    useState<MaterialType[]>([]);

  const [search, setSearch] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [
    editingMaterial,
    setEditingMaterial,
  ] =
    useState<MaterialType | null>(
      null
    );

  useEffect(() => {

    fetchMaterials();

  }, []);

  const fetchMaterials =
    async () => {

      const data =
        await getMaterials();

      setMaterials(data);

    };

//   const handleAddMaterial =
//     async (
//       material: MaterialType
//     ) => {

//       await addMaterial(
//         material
//       );

//       await fetchMaterials();

      
//       addActivity(
//   `Material Added: ${material.materialName}`
// );

//     };


    const handleAddMaterial =
  async (
    material: MaterialType
  ) => {

    try {

      const saved =
        await addMaterial(
          material
        );

      console.log(
        "Material Saved:",
        saved
      );

      await fetchMaterials();

      addActivity(
        `Material Added: ${material.materialName}`
      );

    } catch (error) {

      console.error(
        "Material Add Failed:",
        error
      );

    }

  };


  
  const handleDeleteMaterial =
  async (
    id: number
  ) => {

    try {

      await deleteMaterial(id);

      await fetchMaterials();

      addActivity(
        "Material Deleted"
      );

    } catch (error) {

      console.error(error);

    }

  };


const handleUpdateMaterial =
  async (
    updatedMaterial: any
  ) => {

    await updateMaterial(
      editingMaterial!.materialId,
      updatedMaterial
    );

    await fetchMaterials();

    addActivity(
      `Material Updated: ${updatedMaterial.materialName}`
    );

    setEditingMaterial(null);

  };

  
  const filteredMaterials =
  materials.filter(
    (material) =>
      (material.materialName || "")
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
  );

  return (
    <MainLayout>

      <div>

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            Material Management
          </h1>

          <button
            onClick={() =>
              setShowModal(true)
            }
            className="
            bg-green-600
            px-4
            py-2
            rounded
            "
          >
            Add Material
          </button>

        </div>

        <div className="flex justify-between items-center mb-5">

          <div className="flex gap-3">

            <button
              className="
              px-4
              py-2
              bg-gray-700
              rounded
              "
            >
              Excel
            </button>

            <button
              className="
              px-4
              py-2
              bg-gray-700
              rounded
              "
            >
              PDF
            </button>

          </div>

          <div className="flex items-center gap-2">

            <label>
              Search:
            </label>

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="
              p-2
              w-64
              rounded
              bg-black
              border
              border-gray-700
              "
            />

          </div>

        </div>

        <MaterialTable
          materials={
            filteredMaterials
          }
          onDelete={
            handleDeleteMaterial
          }
          onEdit={(material) => {

            setEditingMaterial(
              material
            );

            setShowModal(true);

          }}
        />

        {showModal && (

          <AddMaterialModal
            material={
              editingMaterial
            }
            onClose={() => {

              setShowModal(
                false
              );

              setEditingMaterial(
                null
              );

            }}
            onAdd={
              editingMaterial
                ? handleUpdateMaterial
                : handleAddMaterial
            }
          />

        )}

      </div>

    </MainLayout>
  );
}

export default Material;