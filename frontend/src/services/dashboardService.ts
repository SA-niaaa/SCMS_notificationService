// export const getSupplierCount = () => {
//   return JSON.parse(
//     localStorage.getItem("suppliers") || "[]"
//   ).length;
// };

// export const getMaterialCount = () => {
//   return JSON.parse(
//     localStorage.getItem("materials") || "[]"
//   ).length;
// };

// export const getManufacturerCount = () => {
//   return JSON.parse(
//     localStorage.getItem("manufacturers") || "[]"
//   ).length;
// };

// // export const getEmployeeCount = () => {
// //   return JSON.parse(
// //     localStorage.getItem("employees") || "[]"
// //   ).length;
// // };
// export const getEmployeeCount = () => {
//   return JSON.parse(
//     localStorage.getItem("employees") || "[]"
//   ).length;
// };

// export const getStoreCount = () => {
//   const stores =
//     JSON.parse(
//       localStorage.getItem("stores") || "[]"
//     );

//   return stores.length;
// };





import {
  getSuppliers,
  getMaterials,
  getManufacturers,
  getEmployees,
  getStores,
} from "./api";

export const getSupplierCount =
  async () => {
    const data =
      await getSuppliers();
    return data.length;
  };

export const getMaterialCount =
  async () => {
    const data =
      await getMaterials();
    return data.length;
  };

export const getManufacturerCount =
  async () => {
    const data =
      await getManufacturers();
    return data.length;
  };

export const getEmployeeCount =
  async () => {
    const data =
      await getEmployees();
    return data.length;
  };

export const getStoreCount =
  async () => {
    const data =
      await getStores();
    return data.length;
  };