import { useState } from "react";

interface Props {
  onClose: () => void;
  onAdd: (material: any) => void;
  material?: any;
}

function AddMaterialModal({
  onClose,
  onAdd,
  material,
}: Props) {

  const [formData, setFormData] = useState({
    materialCode: material?.materialCode || "",
    materialName: material?.materialName || "",
    category: material?.category || "",
    currentStock: material?.currentStock || "",
    minimumStock: material?.minimumStock || "",
    unit: material?.unit || "",
    unitPrice: material?.unitPrice || "",
    description: material?.description || "",
  });

  const handleSubmit = () => {

    onAdd({
      ...formData,
      currentStock: Number(formData.currentStock),
      minimumStock: Number(formData.minimumStock),
      unitPrice: Number(formData.unitPrice),
      storeId: 2,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-[#1f2937] border border-gray-700 rounded-xl w-[700px] p-6 shadow-xl">

        <h2 className="text-2xl font-bold text-white mb-6">
          {material ? "Edit Material" : "Add Material"}
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            placeholder="Material Code"
            value={formData.materialCode}
            onChange={(e) =>
              setFormData({
                ...formData,
                materialCode: e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Material Name"
            value={formData.materialName}
            onChange={(e) =>
              setFormData({
                ...formData,
                materialName: e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            type="number"
            placeholder="Current Stock"
            value={formData.currentStock}
            onChange={(e) =>
              setFormData({
                ...formData,
                currentStock: e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            type="number"
            placeholder="Minimum Stock"
            value={formData.minimumStock}
            onChange={(e) =>
              setFormData({
                ...formData,
                minimumStock: e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Unit (Box, Kg, Piece)"
            value={formData.unit}
            onChange={(e) =>
              setFormData({
                ...formData,
                unit: e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            type="number"
            placeholder="Unit Price"
            value={formData.unitPrice}
            onChange={(e) =>
              setFormData({
                ...formData,
                unitPrice: e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

        </div>

        <textarea
          rows={4}
          placeholder="Material Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
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
            Save Material
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddMaterialModal;