// import type { Employee } from "../types/Employee";

// export const employees: Employee[] = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "john@gmail.com",
//     department: "Production",
//     salary: 50000,
//   },
//   {
//     id: 2,
//     name: "Sarah Smith",
//     email: "sarah@gmail.com",
//     department: "Logistics",
//     salary: 60000,
//   },
// ];
// import type { Employee } from "../types/Employee";

// export const employees: Employee[] = [
//   {
//     id: 1,

//     employeeId: "EMP001",

//     name: "John Doe",

//     email: "john@gmail.com",

//     mobile: "9876543210",

//     department: "Production",

//     designation: "Production Manager",

//     salary: 50000,

//     joiningDate: "2023-01-15",

//     status: "Active",
//   },

//   {
//     id: 2,

//     employeeId: "EMP002",

//     name: "Sarah Smith",

//     email: "sarah@gmail.com",

//     mobile: "9123456789",

//     department: "Logistics",

//     designation: "Logistics Officer",

//     salary: 60000,

//     joiningDate: "2022-08-20",

//     status: "Active",
//   },

//   {
//     id: 3,

//     employeeId: "EMP003",

//     name: "Michael Johnson",

//     email: "michael@gmail.com",

//     mobile: "9988776655",

//     department: "Warehouse",

//     designation: "Store Supervisor",

//     salary: 45000,

//     joiningDate: "2024-02-10",

//     status: "Inactive",
//   },
// ];
// const API_URL = "http://localhost:5001/api";

// // ======================
// // EMPLOYEE APIs
// // ======================

// export const getEmployees = async () => {

//   const response = await fetch(
//     `${API_URL}/employees`
//   );

//   return response.json();

// };

// export const addEmployee = async (
//   employee: any
// ) => {

//   const response = await fetch(
//     `${API_URL}/employees`,
//     {
//       method: "POST",

//       headers: {
//         "Content-Type":
//           "application/json",
//       },

//       body: JSON.stringify(
//         employee
//       ),
//     }
//   );

//   return response.json();

// };

// export const updateEmployee = async (
//   id: number,
//   employee: any
// ) => {

//   const response = await fetch(
//     `${API_URL}/employees/${id}`,
//     {
//       method: "PUT",

//       headers: {
//         "Content-Type":
//           "application/json",
//       },

//       body: JSON.stringify(
//         employee
//       ),
//     }
//   );

//   return response.json();

// };

// export const deleteEmployee = async (
//   id: number
// ) => {

//   const response = await fetch(
//     `${API_URL}/employees/${id}`,
//     {
//       method: "DELETE",
//     }
//   );

//   return response.json();

// };
const API_URL = "http://localhost:8081/api";

// ======================
// EMPLOYEE APIs
// ======================

export const getEmployees = async () => {

  const response = await fetch(
    `${API_URL}/employees`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch employees"
    );
  }

  return response.json();

};

export const addEmployee = async (
  employee: any
) => {

  const response = await fetch(
    `${API_URL}/employees`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        employee
      ),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to add employee"
    );
  }

  return response.json();

};

export const updateEmployee = async (
  id: number,
  employee: any
) => {

  const response = await fetch(
    `${API_URL}/employees/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        employee
      ),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to update employee"
    );
  }

  return response.json();

};

export const deleteEmployee = async (
  id: number
) => {

  const response = await fetch(
    `${API_URL}/employees/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error(
      await response.text()
    );
  }

  return response.text();

};