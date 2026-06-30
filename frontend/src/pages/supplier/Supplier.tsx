// import MainLayout from "../../layouts/MainLayout";

// function Supplier() {
//   return (
//     <MainLayout>
//       <h1>Supplier Page</h1>
//     </MainLayout>
//   );
// }

// export default Supplier;
// function Supplier() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">
//         Supplier Management
//       </h1>
//     </div>
//   );
// }

// export default Supplier;
// import SupplierTable from "../../components/SupplierTable";
// import { suppliers } from "../../services/supplierService";

// function Supplier() {
//   return (
//     <div>

//       <h1 className="text-3xl font-bold mb-6">
//         Supplier Management
//       </h1>

//       <SupplierTable
//         suppliers={suppliers}
//       />

//     </div>
//   );
// }

// export default Supplier;
// import { useState } from "react";
// import SupplierTable from "../../components/SupplierTable";
// import AddSupplierModal from "../../components/AddSupplierModal";
// import { suppliers as initialSuppliers } from "../../services/supplierService";
// import { addActivity } from "../../services/activityService";
// import { useEffect, useState } from "react";

// interface SupplierType {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   city: string;
// }

// function Supplier() {
//   const [suppliers, setSuppliers] =
//     useState<SupplierType[]>(() => {
//       const storedSuppliers =
//         localStorage.getItem(
//           "suppliers"
//         );

//       return storedSuppliers
//         ? JSON.parse(storedSuppliers)
//         : initialSuppliers;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [
//     editingSupplier,
//     setEditingSupplier,
//   ] = useState<SupplierType | null>(
//     null
//   );

//   useEffect(() => {
//     localStorage.setItem(
//       "suppliers",
//       JSON.stringify(suppliers)
//     );
//   }, [suppliers]);

//   const handleAddSupplier = (
//     supplier: SupplierType
//   ) => {
//     setSuppliers([
//       ...suppliers,
//       supplier,
//     ]);

//     addActivity(
//       `Supplier Added: ${supplier.name}`
//     );
//   };

//   const handleDeleteSupplier = (
//     id: number
//   ) => {
//     setSuppliers(
//       suppliers.filter(
//         (supplier) =>
//           supplier.id !== id
//       )
//     );

//     addActivity(
//       "Supplier Deleted"
//     );
//   };

//   const handleUpdateSupplier = (
//     updatedSupplier: SupplierType
//   ) => {
//     setSuppliers(
//       suppliers.map((supplier) =>
//         supplier.id ===
//         updatedSupplier.id
//           ? updatedSupplier
//           : supplier
//       )
//     );

//     addActivity(
//       `Supplier Updated: ${updatedSupplier.name}`
//     );

//     setEditingSupplier(null);
//   };

//   const filteredSuppliers =
//     suppliers.filter((supplier) =>
//       supplier.name
//         .toLowerCase()
//         .includes(
//           search.toLowerCase()
//         )
//     );

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">
//           Supplier Management
//         </h1>

//         <button
//           onClick={() =>
//             setShowModal(true)
//           }
//           className="bg-green-600 px-4 py-2 rounded"
//         >
//           Add Supplier
//         </button>
//       </div>

//       <input
//         type="text"
//         placeholder="Search supplier..."
//         value={search}
//         onChange={(e) =>
//           setSearch(
//             e.target.value
//           )
//         }
//         className="w-full mb-5 p-3 rounded bg-black border border-gray-700"
//       />

//       <SupplierTable
//         suppliers={filteredSuppliers}
//         onDelete={
//           handleDeleteSupplier
//         }
//         onEdit={(supplier) => {
//           setEditingSupplier(
//             supplier
//           );
//           setShowModal(true);
//         }}
//       />

//       {showModal && (
//         <AddSupplierModal
//           supplier={
//             editingSupplier
//           }
//           onClose={() => {
//             setShowModal(false);
//             setEditingSupplier(
//               null
//             );
//           }}
//           onAdd={
//             editingSupplier
//               ? handleUpdateSupplier
//               : handleAddSupplier
//           }
//         />
//       )}
//     </div>
//   );
// }

// export default Supplier;
// import SupplierTable from "../../components/SupplierTable";
// import AddSupplierModal from "../../components/AddSupplierModal";
// import { suppliers as initialSuppliers } from "../../services/supplierService";
// import { addActivity } from "../../services/activityService";
// import { useEffect, useState } from "react";
// import type { Supplier } from "../../types/Supplier";

// function Supplier() {

//   const [suppliers, setSuppliers] =
//     useState<Supplier[]>(() => {

//       const storedSuppliers =
//         localStorage.getItem(
//           "suppliers"
//         );

//       return storedSuppliers
//         ? JSON.parse(storedSuppliers)
//         : initialSuppliers;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [
//     editingSupplier,
//     setEditingSupplier,
//   ] =
//     useState<Supplier | null>(
//       null
//     );

//   useEffect(() => {

//     localStorage.setItem(
//       "suppliers",
//       JSON.stringify(
//         suppliers
//       )
//     );

//   }, [suppliers]);

//   const handleAddSupplier = (
//     supplier: Supplier
//   ) => {

//     setSuppliers([
//       ...suppliers,
//       supplier,
//     ]);

//     addActivity(
//       `Supplier Added: ${supplier.name}`
//     );
//   };

//   const handleDeleteSupplier = (
//     id: number
//   ) => {

//     setSuppliers(
//       suppliers.filter(
//         (supplier) =>
//           supplier.id !== id
//       )
//     );

//     addActivity(
//       "Supplier Deleted"
//     );
//   };

//   const handleUpdateSupplier = (
//     updatedSupplier: Supplier
//   ) => {

//     setSuppliers(
//       suppliers.map(
//         (supplier) =>
//           supplier.id ===
//           updatedSupplier.id
//             ? updatedSupplier
//             : supplier
//       )
//     );

//     addActivity(
//       `Supplier Updated: ${updatedSupplier.name}`
//     );

//     setEditingSupplier(
//       null
//     );
//   };

//   const filteredSuppliers =
//     suppliers.filter(
//       (supplier) =>
//         supplier.name
//           .toLowerCase()
//           .includes(
//             search.toLowerCase()
//           )
//     );

//   return (
//     <div>

//       <div className="flex justify-between items-center mb-6">

//         <h1 className="text-3xl font-bold">
//           Supplier Management
//         </h1>

//         <button
//           onClick={() =>
//             setShowModal(
//               true
//             )
//           }
//           className="
//           bg-green-600
//           px-4
//           py-2
//           rounded
//           "
//         >
//           Add Supplier
//         </button>

//       </div>

//       <div className="flex justify-between items-center mb-5">

//         <div className="flex gap-3">

//           <button
//             className="
//             px-4
//             py-2
//             bg-gray-700
//             rounded
//             "
//           >
//             Excel
//           </button>

//           <button
//             className="
//             px-4
//             py-2
//             bg-gray-700
//             rounded
//             "
//           >
//             PDF
//           </button>

//         </div>

//         <div className="flex items-center gap-2">

//           <label>
//             Search:
//           </label>

//           <input
//             type="text"
//             value={search}
//             onChange={(e) =>
//               setSearch(
//                 e.target.value
//               )
//             }
//             className="
//             p-2
//             w-64
//             rounded
//             bg-black
//             border
//             border-gray-700
//             "
//           />

//         </div>

//       </div>

//       <SupplierTable
//         suppliers={
//           filteredSuppliers
//         }
//         onDelete={
//           handleDeleteSupplier
//         }
//         onEdit={(
//           supplier
//         ) => {

//           setEditingSupplier(
//             supplier
//           );

//           setShowModal(
//             true
//           );

//         }}
//       />

//       {showModal && (

//         <AddSupplierModal
//           supplier={
//             editingSupplier
//           }
//           onClose={() => {

//             setShowModal(
//               false
//             );

//             setEditingSupplier(
//               null
//             );

//           }}
//           onAdd={
//             editingSupplier
//               ? handleUpdateSupplier
//               : handleAddSupplier
//           }
//         />

//       )}

//     </div>
//   );
// }

// export default Supplier;
// import MainLayout from "../../layouts/MainLayout";
// import SupplierTable from "../../components/SupplierTable";
// import AddSupplierModal from "../../components/AddSupplierModal";
// import { suppliers as initialSuppliers } from "../../services/supplierService";
// import { addActivity } from "../../services/activityService";
// import { useEffect, useState } from "react";
// import type { Supplier } from "../../types/Supplier";

// function SupplierPage() {

//   const [suppliers, setSuppliers] =
//     useState<Supplier[]>(() => {

//       const storedSuppliers =
//         localStorage.getItem("suppliers");

//       return storedSuppliers
//         ? JSON.parse(storedSuppliers)
//         : initialSuppliers;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [editingSupplier, setEditingSupplier] =
//     useState<Supplier | null>(null);

//   useEffect(() => {

//     localStorage.setItem(
//       "suppliers",
//       JSON.stringify(suppliers)
//     );

//   }, [suppliers]);

//   const handleAddSupplier = (
//     supplier: Supplier
//   ) => {

//     setSuppliers([
//       ...suppliers,
//       supplier,
//     ]);

//     addActivity(
//       `Supplier Added: ${supplier.name}`
//     );
//   };

//   const handleDeleteSupplier = (
//     id: number
//   ) => {

//     setSuppliers(
//       suppliers.filter(
//         (supplier) =>
//           supplier.id !== id
//       )
//     );

//     addActivity(
//       "Supplier Deleted"
//     );
//   };

//   const handleUpdateSupplier = (
//     updatedSupplier: Supplier
//   ) => {

//     setSuppliers(
//       suppliers.map(
//         (supplier) =>
//           supplier.id ===
//           updatedSupplier.id
//             ? updatedSupplier
//             : supplier
//       )
//     );

//     addActivity(
//       `Supplier Updated: ${updatedSupplier.name}`
//     );

//     setEditingSupplier(null);
//   };

//   const filteredSuppliers =
//     suppliers.filter(
//       (supplier) =>
//         supplier.name
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
//             Supplier
//           </h1>

//           <button
//             onClick={() =>
//               setShowModal(true)
//             }
//             className="
//             bg-green-600
//             hover:bg-green-700
//             px-4
//             py-2
//             rounded
//             "
//           >
//             Add Supplier
//           </button>

//         </div>

//         <div className="flex justify-between items-center mb-5">

//           <div className="flex gap-3">

//             <button
//               className="
//               bg-gray-700
//               hover:bg-gray-600
//               px-4
//               py-2
//               rounded
//               "
//             >
//               Excel
//             </button>

//             <button
//               className="
//               bg-gray-700
//               hover:bg-gray-600
//               px-4
//               py-2
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
//               w-64
//               p-2
//               rounded
//               bg-black
//               border
//               border-gray-700
//               "
//             />

//           </div>

//         </div>

//         <SupplierTable
//           suppliers={
//             filteredSuppliers
//           }
//           onDelete={
//             handleDeleteSupplier
//           }
//           onEdit={(supplier) => {

//             setEditingSupplier(
//               supplier
//             );

//             setShowModal(true);

//           }}
//         />

//         {showModal && (

//           <AddSupplierModal
//             supplier={
//               editingSupplier
//             }
//             onClose={() => {

//               setShowModal(false);

//               setEditingSupplier(
//                 null
//               );

//             }}
//             onAdd={
//               editingSupplier
//                 ? handleUpdateSupplier
//                 : handleAddSupplier
//             }
//           />

//         )}

//       </div>
//     </MainLayout>
//   );
// }

// export default SupplierPage;
// import MainLayout from "../../layouts/MainLayout";
// import SupplierTable from "../../components/SupplierTable";
// import AddSupplierModal from "../../components/AddSupplierModal";

// import { addActivity } from "../../services/activityService";
// import { getSuppliers } from "../../services/api";

// import { useEffect, useState } from "react";
// import type { Supplier } from "../../types/Supplier";

// function SupplierPage() {
//   const [suppliers, setSuppliers] =
//     useState<Supplier[]>([]);

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [editingSupplier, setEditingSupplier] =
//     useState<Supplier | null>(null);

//   useEffect(() => {
//     const fetchSuppliers =
//       async () => {
//         try {
//           const data =
//             await getSuppliers();

//           setSuppliers(data);
//         } catch (error) {
//           console.error(
//             "Failed to fetch suppliers:",
//             error
//           );
//         }
//       };

//     fetchSuppliers();
//   }, []);

//   const handleAddSupplier = (
//     supplier: Supplier
//   ) => {
//     setSuppliers([
//       ...suppliers,
//       supplier,
//     ]);

//     addActivity(
//       `Supplier Added: ${supplier.name}`
//     );
//   };

//   const handleDeleteSupplier = (
//     id: number
//   ) => {
//     setSuppliers(
//       suppliers.filter(
//         (supplier) =>
//           supplier.id !== id
//       )
//     );

//     addActivity(
//       "Supplier Deleted"
//     );
//   };

//   const handleUpdateSupplier = (
//     updatedSupplier: Supplier
//   ) => {
//     setSuppliers(
//       suppliers.map(
//         (supplier) =>
//           supplier.id ===
//           updatedSupplier.id
//             ? updatedSupplier
//             : supplier
//       )
//     );

//     addActivity(
//       `Supplier Updated: ${updatedSupplier.name}`
//     );

//     setEditingSupplier(null);
//   };

//   const filteredSuppliers =
//     suppliers.filter(
//       (supplier) =>
//         supplier.name
//           ?.toLowerCase()
//           .includes(
//             search.toLowerCase()
//           )
//     );

//   return (
//     <MainLayout>
//       <div>
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">
//             Supplier
//           </h1>

//           <button
//             onClick={() =>
//               setShowModal(true)
//             }
//             className="
//             bg-green-600
//             hover:bg-green-700
//             px-4
//             py-2
//             rounded
//             "
//           >
//             Add Supplier
//           </button>
//         </div>

//         <div className="flex justify-between items-center mb-5">
//           <div className="flex gap-3">
//             <button
//               className="
//               bg-gray-700
//               hover:bg-gray-600
//               px-4
//               py-2
//               rounded
//               "
//             >
//               Excel
//             </button>

//             <button
//               className="
//               bg-gray-700
//               hover:bg-gray-600
//               px-4
//               py-2
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
//               w-64
//               p-2
//               rounded
//               bg-black
//               border
//               border-gray-700
//               "
//             />
//           </div>
//         </div>

//         <SupplierTable
//           suppliers={
//             filteredSuppliers
//           }
//           onDelete={
//             handleDeleteSupplier
//           }
//           onEdit={(supplier) => {
//             setEditingSupplier(
//               supplier
//             );

//             setShowModal(true);
//           }}
//         />

//         {showModal && (
//           <AddSupplierModal
//             supplier={
//               editingSupplier
//             }
//             onClose={() => {
//               setShowModal(false);

//               setEditingSupplier(
//                 null
//               );
//             }}
//             onAdd={
//               editingSupplier
//                 ? handleUpdateSupplier
//                 : handleAddSupplier
//             }
//           />
//         )}
//       </div>
//     </MainLayout>
//   );
// }

// export default SupplierPage;
import MainLayout from "../../layouts/MainLayout";
import SupplierTable from "../../components/SupplierTable";
import AddSupplierModal from "../../components/AddSupplierModal";

import { addActivity } from "../../services/activityService";
import { sendNotification } from "../../services/notificationService";
// import { getSuppliers } from "../../services/api";
// import {
//   getSuppliers,
//   addSupplier,
// } from "../../services/api";
// import {
//   getSuppliers,
//   addSupplier,
//   deleteSupplier,
// } from "../../services/api";
import {
  getSuppliers,
  addSupplier,
  deleteSupplier,
  updateSupplier,
} from "../../services/api";

import { useEffect, useState } from "react";
import type { Supplier } from "../../types/Supplier";

function SupplierPage() {
  const [suppliers, setSuppliers] =
    useState<Supplier[]>([]);

  const [search, setSearch] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [editingSupplier, setEditingSupplier] =
    useState<Supplier | null>(null);

  useEffect(() => {
    const fetchSuppliers =
      async () => {
        try {
          const data =
            await getSuppliers();

          setSuppliers(data);
        } catch (error) {
          console.error(
            "Failed to fetch suppliers:",
            error
          );
        }
      };

    fetchSuppliers();
  }, []);

  // const handleAddSupplier = (
  //   supplier: Supplier
  // ) => {
  //   setSuppliers((prev) => [
  //     ...prev,
  //     supplier,
  //   ]);

  //   addActivity(
  //     `Supplier Added: ${supplier.name}`
  //   );
  // };
  const handleAddSupplier =
  async (
    supplier: Supplier
  ) => {

    try {

      const savedSupplier =
        await addSupplier(
          supplier
        );

      setSuppliers(
        (prev) => [
          ...prev,
          savedSupplier,
        ]
      );

      addActivity(
        `Supplier Added: ${savedSupplier.name}`
      );
      await sendNotification({
  senderId: 1,
  receiverId: 1,
  message: `Supplier Created : ${savedSupplier.name}`,
});

      setShowModal(false);

    } catch (error) {

      console.error(
        error
      );

    }

  };

  // const handleDeleteSupplier = (
  //   id: number
  // ) => {
  //   setSuppliers((prev) =>
  //     prev.filter(
  //       (supplier) =>
  //         Number(supplier.id) !== id
  //     )
  //   );

  //   addActivity(
  //     "Supplier Deleted"
  //   );
  // };
  const handleDeleteSupplier =
async (id: number) => {

  try {

    await deleteSupplier(id);

    setSuppliers((prev) =>
      prev.filter(
        (supplier) =>
          Number(
            supplier.supplierId
          ) !== id
      )
    );

    addActivity(
      "Supplier Deleted"
    );

  } catch (error) {

    console.error(
      "Delete failed:",
      error
    );

  }

};

  // const handleUpdateSupplier = (
  //   updatedSupplier: Supplier
  // ) => {
  //   setSuppliers((prev) =>
  //     prev.map((supplier) =>
  //       Number(supplier.id) ===
  //       Number(updatedSupplier.id)
  //         ? updatedSupplier
  //         : supplier
  //     )
  //   );

  //   addActivity(
  //     `Supplier Updated: ${updatedSupplier.name}`
  //   );

  //   setEditingSupplier(null);
  // };
  const handleUpdateSupplier =
async (
  updatedSupplier: Supplier
) => {

  try {

    await updateSupplier(
      Number(
        updatedSupplier.supplierId
      ),
      updatedSupplier
    );

    const data =
      await getSuppliers();

    setSuppliers(data);

    addActivity(
      `Supplier Updated: ${updatedSupplier.supplierName}`
    );

    setEditingSupplier(null);
    setShowModal(false);

  } catch (error) {

    console.error(error);

  }

};

  const filteredSuppliers =
    suppliers.filter(
      (supplier) =>
        supplier.supplierName
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <MainLayout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Supplier Management
          </h1>

          <button
            onClick={() =>
              setShowModal(true)
            }
            className="
            bg-green-600
            hover:bg-green-700
            px-4
            py-2
            rounded
            "
          >
            Add Supplier
          </button>
        </div>

        <div className="flex justify-between items-center mb-5">
          <div className="flex gap-3">
            <button
              className="
              bg-gray-700
              hover:bg-gray-600
              px-4
              py-2
              rounded
              "
            >
              Excel
            </button>

            <button
              className="
              bg-gray-700
              hover:bg-gray-600
              px-4
              py-2
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
              w-64
              p-2
              rounded
              bg-black
              border
              border-gray-700
              "
            />
          </div>
        </div>

        <SupplierTable
          suppliers={
            filteredSuppliers
          }
          onDelete={
            handleDeleteSupplier
          }
          onEdit={(supplier) => {
            setEditingSupplier(
              supplier
            );

            setShowModal(true);
          }}
        />

        {showModal && (
          <AddSupplierModal
            supplier={
              editingSupplier
            }
            onClose={() => {
              setShowModal(false);
              setEditingSupplier(
                null
              );
            }}
            onAdd={
              editingSupplier
                ? handleUpdateSupplier
                : handleAddSupplier
            }
          />
        )}
      </div>
    </MainLayout>
  );
}

export default SupplierPage;