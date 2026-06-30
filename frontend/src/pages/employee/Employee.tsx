// import EmployeeTable from "../../components/EmployeeTable";
// import AddEmployeeModal from "../../components/AddEmployeeModal";
// import { employees as initialEmployees } from "../../services/employeeService";
// import { useEffect, useState } from "react";

// interface EmployeeType {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   salary: number;
// }

// function Employee() {

//   const [employees, setEmployees] =
//     useState<EmployeeType[]>(() => {

//       const storedEmployees =
//         localStorage.getItem("employees");

//       return storedEmployees
//         ? JSON.parse(storedEmployees)
//         : initialEmployees;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [editingEmployee, setEditingEmployee] =
//     useState<any>(null);

//   useEffect(() => {
//     localStorage.setItem(
//       "employees",
//       JSON.stringify(employees)
//     );
//   }, [employees]);

//   const handleAddEmployee = (
//     employee: any
//   ) => {
//     setEmployees([
//       ...employees,
//       employee,
//     ]);
//   };

//   const handleDeleteEmployee = (
//     id: number
//   ) => {
//     setEmployees(
//       employees.filter(
//         (employee) =>
//           employee.id !== id
//       )
//     );
//   };

//   const handleUpdateEmployee = (
//     updatedEmployee: any
//   ) => {
//     setEmployees(
//       employees.map((employee) =>
//         employee.id ===
//         updatedEmployee.id
//           ? updatedEmployee
//           : employee
//       )
//     );

//     setEditingEmployee(null);
//   };

//   const filteredEmployees =
//     employees.filter((employee) =>
//       employee.name
//         .toLowerCase()
//         .includes(search.toLowerCase())
//     );

//   return (
//     <div>

//       <div className="flex justify-between items-center mb-6">

//         <h1 className="text-3xl font-bold">
//           Employee Management
//         </h1>

//         <button
//           onClick={() =>
//             setShowModal(true)
//           }
//           className="bg-green-600 px-4 py-2 rounded"
//         >
//           Add Employee
//         </button>

//       </div>

//       <input
//         type="text"
//         placeholder="Search employee..."
//         value={search}
//         onChange={(e) =>
//           setSearch(e.target.value)
//         }
//         className="w-full mb-5 p-3 rounded bg-black border border-gray-700"
//       />

//       {/* <EmployeeTable
//         employees={filteredEmployees}
//         onDelete={handleDeleteEmployee}
//         onEdit={(employee) => {
//           setEditingEmployee(employee);
//           setShowModal(true);
//         }}
//       /> */}
//       <EmployeeTable
//   employees={filteredEmployees}
//   onDelete={handleDeleteEmployee}
//   onEdit={(employee: EmployeeType) => {
//     setEditingEmployee(employee);
//     setShowModal(true);
//   }}
// />

//       {showModal && (
//         <AddEmployeeModal
//           employee={editingEmployee}
//           onClose={() => {
//             setShowModal(false);
//             setEditingEmployee(null);
//           }}
//           onAdd={
//             editingEmployee
//               ? handleUpdateEmployee
//               : handleAddEmployee
//           }
//         />
//       )}

//     </div>
//   );
// }

// export default Employee;
// import EmployeeTable from "../../components/EmployeeTable";
// import AddEmployeeModal from "../../components/AddEmployeeModal";
// import { employees as initialEmployees } from "../../services/employeeService";
// import { addActivity } from "../../services/activityService";
// import { useEffect, useState } from "react";

// interface EmployeeType {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   salary: number;
// }

// function Employee() {
//   const [employees, setEmployees] =
//     useState<EmployeeType[]>(() => {
//       const storedEmployees =
//         localStorage.getItem("employees");

//       return storedEmployees
//         ? JSON.parse(storedEmployees)
//         : initialEmployees;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [editingEmployee, setEditingEmployee] =
//     useState<EmployeeType | null>(null);

//   useEffect(() => {
//     localStorage.setItem(
//       "employees",
//       JSON.stringify(employees)
//     );
//   }, [employees]);

//   const handleAddEmployee = (
//     employee: EmployeeType
//   ) => {
//     setEmployees([
//       ...employees,
//       employee,
//     ]);

