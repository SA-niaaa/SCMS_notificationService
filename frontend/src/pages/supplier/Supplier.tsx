import MainLayout from "../../layouts/MainLayout";
import SupplierTable from "../../components/SupplierTable";
import AddSupplierModal from "../../components/AddSupplierModal";

import { addActivity } from "../../services/activityService";
import { sendNotification } from "../../services/notificationService";

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