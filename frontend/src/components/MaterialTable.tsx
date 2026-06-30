// interface Props {
//   materials: any[];
//   onDelete: (id: number) => void;
//   onEdit: (material: any) => void;
// }

// function MaterialTable({
//   materials,
//   onDelete,
//   onEdit,
// }: Props) {
//   return (
//     <table className="w-full">
//       <thead>
//         <tr className="text-left border-b border-gray-700">
//           <th className="p-3">Name</th>
//           <th className="p-3">Category</th>
//           <th className="p-3">Quantity</th>
//           <th className="p-3">Actions</th>
//         </tr>
//       </thead>

//       <tbody>
//         {materials.map((material) => (
//           <tr
//             key={material.id}
//             className="border-b border-gray-800"
//           >
//             <td className="p-3">
//               {material.name}
//             </td>

//             <td className="p-3">
//               {material.category}
//             </td>

//             <td className="p-3">
//               {material.quantity}
//             </td>

//             <td className="p-3">
//               <button
//                 onClick={() =>
//                   onEdit(material)
//                 }
//                 className="bg-blue-600 px-3 py-1 rounded mr-2"
//               >
//                 Edit
//               </button>

//               <button
//                 onClick={() =>
//                   onDelete(material.id)
//                 }
//                 className="bg-red-600 px-3 py-1 rounded"
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default MaterialTable;
// interface Props {
//   materials: any[];
//   onDelete: (id: number) => void;
//   onEdit: (material: any) => void;
// }

// function MaterialTable({
//   materials,
//   onDelete,
//   onEdit,
// }: Props) {
//   return (
//     <div
//       className="
//       bg-[#1f2937]
//       border
//       border-gray-700
//       rounded-xl
//       overflow-hidden
//       shadow-lg
//       "
//     >

//       <table className="w-full text-sm">

//         <thead className="bg-[#111827]">

//           <tr>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Material Name
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Category
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Quantity
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Unit
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Supplier
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Description
//             </th>

//             <th className="px-4 py-3 text-center border-b border-gray-700">
//               Actions
//             </th>

//           </tr>

//         </thead>

//         <tbody>

//           {materials.length === 0 ? (

//             <tr>

//               <td
//                 colSpan={7}
//                 className="
//                 text-center
//                 py-8
//                 text-gray-400
//                 "
//               >
//                 No Materials Found
//               </td>

//             </tr>

//           ) : (

//             materials.map(
//               (material) => (

//                 <tr
//                   key={material.id}
//                   className="
//                   border-b
//                   border-gray-800
//                   hover:bg-gray-800
//                   transition
//                   "
//                 >

//                   <td className="px-4 py-3">
//                     {material.name}
//                   </td>

//                   <td className="px-4 py-3">
//                     {material.category}
//                   </td>

//                   <td className="px-4 py-3">
//                     {material.quantity}
//                   </td>

//                   <td className="px-4 py-3">
//                     {material.unit}
//                   </td>

//                   <td className="px-4 py-3">
//                     {material.supplier}
//                   </td>

//                   <td className="px-4 py-3">
//                     {material.description}
//                   </td>

//                   <td className="px-4 py-3">

//                     <div className="flex justify-center gap-2">

//                       <button
//                         onClick={() =>
//                           onEdit(
//                             material
//                           )
//                         }
//                         className="
//                         bg-green-600
//                         hover:bg-green-700
//                         px-3
//                         py-1
//                         rounded
//                         "
//                       >
//                         Edit
//                       </button>

//                       <button
//                         onClick={() =>
//                           onDelete(
//                             material.id
//                           )
//                         }
//                         className="
//                         bg-red-600
//                         hover:bg-red-700
//                         px-3
//                         py-1
//                         rounded
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

// export default MaterialTable;
interface Props {

  materials: any[];

  onDelete: (id: number) => void;

  onEdit: (material: any) => void;

}

function MaterialTable({

  materials,

  onDelete,

  onEdit,

}: Props) {

  return (

    <div
      className="
      bg-[#1f2937]
      border
      border-gray-700
      rounded-xl
      overflow-hidden
      shadow-lg
      "
    >

      <table className="w-full text-sm">

        <thead className="bg-[#111827]">

          <tr>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Material Code
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Material Name
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Category
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Current Stock
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Min Stock
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Unit
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Unit Price
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Description
            </th>

            <th className="px-4 py-3 text-center border-b border-gray-700">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {materials.length === 0 ? (

            <tr>

              <td
                colSpan={9}
                className="
                text-center
                py-8
                text-gray-400
                "
              >
                No Materials Found
              </td>

            </tr>

          ) : (

            materials.map((material) => (

              <tr
                key={material.materialId}
                className="
                border-b
                border-gray-800
                hover:bg-gray-800
                transition
                "
              >

                <td className="px-4 py-3">
                  {material.materialCode}
                </td>

                <td className="px-4 py-3">
                  {material.materialName}
                </td>

                <td className="px-4 py-3">
                  {material.category}
                </td>

                <td className="px-4 py-3">
                  {material.currentStock}
                </td>

                <td className="px-4 py-3">
                  {material.minimumStock}
                </td>

                <td className="px-4 py-3">
                  {material.unit}
                </td>

                <td className="px-4 py-3">
                  ₹{material.unitPrice}
                </td>

                <td className="px-4 py-3">
                  {material.description}
                </td>

                <td className="px-4 py-3">

                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() =>
                        onEdit(material)
                      }
                      className="
                      bg-green-600
                      hover:bg-green-700
                      px-3
                      py-1
                      rounded
                      "
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        onDelete(
                          material.materialId
                        )
                      }
                      className="
                      bg-red-600
                      hover:bg-red-700
                      px-3
                      py-1
                      rounded
                      "
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}

export default MaterialTable;