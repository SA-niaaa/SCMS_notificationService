// import { useState } from "react";

// interface Props {
//   onClose: () => void;
//   onAdd: (manufacturer: any) => void;
//   manufacturer?: any;
// }

// function AddManufacturerModal({
//   onClose,
//   onAdd,
//   manufacturer,
// }: Props) {

//   const [formData, setFormData] =
//     useState({
//       id: manufacturer?.id || Date.now(),
//       name: manufacturer?.name || "",
//       location:
//         manufacturer?.location || "",
//       contact:
//         manufacturer?.contact || "",
//     });

//   const handleSubmit = () => {
//     onAdd(formData);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

//       <div className="bg-gray-900 p-6 rounded-xl w-[500px]">

//         <h2 className="text-2xl font-bold mb-5">
//           {manufacturer
//             ? "Edit Manufacturer"
//             : "Add Manufacturer"}
//         </h2>

//         <div className="space-y-3">

//           <input
//             placeholder="Name"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 name: e.target.value,
//               })
//             }
//             className="w-full p-3 bg-black rounded"
//           />

//           <input
//             placeholder="Location"
//             value={formData.location}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 location:
//                   e.target.value,
//               })
//             }
//             className="w-full p-3 bg-black rounded"
//           />

//           <input
//             placeholder="Contact"
//             value={formData.contact}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 contact:
//                   e.target.value,
//               })
//             }
//             className="w-full p-3 bg-black rounded"
//           />

//         </div>

//         <div className="flex justify-end gap-2 mt-4">

//           <button
//             onClick={onClose}
//             className="bg-gray-600 px-4 py-2 rounded"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleSubmit}
//             className="bg-green-600 px-4 py-2 rounded"
//           >
//             Save
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default AddManufacturerModal;
// import { useState } from "react";

// interface Props {
//   onClose: () => void;
//   onAdd: (manufacturer: any) => void;
//   manufacturer?: any;
// }

// function AddManufacturerModal({
//   onClose,
//   onAdd,
//   manufacturer,
// }: Props) {

//   const [formData, setFormData] =
//     useState({
//       id:
//         manufacturer?.id ||
//         Date.now(),

//       name:
//         manufacturer?.name || "",

//       location:
//         manufacturer?.location || "",

//       contact:
//         manufacturer?.contact || "",

//       email:
//         manufacturer?.email || "",

//       gstNo:
//         manufacturer?.gstNo || "",

//       productionType:
//         manufacturer?.productionType ||
//         "",

//       description:
//         manufacturer?.description ||
//         "",
//     });

//   const handleSubmit = () => {
//     onAdd(formData);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

//       <div className="bg-[#1f2937] border border-gray-700 rounded-xl w-[700px] p-6 shadow-xl">

//         <h2 className="text-2xl font-bold text-white mb-6">
//           {manufacturer
//             ? "Edit Manufacturer"
//             : "Add Manufacturer"}
//         </h2>

//         <div className="grid grid-cols-2 gap-4">

//           <input
//             placeholder="Manufacturer Name"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 name:
//                   e.target.value,
//               })
//             }
//             className="p-3 rounded bg-black border border-gray-700"
//           />

//           <input
//             placeholder="Location"
//             value={formData.location}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 location:
//                   e.target.value,
//               })
//             }
//             className="p-3 rounded bg-black border border-gray-700"
//           />

//           <input
//             placeholder="Contact Number"
//             value={formData.contact}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 contact:
//                   e.target.value,
//               })
//             }
//             className="p-3 rounded bg-black border border-gray-700"
//           />

//           <input
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 email:
//                   e.target.value,
//               })
//             }
//             className="p-3 rounded bg-black border border-gray-700"
//           />

//           <input
//             placeholder="GST Number"
//             value={formData.gstNo}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 gstNo:
//                   e.target.value,
//               })
//             }
//             className="p-3 rounded bg-black border border-gray-700"
//           />

//           <input
//             placeholder="Production Type"
//             value={
//               formData.productionType
//             }
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 productionType:
//                   e.target.value,
//               })
//             }
//             className="p-3 rounded bg-black border border-gray-700"
//           />

//         </div>

//         <textarea
//           rows={4}
//           placeholder="Manufacturer Description"
//           value={formData.description}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               description:
//                 e.target.value,
//             })
//           }
//           className="
//           w-full
//           mt-4
//           p-3
//           rounded
//           bg-black
//           border
//           border-gray-700
//           "
//         />

//         <div className="flex justify-end gap-3 mt-6">

//           <button
//             onClick={onClose}
//             className="
//             bg-gray-600
//             hover:bg-gray-700
//             px-5
//             py-2
//             rounded
//             "
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleSubmit}
//             className="
//             bg-green-600
//             hover:bg-green-700
//             px-5
//             py-2
//             rounded
//             "
//           >
//             Save Manufacturer
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default AddManufacturerModal;
import { useState } from "react";

interface Props {
  onClose: () => void;
  onAdd: (manufacturer: any) => void;
  manufacturer?: any;
}

function AddManufacturerModal({
  onClose,
  onAdd,
  manufacturer,
}: Props) {

  // const [formData, setFormData] = useState({
  //   manufacturerCode:
  //     manufacturer?.manufacturerCode || "",

  //   manufacturerName:
  //     manufacturer?.manufacturerName || "",

  //   contactPerson:
  //     manufacturer?.contactPerson || "",

  //   phone:
  //     manufacturer?.phone || "",

  //   email:
  //     manufacturer?.email || "",

  //   address:
  //     manufacturer?.address || "",

  //   website:
  //     manufacturer?.website || "",
  // });
  const [formData, setFormData] = useState({
  manufacturerId:
    manufacturer?.manufacturerId || null,

  manufacturerCode:
    manufacturer?.manufacturerCode || "",

  manufacturerName:
    manufacturer?.manufacturerName || "",

  contactPerson:
    manufacturer?.contactPerson || "",

  phone:
    manufacturer?.phone || "",

  email:
    manufacturer?.email || "",

  address:
    manufacturer?.address || "",

  website:
    manufacturer?.website || "",
});

  const handleSubmit = () => {
  console.log("Submitting:", formData);

  onAdd(formData);

  onClose();
};

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-[#1f2937] border border-gray-700 rounded-xl w-[700px] p-6 shadow-xl">

        <h2 className="text-2xl font-bold text-white mb-6">
          {manufacturer
            ? "Edit Manufacturer"
            : "Add Manufacturer"}
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            placeholder="Manufacturer Code"
            value={formData.manufacturerCode}
            onChange={(e) =>
              setFormData({
                ...formData,
                manufacturerCode:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Manufacturer Name"
            value={formData.manufacturerName}
            onChange={(e) =>
              setFormData({
                ...formData,
                manufacturerName:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Contact Person"
            value={formData.contactPerson}
            onChange={(e) =>
              setFormData({
                ...formData,
                contactPerson:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Website"
            value={formData.website}
            onChange={(e) =>
              setFormData({
                ...formData,
                website:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

        </div>

        <textarea
          rows={4}
          placeholder="Address"
          value={formData.address}
          onChange={(e) =>
            setFormData({
              ...formData,
              address:
                e.target.value,
            })
          }
          className="
          w-full
          mt-4
          p-3
          rounded
          bg-black
          border
          border-gray-700
          "
        />

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="
            bg-gray-600
            hover:bg-gray-700
            px-5
            py-2
            rounded
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="
            bg-green-600
            hover:bg-green-700
            px-5
            py-2
            rounded
            "
          >
            Save Manufacturer
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddManufacturerModal;