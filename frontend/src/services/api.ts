// const API_URL =
//   "http://localhost:5001/api";

// export const getSuppliers =
//   async () => {
//     const response =
//       await fetch(
//         `${API_URL}/suppliers`
//       );

//     return response.json();
//   };
// const API_URL = "http://localhost:5001/api";

// export const getSuppliers = async () => {
//   const response = await fetch(
//     `${API_URL}/suppliers`
//   );

//   return response.json();
// };
// const API_URL = "http://localhost:5001/api";

// export const getSuppliers = async () => {
//   const response = await fetch(
//     `${API_URL}/suppliers`
//   );


//   return response.json();
// };

// // export const deleteSupplier = async (
// //   id: number
// // ) => {

// //   const response =
// //     await fetch(
// //       `http://localhost:5001/api/suppliers/${id}`,
// //       {
// //         method: "DELETE",
// //       }
// //     );

// //   return response.json();

// // };
// export const deleteSupplier =
//   async (id: number) => {

//     const response =
//       await fetch(
//         `http://localhost:5001/api/suppliers/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//     return response.json();

//   };
//   export const updateSupplier =
//   async (
//     id: number,
//     supplier: any
//   ) => {

//     const response =
//       await fetch(
//         `http://localhost:5001/api/suppliers/${id}`,
//         {
//           method: "PUT",

//           headers: {
//             "Content-Type":
//               "application/json",
//           },

//           body: JSON.stringify(
//             supplier
//           ),
//         }
//       );

//     return response.json();

//   };

// export const addSupplier = async (
//   supplier: any
// ) => {

//   const response =
//     await fetch(
//       `${API_URL}/suppliers`,
//       {
//         method: "POST",

//         headers: {
//           "Content-Type":
//             "application/json",
//         },

//         body: JSON.stringify(
//           supplier
//         ),
//       }
//     );

//   return response.json();

// };
// ======================
// STORE APIs
// ======================

// const API_URL = "http://localhost:5001/api";
const API_URL = "http://localhost:8081/api";

// // ======================
// // SUPPLIER APIs
// // ======================

// export const getSuppliers = async () => {

//   const response = await fetch(
//     `${API_URL}/suppliers`
//   );

//   return response.json();

// };

// export const addSupplier = async (
//   supplier: any
// ) => {

//   const response = await fetch(
//     `${API_URL}/suppliers`,
//     {
//       method: "POST",

//       headers: {
//         "Content-Type":
//           "application/json",
//       },

//       body: JSON.stringify(
//         supplier
//       ),
//     }
//   );

//   return response.json();

// };

// export const updateSupplier = async (
//   id: number,
//   supplier: any
// ) => {

//   const response = await fetch(
//     `${API_URL}/suppliers/${id}`,
//     {
//       method: "PUT",

//       headers: {
//         "Content-Type":
//           "application/json",
//       },

//       body: JSON.stringify(
//         supplier
//       ),
//     }
//   );

//   return response.json();

// };

// export const deleteSupplier = async (
//   id: number
// ) => {

//   const response = await fetch(
//     `${API_URL}/suppliers/${id}`,
//     {
//       method: "DELETE",
//     }
//   );

//   return response.json();

// };
// ======================
// SUPPLIER APIs
// ======================

export const getSuppliers = async () => {

  const response = await fetch(
    `${API_URL}/suppliers`
  );

  if (!response.ok) {
    throw new Error(
      await response.text()
    );
  }

  return response.json();

};

export const addSupplier = async (
  supplier: any
) => {

  const response = await fetch(
    `${API_URL}/suppliers`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        supplier
      ),
    }
  );

  if (!response.ok) {
    throw new Error(
      await response.text()
    );
  }

  return response.json();

};

export const updateSupplier = async (
  id: number,
  supplier: any
) => {

  const response = await fetch(
    `${API_URL}/suppliers/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        supplier
      ),
    }
  );

  if (!response.ok) {
    throw new Error(
      await response.text()
    );
  }

  // If backend returns updated Supplier object
  return response.json();

};

export const deleteSupplier = async (
  id: number
) => {

  const response = await fetch(
    `${API_URL}/suppliers/${id}`,
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


// ======================
// STORE APIs
// ======================

export const getStores = async () => {

  const response = await fetch(
    `${API_URL}/stores`
  );

  if (!response.ok) {
    throw new Error(
      await response.text()
    );
  }

  return response.json();

};

export const addStore = async (
  store: any
) => {

  const response = await fetch(
    `${API_URL}/stores`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        store
      ),
    }
  );

  if (!response.ok) {
    throw new Error(
      await response.text()
    );
  }

  return response.json();

};

export const updateStore = async (
  id: number,
  store: any
) => {

  const response = await fetch(
    `${API_URL}/stores/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        store
      ),
    }
  );

  if (!response.ok) {
    throw new Error(
      await response.text()
    );
  }

  return response.json();

};

export const deleteStore = async (
  id: number
) => {

  const response = await fetch(
    `${API_URL}/stores/${id}`,
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
// ======================
// EMPLOYEE APIs
// ======================

export const getEmployees =
  async () => {

    const response =
      await fetch(
        `${API_URL}/employees`
      );

    if (!response.ok) {
      throw new Error(
        await response.text()
      );
    }

    return response.json();

  };

export const addEmployee =
  async (
    employee: any
  ) => {

    const response =
      await fetch(
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
        await response.text()
      );
    }

    return response.json();

  };

export const updateEmployee =
  async (
    id: number,
    employee: any
  ) => {

    const response =
      await fetch(
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
        await response.text()
      );
    }

    return response.json();

  };

export const deleteEmployee =
  async (
    id: number
  ) => {

    const response =
      await fetch(
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
// ======================
// MATERIAL APIs
// ======================

// export const getMaterials =
//   async () => {

//     const response =
//       await fetch(
//         `${API_URL}/materials`
//       );

//     return response.json();

//   };

// export const addMaterial =
//   async (
//     material: any
//   ) => {

//     const response =
//       await fetch(
//         `${API_URL}/materials`,
//         {
//           method: "POST",

//           headers: {
//             "Content-Type":
//               "application/json",
//           },

//           body: JSON.stringify(
//             material
//           ),
//         }
//       );

//     return response.json();

//   };

// export const updateMaterial =
//   async (
//     id: number,
//     material: any
//   ) => {

//     const response =
//       await fetch(
//         `${API_URL}/materials/${id}`,
//         {
//           method: "PUT",

//           headers: {
//             "Content-Type":
//               "application/json",
//           },

//           body: JSON.stringify(
//             material
//           ),
//         }
//       );

//     return response.json();

//   };

// export const deleteMaterial =
//   async (
//     id: number
//   ) => {

//     const response =
//       await fetch(
//         `${API_URL}/materials/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//     return response.json();

//   };
// ======================
// MATERIAL APIs
// ======================

// export const getMaterials = async () => {

//   const response =
//     await fetch(
//       `${API_URL}/materials`
//     );

//   return response.text();

// };
// export const getMaterials =
//   async () => {

//     const response =
//       await fetch(
//         `${API_URL}/materials`
//       );

//     return response.json();

//   };

// export const addMaterial = async (
//   material: any
// ) => {

//   const response =
//     await fetch(
//       `${API_URL}/materials`,
//       {
//         method: "POST",

//         headers: {
//           "Content-Type":
//             "application/json",
//         },

//         body: JSON.stringify(
//           material
//         ),
//       }
//     );

//   if (!response.ok) {
//     throw new Error(
//       await response.text()
//     );
//   }

//   return response.text();

// };

// export const updateMaterial = async (
//   id: number,
//   material: any
// ) => {

//   const response =
//     await fetch(
//       `${API_URL}/materials/${id}`,
//       {
//         method: "PUT",

//         headers: {
//           "Content-Type":
//             "application/json",
//         },

//         body: JSON.stringify(
//           material
//         ),
//       }
//     );

//   if (!response.ok) {
//     throw new Error(
//       await response.text()
//     );
//   }

//   return response.text();

// };

// // export const deleteMaterial = async (
// //   id: number
// // ) => {

// //   const response =
// //     await fetch(
// //       `${API_URL}/materials/${id}`,
// //       {
// //         method: "DELETE",
// //       }
// //     );

// //   if (!response.ok) {
// //     throw new Error(
// //       await response.text()
// //     );
// //   }

// //   return response.text();

// // };
// export const deleteMaterial =
//   async (
//     id: number
//   ) => {

//     const response =
//       await fetch(
//         `${API_URL}/materials/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//     return response.text();

//   };
// ======================
// MATERIAL APIs
// ======================

export const getMaterials = async () => {
  const response = await fetch(
    `${API_URL}/materials`
  );

  return response.json();
};

export const addMaterial = async (
  material: any
) => {

  const response =
    await fetch(
      `${API_URL}/materials`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(material),
      }
    );

  if (!response.ok) {
    throw new Error(
      await response.text()
    );
  }

  return response.json();
};

export const updateMaterial = async (
  id: number,
  material: any
) => {

  const response =
    await fetch(
      `${API_URL}/materials/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(material),
      }
    );

  if (!response.ok) {
    throw new Error(
      await response.text()
    );
  }

  return response.json();
};

export const deleteMaterial = async (
  id: number
) => {

  const response =
    await fetch(
      `${API_URL}/materials/${id}`,
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

// ======================
// MANUFACTURER APIs
// ======================

export const getManufacturers =
  async () => {

    const response =
      await fetch(
        `${API_URL}/manufacturers`
      );

    return response.json();

  };

export const addManufacturer =
  async (
    manufacturer: any
  ) => {

    const response =
      await fetch(
        `${API_URL}/manufacturers`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            manufacturer
          ),
        }
      );

    if (!response.ok) {
      throw new Error(
        await response.text()
      );
    }

    return response.json();

  };

export const updateManufacturer =
  async (
    id: number,
    manufacturer: any
  ) => {

    const response =
      await fetch(
        `${API_URL}/manufacturers/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            manufacturer
          ),
        }
      );

    if (!response.ok) {
      throw new Error(
        await response.text()
      );
    }

    return response.json();

  };

export const deleteManufacturer =
  async (
    id: number
  ) => {

    const response =
      await fetch(
        `${API_URL}/manufacturers/${id}`,
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
  

  // ======================
// MANUFACTURER APIs
// ======================

// // ======================
// // MANUFACTURER APIs
// // ======================

// export const getManufacturers =
//   async () => {

//     const response =
//       await fetch(
//         `${API_URL}/manufacturers`
//       );

//     return response.text();

//   };

// export const addManufacturer =
//   async (
//     manufacturer: any
//   ) => {

//     const response =
//       await fetch(
//         `${API_URL}/manufacturers`,
//         {
//           method: "POST",

//           headers: {
//             "Content-Type":
//               "application/json",
//           },

//           body: JSON.stringify(
//             manufacturer
//           ),
//         }
//       );

//     return response.text();

//   };

// export const updateManufacturer =
//   async (
//     id: number,
//     manufacturer: any
//   ) => {

//     const response =
//       await fetch(
//         `${API_URL}/manufacturers/${id}`,
//         {
//           method: "PUT",

//           headers: {
//             "Content-Type":
//               "application/json",
//           },

//           body: JSON.stringify(
//             manufacturer
//           ),
//         }
//       );

//     return response.text();

//   };

// export const deleteManufacturer =
//   async (
//     id: number
//   ) => {

//     const response =
//       await fetch(
//         `${API_URL}/manufacturers/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//     return response.text();

//   };
