// import type { Supplier } from "../types/Supplier";

// interface Props {
//   suppliers: Supplier[];
// }

// function SupplierTable({
//   suppliers,
// }: Props) {
//   return (
//     <div className="bg-white rounded-xl p-5 shadow">

//       <table className="w-full">

//         <thead>
//           <tr className="border-b">
//             <th className="text-left p-2">Name</th>
//             <th className="text-left p-2">Email</th>
//             <th className="text-left p-2">Phone</th>
//             <th className="text-left p-2">City</th>
//           </tr>
//         </thead>

//         <tbody>
//           {suppliers.map((supplier) => (
//             <tr
//               key={supplier.id}
//               className="border-b"
//             >
//               <td className="p-2">
//                 {supplier.name}
//               </td>

//               <td className="p-2">
//                 {supplier.email}
//               </td>

//               <td className="p-2">
//                 {supplier.phone}
//               </td>

//               <td className="p-2">
//                 {supplier.city}
//               </td>
//             </tr>
//           ))}
//         </tbody>

//       </table>

//     </div>
//   );
// }

// export default SupplierTable;
// import type { Supplier } from "../types/Supplier";

// // interface Props {
// //   suppliers: Supplier[];
// //   onDelete: (id: number) => void;
// // }
// interface Props {
//   suppliers: Supplier[];
//   onDelete: (id: number) => void;
//   onEdit: (supplier: Supplier) => void;
// }

// function SupplierTable({
//   suppliers,
//   onDelete,
//   onEdit,
// }: Props) {
//   return (
//     <div className="bg-black rounded-xl p-5 shadow">

//       <table className="w-full">

//         <thead>
//           <tr className="border-b border-gray-700">
//             <th className="text-left p-3">Name</th>
//             <th className="text-left p-3">Email</th>
//             <th className="text-left p-3">Phone</th>
//             <th className="text-left p-3">City</th>
//             <th className="text-left p-3">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {suppliers.map((supplier) => (
//             <tr
//               key={supplier.id}
//               className="border-b border-gray-800"
//             >
//               <td className="p-3">{supplier.name}</td>
//               <td className="p-3">{supplier.email}</td>
//               <td className="p-3">{supplier.phone}</td>
//               <td className="p-3">{supplier.city}</td>

//               <td className="p-3 flex gap-2">

//                 {/* <button
//                   className="bg-blue-600 px-3 py-1 rounded"
//                 >
//                   Edit
//                 </button> */}
//                 <button
//   onClick={() =>
//     onEdit(supplier)
//   }
//   className="bg-blue-600 px-3 py-1 rounded"
// >
//   Edit
// </button>

//                 {/* <button
//                   className="bg-red-600 px-3 py-1 rounded"
//                 >
//                   Delete
//                 </button> */}
//                 <button
//   onClick={() =>
//     onDelete(supplier.id)
//   }
//   className="bg-red-600 px-3 py-1 rounded"
// >
//   Delete
// </button>

//               </td>
//             </tr>
//           ))}
//         </tbody>

//       </table>

//     </div>
//   );
// }

// export default SupplierTable;

// import type { Supplier } from "../types/Supplier";

// interface Props {
//   suppliers: Supplier[];
//   onDelete: (id: number) => void;
//   onEdit: (supplier: Supplier) => void;
// }

// function SupplierTable({
//   suppliers,
//   onDelete,
//   onEdit,
// }: Props) {
//   return (
//     <div className="bg-[#111827] rounded-lg border border-gray-700 overflow-hidden">

//       <table className="w-full text-sm">

//         <thead className="bg-[#0f172a]">

//           <tr>

//             <th className="text-left px-4 py-3 border-b border-gray-700">
//               Supplier Name
//             </th>

//             <th className="text-left px-4 py-3 border-b border-gray-700">
//               Email
//             </th>

//             <th className="text-left px-4 py-3 border-b border-gray-700">
//               Contact No
//             </th>

//             <th className="text-left px-4 py-3 border-b border-gray-700">
//               Address / City
//             </th>

//             <th className="text-center px-4 py-3 border-b border-gray-700">
//               Edit
//             </th>

//           </tr>

//         </thead>

//         <tbody>

//           {suppliers.length === 0 ? (

//             <tr>
//               <td
//                 colSpan={5}
//                 className="
//                 text-center
//                 py-8
//                 text-gray-400
//                 "
//               >
//                 No Suppliers Found
//               </td>
//             </tr>

