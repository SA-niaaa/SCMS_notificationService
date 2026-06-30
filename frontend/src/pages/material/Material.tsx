// import MaterialTable from "../../components/MaterialTable";
// import AddMaterialModal from "../../components/AddMaterialModal";
// import { materials as initialMaterials } from "../../services/materialService";
// import { useEffect, useState } from "react";

// interface MaterialType {
//   id: number;
//   name: string;
//   category: string;
//   quantity: number;
// }

// function Material() {

//   const [materials, setMaterials] =
//     useState<MaterialType[]>(() => {

//       const storedMaterials =
//         localStorage.getItem(
//           "materials"
//         );

//       return storedMaterials
//         ? JSON.parse(storedMaterials)
//         : initialMaterials;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [editingMaterial, setEditingMaterial] =
//     useState<any>(null);

//   useEffect(() => {
//     localStorage.setItem(
//       "materials",
//       JSON.stringify(materials)
//     );
//   }, [materials]);

//   const handleAddMaterial = (
//     material: any
//   ) => {
//     setMaterials([
//       ...materials,
//       material,
//     ]);
//   };

//   const handleDeleteMaterial = (
//     id: number
//   ) => {
//     setMaterials(
//       materials.filter(
//         (material) =>
//           material.id !== id
//       )
//     );
//   };

//   const handleUpdateMaterial = (
//     updatedMaterial: any
//   ) => {
//     setMaterials(
//       materials.map((material) =>
//         material.id ===
//         updatedMaterial.id
//           ? updatedMaterial
//           : material
//       )
//     );

//     setEditingMaterial(null);
//   };

//   const filteredMaterials =
//     materials.filter((material) =>
//       material.name
//         .toLowerCase()
//         .includes(
//           search.toLowerCase()
//         )
//     );

//   return (
//     <div>

//       <div className="flex justify-between items-center mb-6">

//         <h1 className="text-3xl font-bold">
//           Material Management
//         </h1>

//         <button
//           onClick={() =>
//             setShowModal(true)
//           }
//           className="bg-green-600 px-4 py-2 rounded"
//         >
//           Add Material
//         </button>

//       </div>

//       <input
//         type="text"
//         placeholder="Search material..."
//         value={search}
//         onChange={(e) =>
//           setSearch(
//             e.target.value
//           )
//         }
//         className="w-full mb-5 p-3 rounded bg-black border border-gray-700"
//       />

//       <MaterialTable
//         materials={
//           filteredMaterials
//         }
//         onDelete={
//           handleDeleteMaterial
//         }
//         onEdit={(material) => {
//           setEditingMaterial(
//             material
//           );
//           setShowModal(true);
//         }}
//       />

//       {showModal && (
//         <AddMaterialModal
//           material={
//             editingMaterial
//           }
//           onClose={() => {
//             setShowModal(false);
//             setEditingMaterial(
//               null
//             );
//           }}
//           onAdd={
//             editingMaterial
//               ? handleUpdateMaterial
//               : handleAddMaterial
//           }
//         />
//       )}

//     </div>
//   );
// }

// export default Material;
// import MaterialTable from "../../components/MaterialTable";
// import AddMaterialModal from "../../components/AddMaterialModal";
// import { materials as initialMaterials } from "../../services/materialService";
// import { addActivity } from "../../services/activityService";
// import { useEffect, useState } from "react";

// interface MaterialType {
//   id: number;
//   name: string;
//   category: string;
//   quantity: number;
// }

// function Material() {
//   const [materials, setMaterials] =
//     useState<MaterialType[]>(() => {
//       const storedMaterials =
//         localStorage.getItem(
//           "materials"
//         );

//       return storedMaterials
//         ? JSON.parse(storedMaterials)
//         : initialMaterials;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [
//     editingMaterial,
//     setEditingMaterial,
//   ] = useState<MaterialType | null>(
//     null
//   );

//   useEffect(() => {
//     localStorage.setItem(
//       "materials",
//       JSON.stringify(materials)
//     );
//   }, [materials]);

//   const handleAddMaterial = (
//     material: MaterialType
//   ) => {
//     setMaterials([
//       ...materials,
//       material,
//     ]);

//     addActivity(
//       `Material Added: ${material.name}`
//     );
//   };

//   const handleDeleteMaterial = (
//     id: number
//   ) => {
//     setMaterials(
//       materials.filter(
//         (material) =>
//           material.id !== id
//       )
//     );

//     addActivity(
//       "Material Deleted"
//     );
//   };

//   const handleUpdateMaterial = (
//     updatedMaterial: MaterialType
//   ) => {
//     setMaterials(
//       materials.map((material) =>
//         material.id ===
//         updatedMaterial.id
//           ? updatedMaterial
//           : material
//       )
//     );

//     addActivity(
//       `Material Updated: ${updatedMaterial.name}`
//     );

//     setEditingMaterial(null);
//   };

//   const filteredMaterials =
//     materials.filter((material) =>
//       material.name
//         .toLowerCase()
//         .includes(
//           search.toLowerCase()
//         )
//     );

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">
//           Material Management
//         </h1>

//         <button
//           onClick={() =>
//             setShowModal(true)
//           }
//           className="bg-green-600 px-4 py-2 rounded"
//         >
//           Add Material
//         </button>
//       </div>

//       <input
//         type="text"
//         placeholder="Search material..."
//         value={search}
//         onChange={(e) =>
//           setSearch(
//             e.target.value
//           )
//         }
//         className="w-full mb-5 p-3 rounded bg-black border border-gray-700"
//       />

//       <MaterialTable
//         materials={
//           filteredMaterials
//         }
//         onDelete={
//           handleDeleteMaterial
//         }
//         onEdit={(material) => {
//           setEditingMaterial(
//             material
//           );
//           setShowModal(true);
//         }}
//       />

//       {showModal && (
//         <AddMaterialModal
//           material={
//             editingMaterial
//           }
//           onClose={() => {
//             setShowModal(false);
//             setEditingMaterial(
//               null
//             );
//           }}
//           onAdd={
//             editingMaterial
//               ? handleUpdateMaterial
//               : handleAddMaterial
//           }
//         />
//       )}
//     </div>
//   );
// }

// export default Material;
// import MainLayout from "../../layouts/MainLayout";
// import MaterialTable from "../../components/MaterialTable";
// import AddMaterialModal from "../../components/AddMaterialModal";
// import { materials as initialMaterials } from "../../services/materialService";
// import { addActivity } from "../../services/activityService";
// import { useEffect, useState } from "react";

// interface MaterialType {
//   id: number;
//   name: string;
//   category: string;
//   quantity: number;
//   unit: string;
//   supplier: string;
//   description: string;
// }

// function Material() {
//   const [materials, setMaterials] =
//     useState<MaterialType[]>(() => {
//       const storedMaterials =
//         localStorage.getItem(
//           "materials"
//         );

//       return storedMaterials
//         ? JSON.parse(storedMaterials)
//         : initialMaterials;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [
//     editingMaterial,
//     setEditingMaterial,
//   ] = useState<MaterialType | null>(
//     null
//   );

//   useEffect(() => {
//     localStorage.setItem(
//       "materials",
//       JSON.stringify(materials)
//     );
//   }, [materials]);

//   const handleAddMaterial = (
//     material: MaterialType
//   ) => {
//     setMaterials([
//       ...materials,
//       material,
//     ]);

//     addActivity(
//       `Material Added: ${material.name}`
//     );
//   };

//   const handleDeleteMaterial = (
//     id: number
//   ) => {
//     setMaterials(
//       materials.filter(
//         (material) =>
//           material.id !== id
//       )
//     );

//     addActivity(
//       "Material Deleted"
//     );
//   };

