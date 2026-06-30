// import { useEffect, useState } from "react";

// import StoreTable from "../../components/StoreTable";
// import AddStoreModal from "../../components/AddStoreModal";

// import { stores as initialStores } from "../../services/storeService";

// interface StoreType {
//   id: number;
//   district: string;
//   subdivision: string;
//   block: string;
//   storeCode: string;
//   storeName: string;
//   storeType: string;
// }

// function Store() {

//   const [stores, setStores] =
//     useState<StoreType[]>(() => {

//       const storedStores =
//         localStorage.getItem(
//           "stores"
//         );

//       return storedStores
//         ? JSON.parse(storedStores)
//         : initialStores;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [editingStore, setEditingStore] =
//     useState<StoreType | null>(
//       null
//     );

//   useEffect(() => {
//     localStorage.setItem(
//       "stores",
//       JSON.stringify(stores)
//     );
//   }, [stores]);

//   const handleAddStore = (
//     store: StoreType
//   ) => {
//     setStores([
//       ...stores,
//       store,
//     ]);
//   };

//   const handleDeleteStore = (
//     id: number
//   ) => {
//     setStores(
//       stores.filter(
//         (store) =>
//           store.id !== id
//       )
//     );
//   };

//   const handleUpdateStore = (
//     updatedStore: StoreType
//   ) => {
//     setStores(
//       stores.map((store) =>
//         store.id === updatedStore.id
//           ? updatedStore
//           : store
//       )
//     );

//     setEditingStore(null);
//   };

//   const filteredStores =
//     stores.filter((store) =>
//       store.storeName
//         .toLowerCase()
//         .includes(
//           search.toLowerCase()
//         )
//     );

//   return (
//     <div>

//       <div className="flex justify-between items-center mb-6">

//         <h1 className="text-3xl font-bold">
//           Store Management
//         </h1>

//         <button
//           onClick={() =>
//             setShowModal(true)
//           }
//           className="bg-green-600 px-4 py-2 rounded"
//         >
//           Add Store
//         </button>

//       </div>

//       <input
//         type="text"
//         placeholder="Search store..."
//         value={search}
//         onChange={(e) =>
//           setSearch(
//             e.target.value
//           )
//         }
//         className="w-full mb-5 p-3 rounded bg-black border border-gray-700"
//       />

//       <StoreTable
//         stores={filteredStores}
//         onDelete={
//           handleDeleteStore
//         }
//         onEdit={(store) => {
//           setEditingStore(
//             store
//           );
//           setShowModal(true);
//         }}
//       />

//       {showModal && (
//         <AddStoreModal
//           store={editingStore}
//           onClose={() => {
//             setShowModal(false);
//             setEditingStore(
//               null
//             );
//           }}
//           onAdd={
//             editingStore
//               ? handleUpdateStore
//               : handleAddStore
//           }
//         />
//       )}

//     </div>
//   );
// }

// export default Store;
// import { useEffect, useState } from "react";

// import StoreTable from "../../components/StoreTable";
// import AddStoreModal from "../../components/AddStoreModal";

// import { stores as initialStores } from "../../services/storeService";
// import { addActivity } from "../../services/activityService";

// interface StoreType {
//   id: number;
//   district: string;
//   subdivision: string;
//   block: string;
//   storeCode: string;
//   storeName: string;
//   storeType: string;
// }

// function Store() {
//   const [stores, setStores] =
//     useState<StoreType[]>(() => {
//       const storedStores =
//         localStorage.getItem(
//           "stores"
//         );

//       return storedStores
//         ? JSON.parse(storedStores)
//         : initialStores;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [editingStore, setEditingStore] =
//     useState<StoreType | null>(
//       null
//     );

//   useEffect(() => {
//     localStorage.setItem(
//       "stores",
//       JSON.stringify(stores)
//     );
//   }, [stores]);

//   const handleAddStore = (
//     store: StoreType
//   ) => {
//     setStores([
//       ...stores,
//       store,
//     ]);

//     addActivity(
//       `Store Added: ${store.storeName}`
//     );
//   };

//   const handleDeleteStore = (
//     id: number
//   ) => {
//     setStores(
//       stores.filter(
//         (store) =>
//           store.id !== id
//       )
//     );

//     addActivity(
//       "Store Deleted"
//     );
//   };

//   const handleUpdateStore = (
//     updatedStore: StoreType
//   ) => {
//     setStores(
//       stores.map((store) =>
//         store.id === updatedStore.id
//           ? updatedStore
//           : store
//       )
//     );

//     addActivity(
//       `Store Updated: ${updatedStore.storeName}`
//     );

//     setEditingStore(null);
//   };

//   const filteredStores =
//     stores.filter((store) =>
//       store.storeName
//         .toLowerCase()
//         .includes(
//           search.toLowerCase()
//         )
//     );

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-6">

//         <h1 className="text-3xl font-bold">
//           Store Management
//         </h1>

//         <button
//           onClick={() =>
//             setShowModal(true)
//           }
//           className="bg-green-600 px-4 py-2 rounded"
//         >
//           Add Store
//         </button>

//       </div>

//       <input
//         type="text"
//         placeholder="Search store..."
//         value={search}
//         onChange={(e) =>
//           setSearch(
//             e.target.value
//           )
//         }
//         className="w-full mb-5 p-3 rounded bg-black border border-gray-700"
//       />

//       <StoreTable
//         stores={filteredStores}
//         onDelete={
//           handleDeleteStore
//         }
//         onEdit={(store) => {
//           setEditingStore(
//             store
//           );
//           setShowModal(true);
//         }}
//       />

//       {showModal && (
//         <AddStoreModal
//           store={editingStore}
//           onClose={() => {
//             setShowModal(false);
//             setEditingStore(
//               null
//             );
//           }}
//           onAdd={
//             editingStore
//               ? handleUpdateStore
//               : handleAddStore
//           }
//         />
//       )}

//     </div>
//   );
// }

// export default Store;
// import MainLayout from "../../layouts/MainLayout";
// import { useEffect, useState } from "react";

// import StoreTable from "../../components/StoreTable";
// import AddStoreModal from "../../components/AddStoreModal";

// import { stores as initialStores } from "../../services/storeService";
// import { addActivity } from "../../services/activityService";

// interface StoreType {
//   id: number;
//   district: string;
//   subdivision: string;
//   block: string;
//   storeCode: string;
//   storeName: string;
//   storeType: string;
//   storeIncharge: string;
//   capacity: string;
//   status: string;
// }

// function Store() {

//   const [stores, setStores] =
//     useState<StoreType[]>(() => {

//       const storedStores =
//         localStorage.getItem(
//           "stores"
//         );

//       return storedStores
//         ? JSON.parse(
//             storedStores
//           )
//         : initialStores;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [editingStore, setEditingStore] =
//     useState<StoreType | null>(
//       null
//     );

//   useEffect(() => {

//     localStorage.setItem(
//       "stores",
//       JSON.stringify(stores)
//     );

//   }, [stores]);

//   const handleAddStore = (
//     store: StoreType
//   ) => {

//     setStores([
//       ...stores,
//       store,
//     ]);

//     addActivity(
//       `Store Added: ${store.storeName}`
//     );

//   };

//   const handleDeleteStore = (
//     id: number
//   ) => {

//     setStores(
//       stores.filter(
//         (store) =>
//           store.id !== id
//       )
//     );

//     addActivity(
//       "Store Deleted"
//     );

//   };

//   const handleUpdateStore = (
//     updatedStore: StoreType
//   ) => {

//     setStores(
//       stores.map((store) =>
//         store.id ===
//         updatedStore.id
//           ? updatedStore
//           : store
//       )
//     );

//     addActivity(
//       `Store Updated: ${updatedStore.storeName}`
//     );

//     setEditingStore(null);

//   };

//   // const filteredStores =
//   //   stores.filter(
//   //     (store) =>
//   //       store.storeName
//   //         .toLowerCase()
//   //         .includes(
//   //           search.toLowerCase()
//   //         )
//   //   );
//   const filteredStores =
//   stores.filter(
//     (store) =>
//       (store.storeName || "")
//         .toLowerCase()
//         .includes(
//           search.toLowerCase()
//         )
//   );

//   return (
//     <MainLayout>
//       <div>

//         <div className="flex justify-between items-center mb-6">

//           <h1 className="text-3xl font-bold">
//             Store Management
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
//             Add Store
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

//         <StoreTable
//           stores={filteredStores}
//           onDelete={
//             handleDeleteStore
//           }
//           onEdit={(store) => {

//             setEditingStore(
//               store
//             );

//             setShowModal(true);

//           }}
//         />

//         {showModal && (

//           <AddStoreModal
//             store={editingStore}
//             onClose={() => {

//               setShowModal(
//                 false
//               );

//               setEditingStore(
//                 null
//               );

//             }}
//             onAdd={
//               editingStore
//                 ? handleUpdateStore
//                 : handleAddStore
//             }
//           />

//         )}

//       </div>
//     </MainLayout>
//   );
// }

// export default Store;
// import MainLayout from "../../layouts/MainLayout";
// import { useEffect, useState } from "react";

// import StoreTable from "../../components/StoreTable";
// import AddStoreModal from "../../components/AddStoreModal";

// import {
//   getStores,
//   addStore,
//   updateStore,
//   deleteStore,
// } from "../../services/api";

// import { addActivity } from "../../services/activityService";

// interface StoreType {
//   id: number;
//   district: string;
//   subdivision: string;
//   block: string;
//   storeCode: string;
//   storeName: string;
//   storeType: string;
//   storeIncharge: string;
//   capacity: string;
//   status: string;
// }

// function Store() {

//   const [stores, setStores] =
//     useState<StoreType[]>([]);

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [editingStore, setEditingStore] =
//     useState<StoreType | null>(
//       null
//     );

//   useEffect(() => {

//     fetchStores();

//   }, []);

//   const fetchStores = async () => {

//     try {

//       const data =
//         await getStores();

//       setStores(data);

//     } catch (error) {

//       console.error(
//         "Error loading stores:",
//         error
//       );

//     }

//   };

//   const handleAddStore =
//     async (store: StoreType) => {

//       try {

//         await addStore(store);

//         addActivity(
//           `Store Added: ${store.storeName}`
//         );

//         fetchStores();

//       } catch (error) {

//         console.error(
//           "Add Store Error:",
//           error
//         );

//       }

//     };

//   const handleDeleteStore =
//     async (id: number) => {

//       try {

//         await deleteStore(id);

//         addActivity(
//           "Store Deleted"
//         );

//         fetchStores();

//       } catch (error) {

//         console.error(
//           "Delete Store Error:",
//           error
//         );

//       }

//     };

//   const handleUpdateStore =
//     async (
//       updatedStore: StoreType
//     ) => {

//       try {

//         await updateStore(
//           updatedStore.id,
//           updatedStore
//         );

//         addActivity(
//           `Store Updated: ${updatedStore.storeName}`
//         );

//         setEditingStore(null);

//         fetchStores();

//       } catch (error) {

//         console.error(
//           "Update Store Error:",
//           error
//         );

//       }

//     };

//   const filteredStores =
//     stores.filter(
//       (store) =>
//         (store.storeName || "")
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
//             Store Management
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
//             Add Store
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

//         <StoreTable
//           stores={filteredStores}
//           onDelete={
//             handleDeleteStore
//           }
//           onEdit={(store) => {

//             setEditingStore(
//               store
//             );

//             setShowModal(true);

//           }}
//         />

//         {showModal && (

//           <AddStoreModal
//             store={editingStore}
//             onClose={() => {

//               setShowModal(
//                 false
//               );

//               setEditingStore(
//                 null
//               );

//             }}
//             onAdd={
//               editingStore
//                 ? handleUpdateStore
//                 : handleAddStore
//             }
//           />

//         )}

//       </div>

//     </MainLayout>
//   );
// }

// export default Store;
import MainLayout from "../../layouts/MainLayout";
import { useEffect, useState } from "react";

import StoreTable from "../../components/StoreTable";
import AddStoreModal from "../../components/AddStoreModal";

import {
  getStores,
  addStore,
  updateStore,
  deleteStore,
} from "../../services/api";

import { addActivity } from "../../services/activityService";

interface StoreType {
  storeId: number;

  storeCode: string;

  storeName: string;

  location: string;

  storeType: string;

  managerName: string;

  contactNumber: string;

  email: string;

  status: string;
}

function Store() {

  const [stores, setStores] =
    useState<StoreType[]>([]);

  const [search, setSearch] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [editingStore, setEditingStore] =
    useState<StoreType | null>(null);

  useEffect(() => {

    fetchStores();

  }, []);

  const fetchStores = async () => {

    try {

      const data =
        await getStores();

      setStores(data);

    } catch (error) {

      console.error(
        "Error loading stores:",
        error
      );

    }

  };

  const handleAddStore =
    async (store: StoreType) => {

      try {

        await addStore(store);

        addActivity(
          `Store Added: ${store.storeName}`
        );

        await fetchStores();

      } catch (error) {

        console.error(
          "Add Store Error:",
          error
        );

      }

    };

  const handleDeleteStore =
    async (id: number) => {

      try {

        await deleteStore(id);

        addActivity(
          "Store Deleted"
        );

        await fetchStores();

      } catch (error) {

        console.error(
          "Delete Store Error:",
          error
        );

      }

    };

  const handleUpdateStore =
    async (
      updatedStore: StoreType
    ) => {

      try {

        await updateStore(
          updatedStore.storeId,
          updatedStore
        );

        addActivity(
          `Store Updated: ${updatedStore.storeName}`
        );

        setEditingStore(null);

        await fetchStores();

      } catch (error) {

        console.error(
          "Update Store Error:",
          error
        );

      }

    };

  const filteredStores =
    stores.filter(
      (store) =>
        (store.storeName || "")
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
            Store Management
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
            Add Store
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

        <StoreTable
          stores={filteredStores}
          onDelete={
            handleDeleteStore
          }
          onEdit={(store) => {

            setEditingStore(
              store
            );

            setShowModal(true);

          }}
        />

        {showModal && (

          <AddStoreModal
            store={editingStore}
            onClose={() => {

              setShowModal(false);

              setEditingStore(
                null
              );

            }}
            onAdd={
              editingStore
                ? handleUpdateStore
                : handleAddStore
            }
          />

        )}

      </div>

    </MainLayout>
  );
}

export default Store;