//           ) : (

//             suppliers.map(
//               (supplier) => (

//                 <tr
//                   key={supplier.id}
//                   className="
//                   border-b
//                   border-gray-800
//                   hover:bg-gray-800
//                   "
//                 >

//                   <td className="px-4 py-3">
//                     {supplier.name}
//                   </td>

//                   <td className="px-4 py-3">
//                     {supplier.email}
//                   </td>

//                   <td className="px-4 py-3">
//                     {supplier.phone}
//                   </td>

//                   {/* <td className="px-4 py-3">
//                     {supplier.city}
//                   </td> */}
//                   <td className="px-4 py-3">
//   {supplier.address}
// </td>

//                   <td className="px-4 py-3 text-center">

//                     <div className="flex justify-center gap-2">

//                       <button
//                         onClick={() =>
//                           onEdit(
//                             supplier
//                           )
//                         }
//                         className="
//                         bg-green-600
//                         hover:bg-green-700
//                         px-3
//                         py-1
//                         rounded
//                         text-white
//                         "
//                       >
//                         Edit
//                       </button>

//                       <button
//                         onClick={() =>
//                           onDelete(
//                             supplier.id
//                           )
//                         }
//                         className="
//                         bg-red-600
//                         hover:bg-red-700
//                         px-3
//                         py-1
//                         rounded
//                         text-white
//                         "
//                       >
//                         Delete
//                       </button>

//                     </div>

//                   </td>

//                 </tr>

//               )
//             )

//           )}

//         </tbody>

//       </table>

//     </div>
//   );
// }

// export default SupplierTable;
import type { Supplier } from "../types/Supplier";

interface Props {
  suppliers: Supplier[];
  onDelete: (id: number) => void;
  onEdit: (supplier: Supplier) => void;
}

function SupplierTable({
  suppliers,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className="bg-[#111827] rounded-lg border border-gray-700 overflow-hidden">

      <table className="w-full text-sm">

        <thead className="bg-[#0f172a]">

          <tr>

            <th className="text-left px-4 py-3 border-b border-gray-700">
              Supplier Code
            </th>

            <th className="text-left px-4 py-3 border-b border-gray-700">
              Supplier Name
            </th>

            <th className="text-left px-4 py-3 border-b border-gray-700">
              Contact Person
            </th>

            <th className="text-left px-4 py-3 border-b border-gray-700">
              Phone
            </th>

            <th className="text-left px-4 py-3 border-b border-gray-700">
              Email
            </th>

            <th className="text-left px-4 py-3 border-b border-gray-700">
              GST Number
            </th>

            <th className="text-left px-4 py-3 border-b border-gray-700">
              Address
            </th>

            <th className="text-center px-4 py-3 border-b border-gray-700">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {suppliers.length === 0 ? (

            <tr>

              <td
                colSpan={8}
                className="
                text-center
                py-8
                text-gray-400
                "
              >
                No Suppliers Found
              </td>

            </tr>

          ) : (

            suppliers.map(
              (supplier) => (

                <tr
                  key={supplier.supplierId}
                  className="
                  border-b
                  border-gray-800
                  hover:bg-gray-800
                  "
                >

                  <td className="px-4 py-3">
                    {supplier.supplierCode}
                  </td>

                  <td className="px-4 py-3">
                    {supplier.supplierName}
                  </td>

                  <td className="px-4 py-3">
                    {supplier.contactPerson}
                  </td>

                  <td className="px-4 py-3">
                    {supplier.phone}
                  </td>

                  <td className="px-4 py-3">
                    {supplier.email}
                  </td>

                  <td className="px-4 py-3">
                    {supplier.gstNumber}
                  </td>

                  <td className="px-4 py-3">
                    {supplier.address}
                  </td>

                  <td className="px-4 py-3 text-center">

                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() =>
                          onEdit(
                            supplier
                          )
                        }
                        className="
                        bg-green-600
                        hover:bg-green-700
                        px-3
                        py-1
                        rounded
                        text-white
                        "
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          onDelete(
                            supplier.supplierId
                          )
                        }
                        className="
                        bg-red-600
                        hover:bg-red-700
                        px-3
                        py-1
                        rounded
                        text-white
                        "
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              )
            )

          )}

        </tbody>

      </table>

    </div>
  );
}

export default SupplierTable;