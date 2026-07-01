import { useState, useEffect } from "react";
import { getStores } from "../services/api";

interface Props {
  onClose: () => void;
  onAdd: (employee: any) => void;
  employee?: any;
}

function AddEmployeeModal({
  onClose,
  onAdd,
  employee,
}: Props) {

  const [formData, setFormData] =
    useState({
      employeeId:
  employee?.employeeId ?? null,

      employeeCode:
        employee?.employeeCode || "",

      employeeName:
        employee?.employeeName || "",

      designation:
        employee?.designation || "",

      department:
        employee?.department || "",

      phone:
        employee?.phone || "",

      email:
        employee?.email || "",

      address:
        employee?.address || "",

      joiningDate:
        employee?.joiningDate || "",

      salary:
        employee?.salary || 0,

      storeId:
  employee?.storeId ?? 0,

      status:
        employee?.status || "ACTIVE",
    });

    const [stores, setStores] = useState<any[]>([]);

useEffect(() => {
  loadStores();
}, []);

const loadStores = async () => {
  try {
    const data = await getStores();
    setStores(data);
  } catch (error) {
    console.error("Failed to load stores", error);
  }
};

  const handleSubmit = () => {

  if (formData.storeId === 0) {
    alert("Please select a Store");
    return;
  }

  onAdd(formData);

  onClose();

};

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-[#1f2937] border border-gray-700 rounded-xl w-[750px] p-6 shadow-xl">

        <h2 className="text-2xl font-bold text-white mb-6">
          {employee
            ? "Edit Employee"
            : "Add Employee"}
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            placeholder="Employee Code"
            value={formData.employeeCode}
            onChange={(e) =>
              setFormData({
                ...formData,
                employeeCode:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Employee Name"
            value={formData.employeeName}
            onChange={(e) =>
              setFormData({
                ...formData,
                employeeName:
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
            placeholder="Department"
            value={formData.department}
            onChange={(e) =>
              setFormData({
                ...formData,
                department:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Designation"
            value={formData.designation}
            onChange={(e) =>
              setFormData({
                ...formData,
                designation:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({
                ...formData,
                address:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <select
  value={formData.storeId}
  onChange={(e) =>
    setFormData({
      ...formData,
      storeId: Number(e.target.value),
    })
  }
  className="p-3 rounded bg-black border border-gray-700"
>
  <option value={0}>
    Select Store
  </option>

  {stores.map((store) => (
    <option
      key={store.storeId}
      value={store.storeId}
    >
      {store.storeId} - {store.storeName}
    </option>
  ))}
</select>

          <input
            type="number"
            placeholder="Salary"
            value={formData.salary}
            onChange={(e) =>
              setFormData({
                ...formData,
                salary: Number(
                  e.target.value
                ),
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            type="date"
            value={formData.joiningDate}
            onChange={(e) =>
              setFormData({
                ...formData,
                joiningDate:
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
            Save Employee
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddEmployeeModal;