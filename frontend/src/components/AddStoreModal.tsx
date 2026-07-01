import { useState } from "react";
import type { StoreType } from "../types/Store";

interface Props {
  onClose: () => void;
  onAdd: (store: StoreType) => void;
  store?: StoreType | null;
}

function AddStoreModal({
  onClose,
  onAdd,
  store,
}: Props) {

  const [formData, setFormData] =
  useState<any>({
    storeId:
      store?.storeId ?? null,

      storeCode:
        store?.storeCode || "",

      storeName:
        store?.storeName || "",

      location:
        store?.location || "",

      storeType:
        store?.storeType || "",

      managerName:
        store?.managerName || "",

      contactNumber:
        store?.contactNumber || "",

      email:
        store?.email || "",

      status:
        store?.status || "ACTIVE",
    });

  const handleSubmit = () => {

  const payload = { ...formData };

  if (!store) {
    delete payload.storeId;
  }

  onAdd(payload);

  onClose();

};

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-[#1f2937] border border-gray-700 rounded-xl w-[800px] p-6 shadow-xl">

        <h2 className="text-2xl font-bold text-white mb-6">
          {store
            ? "Edit Store"
            : "Add Store"}
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            value={formData.storeCode}
            placeholder="Store Code"
            onChange={(e) =>
              setFormData({
                ...formData,
                storeCode:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            value={formData.storeName}
            placeholder="Store Name"
            onChange={(e) =>
              setFormData({
                ...formData,
                storeName:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            value={formData.location}
            placeholder="Location"
            onChange={(e) =>
              setFormData({
                ...formData,
                location:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            value={formData.storeType}
            placeholder="Store Type"
            onChange={(e) =>
              setFormData({
                ...formData,
                storeType:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            value={formData.managerName}
            placeholder="Manager Name"
            onChange={(e) =>
              setFormData({
                ...formData,
                managerName:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            value={formData.contactNumber}
            placeholder="Contact Number"
            onChange={(e) =>
              setFormData({
                ...formData,
                contactNumber:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            value={formData.email}
            placeholder="Email"
            onChange={(e) =>
              setFormData({
                ...formData,
                email:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({
                ...formData,
                status:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          >
            <option value="ACTIVE">
              ACTIVE
            </option>

            <option value="INACTIVE">
              INACTIVE
            </option>
          </select>

        </div>

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
            Save Store
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddStoreModal;