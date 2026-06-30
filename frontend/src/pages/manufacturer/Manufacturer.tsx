// import ManufacturerTable from "../../components/ManufacturerTable";
// import AddManufacturerModal from "../../components/AddManufacturerModal";
// import { manufacturers as initialManufacturers } from "../../services/manufacturerService";
// import { useEffect, useState } from "react";

// interface ManufacturerType {
//   id: number;
//   name: string;
//   location: string;
//   contact: string;
// }

// function Manufacturer() {

//   const [manufacturers, setManufacturers] =
//     useState<ManufacturerType[]>(() => {

//       const storedManufacturers =
//         localStorage.getItem(
//           "manufacturers"
//         );

//       return storedManufacturers
//         ? JSON.parse(storedManufacturers)
//         : initialManufacturers;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [editingManufacturer, setEditingManufacturer] =
//     useState<any>(null);

//   useEffect(() => {
//     localStorage.setItem(
//       "manufacturers",
//       JSON.stringify(manufacturers)
//     );
//   }, [manufacturers]);

//   const handleAddManufacturer = (
//     manufacturer: any
//   ) => {
//     setManufacturers([
//       ...manufacturers,
//       manufacturer,
//     ]);
//   };

//   const handleDeleteManufacturer = (
//     id: number
//   ) => {
//     setManufacturers(
//       manufacturers.filter(
//         (manufacturer) =>
//           manufacturer.id !== id
//       )
//     );
//   };

//   const handleUpdateManufacturer = (
//     updatedManufacturer: any
//   ) => {
//     setManufacturers(
//       manufacturers.map(
//         (manufacturer) =>
//           manufacturer.id ===
//           updatedManufacturer.id
//             ? updatedManufacturer
//             : manufacturer
//       )
//     );

//     setEditingManufacturer(null);
//   };

//   const filteredManufacturers =
//     manufacturers.filter(
//       (manufacturer) =>
//         manufacturer.name
//           .toLowerCase()
//           .includes(
//             search.toLowerCase()
//           )
//     );

//   return (
//     <div>

//       <div className="flex justify-between items-center mb-6">

//         <h1 className="text-3xl font-bold">
//           Manufacturer Management
//         </h1>

//         <button
//           onClick={() =>
//             setShowModal(true)
//           }
//           className="bg-green-600 px-4 py-2 rounded"
//         >
//           Add Manufacturer
//         </button>

//       </div>

//       <input
//         type="text"
//         placeholder="Search manufacturer..."
//         value={search}
//         onChange={(e) =>
//           setSearch(
//             e.target.value
//           )
//         }
//         className="w-full mb-5 p-3 rounded bg-black border border-gray-700"
//       />

//       <ManufacturerTable
//         manufacturers={
//           filteredManufacturers
//         }
//         onDelete={
//           handleDeleteManufacturer
//         }
//         onEdit={(manufacturer) => {
//           setEditingManufacturer(
//             manufacturer
//           );
//           setShowModal(true);
//         }}
//       />

//       {showModal && (
//         <AddManufacturerModal
//           manufacturer={
//             editingManufacturer
//           }
//           onClose={() => {
//             setShowModal(false);
//             setEditingManufacturer(
//               null
//             );
//           }}
//           onAdd={
//             editingManufacturer
//               ? handleUpdateManufacturer
//               : handleAddManufacturer
//           }
//         />
//       )}

//     </div>
//   );
// }

// export default Manufacturer;
// import ManufacturerTable from "../../components/ManufacturerTable";
// import AddManufacturerModal from "../../components/AddManufacturerModal";
// import { manufacturers as initialManufacturers } from "../../services/manufacturerService";
// import { addActivity } from "../../services/activityService";
// import { useEffect, useState } from "react";

// interface ManufacturerType {
//   id: number;
//   name: string;
//   location: string;
//   contact: string;
// }

// function Manufacturer() {
//   const [manufacturers, setManufacturers] =
//     useState<ManufacturerType[]>(() => {
//       const storedManufacturers =
//         localStorage.getItem(
//           "manufacturers"
//         );

//       return storedManufacturers
//         ? JSON.parse(storedManufacturers)
//         : initialManufacturers;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [
//     editingManufacturer,
//     setEditingManufacturer,
//   ] = useState<ManufacturerType | null>(
//     null
//   );

//   useEffect(() => {
//     localStorage.setItem(
//       "manufacturers",
//       JSON.stringify(manufacturers)
//     );
//   }, [manufacturers]);

//   const handleAddManufacturer = (
//     manufacturer: ManufacturerType
//   ) => {
//     setManufacturers([
//       ...manufacturers,
//       manufacturer,
//     ]);

//     addActivity(
//       `Manufacturer Added: ${manufacturer.name}`
//     );
//   };

//   const handleDeleteManufacturer = (
//     id: number
//   ) => {
//     setManufacturers(
//       manufacturers.filter(
//         (manufacturer) =>
//           manufacturer.id !== id
//       )
//     );

//     addActivity(
//       "Manufacturer Deleted"
//     );
//   };

//   const handleUpdateManufacturer = (
//     updatedManufacturer: ManufacturerType
//   ) => {
//     setManufacturers(
//       manufacturers.map(
//         (manufacturer) =>
//           manufacturer.id ===
//           updatedManufacturer.id
//             ? updatedManufacturer
//             : manufacturer
//       )
//     );

//     addActivity(
//       `Manufacturer Updated: ${updatedManufacturer.name}`
//     );

//     setEditingManufacturer(null);
//   };

//   const filteredManufacturers =
//     manufacturers.filter(
//       (manufacturer) =>
//         manufacturer.name
//           .toLowerCase()
//           .includes(
//             search.toLowerCase()
//           )
//     );

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">
//           Manufacturer Management
//         </h1>

//         <button
//           onClick={() =>
//             setShowModal(true)
//           }
//           className="bg-green-600 px-4 py-2 rounded"
//         >
//           Add Manufacturer
//         </button>
//       </div>

//       <input
//         type="text"
//         placeholder="Search manufacturer..."
//         value={search}
//         onChange={(e) =>
//           setSearch(
//             e.target.value
//           )
//         }
//         className="w-full mb-5 p-3 rounded bg-black border border-gray-700"
//       />

//       <ManufacturerTable
//         manufacturers={
//           filteredManufacturers
//         }
//         onDelete={
//           handleDeleteManufacturer
//         }
//         onEdit={(manufacturer) => {
//           setEditingManufacturer(
//             manufacturer
//           );
//           setShowModal(true);
//         }}
//       />

//       {showModal && (
//         <AddManufacturerModal
//           manufacturer={
//             editingManufacturer
//           }
//           onClose={() => {
//             setShowModal(false);
//             setEditingManufacturer(
//               null
//             );
//           }}
//           onAdd={
//             editingManufacturer
//               ? handleUpdateManufacturer
//               : handleAddManufacturer
//           }
//         />
//       )}
//     </div>
//   );
// }

// export default Manufacturer;
// import MainLayout from "../../layouts/MainLayout";
// import ManufacturerTable from "../../components/ManufacturerTable";
// import AddManufacturerModal from "../../components/AddManufacturerModal";
// import { manufacturers as initialManufacturers } from "../../services/manufacturerService";
// import { addActivity } from "../../services/activityService";
// import { useEffect, useState } from "react";

// interface ManufacturerType {
//   id: number;
//   name: string;
//   location: string;
//   contact: string;
//   email: string;
//   gstNo: string;
//   productionType: string;
//   description: string;
// }

// function Manufacturer() {
//   const [manufacturers, setManufacturers] =
//     useState<ManufacturerType[]>(() => {

//       const storedManufacturers =
//         localStorage.getItem(
//           "manufacturers"
//         );

//       return storedManufacturers
//         ? JSON.parse(
//             storedManufacturers
//           )
//         : initialManufacturers;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [
//     editingManufacturer,
//     setEditingManufacturer,
//   ] =
//     useState<ManufacturerType | null>(
//       null
//     );

//   useEffect(() => {
//     localStorage.setItem(
//       "manufacturers",
//       JSON.stringify(
//         manufacturers
//       )
//     );
//   }, [manufacturers]);

//   const handleAddManufacturer = (
//     manufacturer: ManufacturerType
//   ) => {

//     setManufacturers([
//       ...manufacturers,
//       manufacturer,
//     ]);

//     addActivity(
//       `Manufacturer Added: ${manufacturer.name}`
//     );
//   };

//   const handleDeleteManufacturer = (
//     id: number
//   ) => {

//     setManufacturers(
//       manufacturers.filter(
//         (manufacturer) =>
//           manufacturer.id !== id
//       )
//     );

//     addActivity(
//       "Manufacturer Deleted"
//     );
//   };

//   const handleUpdateManufacturer = (
//     updatedManufacturer: ManufacturerType
//   ) => {

//     setManufacturers(
//       manufacturers.map(
//         (manufacturer) =>
//           manufacturer.id ===
//           updatedManufacturer.id
//             ? updatedManufacturer
//             : manufacturer
//       )
//     );

//     addActivity(
//       `Manufacturer Updated: ${updatedManufacturer.name}`
//     );

//     setEditingManufacturer(
//       null
//     );
//   };

//   const filteredManufacturers =
//     manufacturers.filter(
//       (manufacturer) =>
//         manufacturer.name
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
//             Manufacturer Management
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
//             Add Manufacturer
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

//         <ManufacturerTable
//           manufacturers={
//             filteredManufacturers
//           }
//           onDelete={
//             handleDeleteManufacturer
//           }
//           onEdit={(
//             manufacturer
//           ) => {

//             setEditingManufacturer(
//               manufacturer
//             );

//             setShowModal(true);

//           }}
//         />

//         {showModal && (

//           <AddManufacturerModal
//             manufacturer={
//               editingManufacturer
//             }
//             onClose={() => {

//               setShowModal(
//                 false
//               );

//               setEditingManufacturer(
//                 null
//               );

//             }}
//             onAdd={
//               editingManufacturer
//                 ? handleUpdateManufacturer
//                 : handleAddManufacturer
//             }
//           />

//         )}

//       </div>
//     </MainLayout>

//   );
// }

// export default Manufacturer;
import MainLayout from "../../layouts/MainLayout";
import ManufacturerTable from "../../components/ManufacturerTable";
import AddManufacturerModal from "../../components/AddManufacturerModal";

import {
  getManufacturers,
  addManufacturer,
  updateManufacturer,
  deleteManufacturer,
} from "../../services/api";

import { addActivity } from "../../services/activityService";
import { useEffect, useState } from "react";

interface ManufacturerType {
  manufacturerId: number;
  manufacturerCode: string;
  manufacturerName: string;
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  website: string;
}
function Manufacturer() {
  const [manufacturers, setManufacturers] =
    useState<ManufacturerType[]>([]);

  const [search, setSearch] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [
    editingManufacturer,
    setEditingManufacturer,
  ] =
    useState<ManufacturerType | null>(
      null
    );

  useEffect(() => {
    loadManufacturers();
  }, []);

  const loadManufacturers =
    async () => {

      // const data =
      //   await getManufacturers();

      // setManufacturers(data);
      const data =
  await getManufacturers();

console.log("Manufacturers API:", data);

setManufacturers(
  Array.isArray(data)
    ? data
    : []
);

    };

  const handleAddManufacturer =
    async (
      manufacturer: ManufacturerType
    ) => {

      await addManufacturer(
        manufacturer
      );

      await loadManufacturers();

      addActivity(
        `Manufacturer Added: ${manufacturer.manufacturerName}`
      );

    };

  const handleDeleteManufacturer =
    async (
      id: number
    ) => {

      await deleteManufacturer(
        id
      );

      await loadManufacturers();

      addActivity(
        "Manufacturer Deleted"
      );

    };

  const handleUpdateManufacturer =
    async (
      updatedManufacturer: ManufacturerType
    ) => {

      await updateManufacturer(
        updatedManufacturer.manufacturerId,
        updatedManufacturer
      );

      await loadManufacturers();

      addActivity(
        `Manufacturer Updated: ${updatedManufacturer.manufacturerName}`
      );

      setEditingManufacturer(
        null
      );

    };

  // const filteredManufacturers =
  //   manufacturers.filter(
  //     (manufacturer) =>
  //       manufacturer.name
  //         .toLowerCase()
  //         .includes(
  //           search.toLowerCase()
  //         )
  //   );
  const filteredManufacturers =
  Array.isArray(manufacturers)
    ? manufacturers.filter(
        (manufacturer) =>
          manufacturer.manufacturerName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      )
    : [];

  return (
    <MainLayout>
      <div>

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            Manufacturer Management
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
            Add Manufacturer
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

        <ManufacturerTable
          manufacturers={
            filteredManufacturers
          }
          onDelete={
            handleDeleteManufacturer
          }
          onEdit={(
            manufacturer
          ) => {

            setEditingManufacturer(
              manufacturer
            );

            setShowModal(true);

          }}
        />

        {showModal && (

          <AddManufacturerModal
            manufacturer={
              editingManufacturer
            }
            onClose={() => {

              setShowModal(
                false
              );

              setEditingManufacturer(
                null
              );

            }}
            onAdd={
              editingManufacturer
                ? handleUpdateManufacturer
                : handleAddManufacturer
            }
          />

        )}

      </div>
    </MainLayout>
  );
}

export default Manufacturer;