//   const handleUpdateMaterial = (
//     updatedMaterial: MaterialType
//   ) => {
//     setMaterials(
//       materials.map((material) =>
//         material.id ===
//         updatedMaterial.id
//           ? updatedMaterial
//           : material
//       )
//     );

//     addActivity(
//       `Material Updated: ${updatedMaterial.name}`
//     );

//     setEditingMaterial(null);
//   };

//   const filteredMaterials =
//     materials.filter(
//       (material) =>
//         material.name
//           .toLowerCase()
//           .includes(
//             search.toLowerCase()
//           )
//     );

//   return (
//     <MainLayout>
//       <div>

//         <div className="flex justify-between items-center mb-6">

//           <h1 className="text-3xl font-bold">
//             Material Management
//           </h1>

//           <button
//             onClick={() =>
//               setShowModal(true)
//             }
//             className="
//             bg-green-600
//             px-4
//             py-2
//             rounded
//             "
//           >
//             Add Material
//           </button>

//         </div>

//         <div className="flex justify-between items-center mb-5">

//           <div className="flex gap-3">

//             <button
//               className="
//               px-4
//               py-2
//               bg-gray-700
//               rounded
//               "
//             >
//               Excel
//             </button>

//             <button
//               className="
//               px-4
//               py-2
//               bg-gray-700
//               rounded
//               "
//             >
//               PDF
//             </button>

//           </div>

//           <div className="flex items-center gap-2">

//             <label>
//               Search:
//             </label>

//             <input
//               type="text"
//               value={search}
//               onChange={(e) =>
//                 setSearch(
//                   e.target.value
//                 )
//               }
//               className="
//               p-2
//               w-64
//               rounded
//               bg-black
//               border
//               border-gray-700
//               "
//             />

//           </div>

//         </div>

//         <MaterialTable
//           materials={
//             filteredMaterials
//           }
//           onDelete={
//             handleDeleteMaterial
//           }
//           onEdit={(material) => {
//             setEditingMaterial(
//               material
//             );

//             setShowModal(true);
//           }}
//         />

//         {showModal && (
//           <AddMaterialModal
//             material={
//               editingMaterial
//             }
//             onClose={() => {
//               setShowModal(false);

//               setEditingMaterial(
//                 null
//               );
//             }}
//             onAdd={
//               editingMaterial
//                 ? handleUpdateMaterial
//                 : handleAddMaterial
//             }
//           />
//         )}

//       </div>
//     </MainLayout>
//   );
// }

// export default Material;
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

// interface MaterialType {
//   id: number;
//   name: string;
//   category: string;
//   quantity: number;
//   unit: string;
//   supplier: string;
//   description: string;
// }
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

  const handleAddMaterial =
    async (
      material: MaterialType
    ) => {

      await addMaterial(
        material
      );

      await fetchMaterials();

      // addActivity(
      //   `Material Added: ${material.name}`
      // );
      addActivity(
  `Material Added: ${material.materialName}`
);

    };

  // const handleDeleteMaterial =
  //   async (
  //     id: number
  //   ) => {

  //     await deleteMaterial(
  //       id
  //     );

  //     await fetchMaterials();

  //     addActivity(
  //       "Material Deleted"
  //     );

  //   };
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

//   const handleUpdateMaterial =
//     async (
//       updatedMaterial: MaterialType
//     ) => {

//       // await updateMaterial(
//       //   updatedMaterial.id,
//       //   updatedMaterial
//       // );
//       await updateMaterial(
//     updatedMaterial.materialId,
//     updatedMaterial
// );

//       await fetchMaterials();

//       // addActivity(
//       //   `Material Updated: ${updatedMaterial.name}`
//       // );
// addActivity(
//   `Material Updated: ${updatedMaterial.materialName}`
// );
//       setEditingMaterial(
//         null
//       );

//     };
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

  // const filteredMaterials =
  //   materials.filter(
  //     (material) =>
  //       material.name
  //         .toLowerCase()
  //         .includes(
  //           search.toLowerCase()
  //         )
  //   );
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