//     addActivity(
//       `Employee Added: ${employee.name}`
//     );
//   };

//   const handleDeleteEmployee = (
//     id: number
//   ) => {
//     setEmployees(
//       employees.filter(
//         (employee) =>
//           employee.id !== id
//       )
//     );

//     addActivity(
//       "Employee Deleted"
//     );
//   };

//   const handleUpdateEmployee = (
//     updatedEmployee: EmployeeType
//   ) => {
//     setEmployees(
//       employees.map((employee) =>
//         employee.id ===
//         updatedEmployee.id
//           ? updatedEmployee
//           : employee
//       )
//     );

//     addActivity(
//       `Employee Updated: ${updatedEmployee.name}`
//     );

//     setEditingEmployee(null);
//   };

//   const filteredEmployees =
//     employees.filter((employee) =>
//       employee.name
//         .toLowerCase()
//         .includes(
//           search.toLowerCase()
//         )
//     );

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">
//           Employee Management
//         </h1>

//         <button
//           onClick={() =>
//             setShowModal(true)
//           }
//           className="bg-green-600 px-4 py-2 rounded"
//         >
//           Add Employee
//         </button>
//       </div>

//       <input
//         type="text"
//         placeholder="Search employee..."
//         value={search}
//         onChange={(e) =>
//           setSearch(e.target.value)
//         }
//         className="w-full mb-5 p-3 rounded bg-black border border-gray-700"
//       />

//       <EmployeeTable
//         employees={filteredEmployees}
//         onDelete={handleDeleteEmployee}
//         onEdit={(employee: EmployeeType) => {
//           setEditingEmployee(employee);
//           setShowModal(true);
//         }}
//       />

//       {showModal && (
//         <AddEmployeeModal
//           employee={editingEmployee}
//           onClose={() => {
//             setShowModal(false);
//             setEditingEmployee(null);
//           }}
//           onAdd={
//             editingEmployee
//               ? handleUpdateEmployee
//               : handleAddEmployee
//           }
//         />
//       )}
//     </div>
//   );
// }

// export default Employee;
// import MainLayout from "../../layouts/MainLayout";
// import EmployeeTable from "../../components/EmployeeTable";
// import AddEmployeeModal from "../../components/AddEmployeeModal";
// import { employees as initialEmployees } from "../../services/employeeService";
// import { addActivity } from "../../services/activityService";
// import { useEffect, useState } from "react";

// interface EmployeeType {
//   id: number;
//   employeeId: string;
//   name: string;
//   email: string;
//   mobile: string;
//   department: string;
//   designation: string;
//   salary: number;
//   joiningDate: string;
//   status: string;
// }

// function Employee() {
//   const [employees, setEmployees] =
//     useState<EmployeeType[]>(() => {

//       const storedEmployees =
//         localStorage.getItem(
//           "employees"
//         );

//       return storedEmployees
//         ? JSON.parse(
//             storedEmployees
//           )
//         : initialEmployees;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [
//     editingEmployee,
//     setEditingEmployee,
//   ] =
//     useState<EmployeeType | null>(
//       null
//     );

//   useEffect(() => {
//     localStorage.setItem(
//       "employees",
//       JSON.stringify(
//         employees
//       )
//     );
//   }, [employees]);

//   const handleAddEmployee = (
//     employee: EmployeeType
//   ) => {

//     setEmployees([
//       ...employees,
//       employee,
//     ]);

//     addActivity(
//       `Employee Added: ${employee.name}`
//     );
//   };

//   const handleDeleteEmployee = (
//     id: number
//   ) => {

//     setEmployees(
//       employees.filter(
//         (employee) =>
//           employee.id !== id
//       )
//     );

//     addActivity(
//       "Employee Deleted"
//     );
//   };

//   const handleUpdateEmployee = (
//     updatedEmployee: EmployeeType
//   ) => {

//     setEmployees(
//       employees.map((employee) =>
//         employee.id ===
//         updatedEmployee.id
//           ? updatedEmployee
//           : employee
//       )
//     );

//     addActivity(
//       `Employee Updated: ${updatedEmployee.name}`
//     );

//     setEditingEmployee(
//       null
//     );
//   };

//   const filteredEmployees =
//     employees.filter(
//       (employee) =>
//         employee.name
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
//             Employee Management
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
//             Add Employee
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

//         <EmployeeTable
//           employees={
//             filteredEmployees
//           }
//           onDelete={
//             handleDeleteEmployee
//           }
//           onEdit={(employee) => {

//             setEditingEmployee(
//               employee
//             );

//             setShowModal(true);

//           }}
//         />

//         {showModal && (

//           <AddEmployeeModal
//             employee={
//               editingEmployee
//             }
//             onClose={() => {

//               setShowModal(
//                 false
//               );

//               setEditingEmployee(
//                 null
//               );

//             }}
//             onAdd={
//               editingEmployee
//                 ? handleUpdateEmployee
//                 : handleAddEmployee
//             }
//           />

//         )}

//       </div>
//     </MainLayout>
//   );
// }

// export default Employee;
import MainLayout from "../../layouts/MainLayout";
import EmployeeTable from "../../components/EmployeeTable";
import AddEmployeeModal from "../../components/AddEmployeeModal";

import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../../services/employeeService";

import { addActivity } from "../../services/activityService";

import {
  useEffect,
  useState,
} from "react";

interface EmployeeType {
  employeeId: number;

  employeeCode: string;

  employeeName: string;

  designation: string;

  department: string;

  phone: string;

  email: string;

  address: string;

  joiningDate: string;

  salary: number;

  storeId: number;

  status: string;
}

function Employee() {

  const [employees, setEmployees] =
    useState<EmployeeType[]>([]);

  const [search, setSearch] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [
    editingEmployee,
    setEditingEmployee,
  ] =
    useState<EmployeeType | null>(
      null
    );

  // ======================
  // LOAD EMPLOYEES
  // ======================

  useEffect(() => {

    loadEmployees();

  }, []);

  const loadEmployees =
    async () => {

      try {

        const data =
          await getEmployees();

        setEmployees(data);

      } catch (error) {

        console.error(
          "Error loading employees:",
          error
        );

      }

    };

  // ======================
  // ADD EMPLOYEE
  // ======================

  const handleAddEmployee =
    async (
      employee: EmployeeType
    ) => {

      try {

        await addEmployee(
          employee
        );

        await loadEmployees();

        addActivity(
  `Employee Added: ${employee.employeeName}`
);

      } catch (error) {

        console.error(error);

      }

    };

  // ======================
  // DELETE EMPLOYEE
  // ======================

  const handleDeleteEmployee =
    async (
      id: number
    ) => {

      try {

        await deleteEmployee(
          id
        );

        await loadEmployees();

        addActivity(
          "Employee Deleted"
        );

      } catch (error) {

        console.error(error);

      }

    };

  // ======================
  // UPDATE EMPLOYEE
  // ======================

  const handleUpdateEmployee =
    async (
      updatedEmployee:
        EmployeeType
    ) => {

      try {

        await updateEmployee(
  updatedEmployee.employeeId,
  updatedEmployee
);

        await loadEmployees();

        addActivity(
          `Employee Updated: ${updatedEmployee.employeeName}`
        );

        setEditingEmployee(
          null
        );

      } catch (error) {

        console.error(error);

      }

    };

  const filteredEmployees =
  employees.filter(
    (employee) =>
      (employee.employeeName || "")
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
            Employee Management
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
            Add Employee
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

        <EmployeeTable
          employees={
            filteredEmployees
          }
          onDelete={
            handleDeleteEmployee
          }
          onEdit={(employee) => {

            setEditingEmployee(
              employee
            );

            setShowModal(true);

          }}
        />

        {showModal && (

          <AddEmployeeModal
            employee={
              editingEmployee
            }
            onClose={() => {

              setShowModal(
                false
              );

              setEditingEmployee(
                null
              );

            }}
            onAdd={
              editingEmployee
                ? handleUpdateEmployee
                : handleAddEmployee
            }
          />

        )}

      </div>

    </MainLayout>
  );
}

export default Employee;