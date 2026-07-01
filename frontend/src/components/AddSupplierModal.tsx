import { useState } from "react";

interface Props {
  onClose: () => void;
  onAdd: (supplier: any) => void;
  supplier?: any;
}

function AddSupplierModal({
  onClose,
  onAdd,
  supplier,
}: Props) {

  const [formData, setFormData] = useState({
    supplierId:
      supplier?.supplierId || null,

    supplierCode:
      supplier?.supplierCode || "",

    supplierName:
      supplier?.supplierName || "",

    contactPerson:
      supplier?.contactPerson || "",

    phone:
      supplier?.phone || "",

    email:
      supplier?.email || "",

    address:
      supplier?.address || "",

    gstNumber:
      supplier?.gstNumber || "",
  });

  const handleSubmit = () => {

    console.log(
      "Submitting Supplier:",
      formData
    );

    onAdd(formData);

    onClose();

  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">

      <div className="bg-gray-900 p-6 rounded-xl w-[700px] max-h-[90vh] overflow-y-auto">

        <h2 className="text-2xl font-bold mb-6">
          {supplier
            ? "Edit Supplier"
            : "Add Supplier"}
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            value={formData.supplierCode}
            placeholder="Supplier Code"
            className="p-3 rounded bg-black border border-gray-700"
            onChange={(e) =>
              setFormData({
                ...formData,
                supplierCode:
                  e.target.value,
              })
            }
          />

          <input
            value={formData.supplierName}
            placeholder="Supplier Name"
            className="p-3 rounded bg-black border border-gray-700"
            onChange={(e) =>
              setFormData({
                ...formData,
                supplierName:
                  e.target.value,
              })
            }
          />

          <input
            value={formData.contactPerson}
            placeholder="Contact Person"
            className="p-3 rounded bg-black border border-gray-700"
            onChange={(e) =>
              setFormData({
                ...formData,
                contactPerson:
                  e.target.value,
              })
            }
          />

          <input
            value={formData.phone}
            placeholder="Phone Number"
            className="p-3 rounded bg-black border border-gray-700"
            onChange={(e) =>
              setFormData({
                ...formData,
                phone:
                  e.target.value,
              })
            }
          />

          <input
            value={formData.email}
            placeholder="Email"
            className="p-3 rounded bg-black border border-gray-700"
            onChange={(e) =>
              setFormData({
                ...formData,
                email:
                  e.target.value,
              })
            }
          />

          <input
            value={formData.gstNumber}
            placeholder="GST Number"
            className="p-3 rounded bg-black border border-gray-700"
            onChange={(e) =>
              setFormData({
                ...formData,
                gstNumber:
                  e.target.value,
              })
            }
          />

        </div>

        <textarea
          value={formData.address}
          placeholder="Address"
          rows={4}
          className="
          w-full
          mt-4
          p-3
          rounded
          bg-black
          border
          border-gray-700
          "
          onChange={(e) =>
            setFormData({
              ...formData,
              address:
                e.target.value,
            })
          }
        />

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="
            bg-gray-700
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
            px-5
            py-2
            rounded
            "
          >
            Save Supplier
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddSupplierModal;