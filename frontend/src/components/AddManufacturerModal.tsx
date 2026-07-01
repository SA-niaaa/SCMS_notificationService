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