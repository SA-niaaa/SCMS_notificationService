// interface Props {
//   manufacturers: any[];
//   onDelete: (id: number) => void;
//   onEdit: (manufacturer: any) => void;
// }

// function ManufacturerTable({
//   manufacturers,
//   onDelete,
//   onEdit,
// }: Props) {
//   return (
//     <table className="w-full">
//       <thead>
//         <tr className="border-b border-gray-700 text-left">
//           <th className="p-3">Name</th>
//           <th className="p-3">Location</th>
//           <th className="p-3">Contact</th>
//           <th className="p-3">Actions</th>
//         </tr>
//       </thead>

//       <tbody>
//         {manufacturers.map((manufacturer) => (
//           <tr
//             key={manufacturer.id}
//             className="border-b border-gray-800"
//           >
//             <td className="p-3">
//               {manufacturer.name}
//             </td>

//             <td className="p-3">
//               {manufacturer.location}
//             </td>

//             <td className="p-3">
//               {manufacturer.contact}
//             </td>

//             <td className="p-3">
//               <button
//                 onClick={() =>
//                   onEdit(manufacturer)
//                 }
//                 className="bg-blue-600 px-3 py-1 rounded mr-2"
//               >
//                 Edit
//               </button>

//               <button
//                 onClick={() =>
//                   onDelete(manufacturer.id)
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

// export default ManufacturerTable;
// interface Props {
//   manufacturers: any[];
//   onDelete: (id: number) => void;
//   onEdit: (manufacturer: any) => void;
// }

// function ManufacturerTable({
//   manufacturers,
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
//               Manufacturer Name
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Location
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Contact
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Email
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               GST No
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Production Type
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

//           {manufacturers.length === 0 ? (

//             <tr>

//               <td
//                 colSpan={8}
//                 className="
//                 text-center
//                 py-8
//                 text-gray-400
//                 "
//               >
//                 No Manufacturers Found
//               </td>

//             </tr>

//           ) : (

//             manufacturers.map(
//               (manufacturer) => (

//                 <tr
//                   key={manufacturer.id}
//                   className="
//                   border-b
//                   border-gray-800
//                   hover:bg-gray-800
//                   transition
//                   "
//                 >

//                   <td className="px-4 py-3">
//                     {manufacturer.name}
//                   </td>

//                   <td className="px-4 py-3">
//                     {manufacturer.location}
//                   </td>

//                   <td className="px-4 py-3">
//                     {manufacturer.contact}
//                   </td>

//                   <td className="px-4 py-3">
//                     {manufacturer.email}
//                   </td>

//                   <td className="px-4 py-3">
//                     {manufacturer.gstNo}
//                   </td>

//                   <td className="px-4 py-3">
//                     {manufacturer.productionType}
//                   </td>

//                   <td className="px-4 py-3">
//                     {manufacturer.description}
//                   </td>

//                   <td className="px-4 py-3">

//                     <div className="flex justify-center gap-2">

//                       <button
//                         onClick={() =>
//                           onEdit(
//                             manufacturer
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
//                             manufacturer.id
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

// export default ManufacturerTable;
interface Props {
  manufacturers: any[];
  onDelete: (id: number) => void;
  onEdit: (manufacturer: any) => void;
}

function ManufacturerTable({
  manufacturers,
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
              Code
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Manufacturer Name
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Contact Person
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Phone
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Email
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Address
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Website
            </th>

            <th className="px-4 py-3 text-center border-b border-gray-700">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {manufacturers.length === 0 ? (
            <tr>
              <td
                colSpan={8}
                className="
                text-center
                py-8
                text-gray-400
                "
              >
                No Manufacturers Found
              </td>
            </tr>
          ) : (
            manufacturers.map((manufacturer) => (
              <tr
                key={manufacturer.manufacturerId}
                className="
                border-b
                border-gray-800
                hover:bg-gray-800
                transition
                "
              >
                <td className="px-4 py-3">
                  {manufacturer.manufacturerCode}
                </td>

                <td className="px-4 py-3">
                  {manufacturer.manufacturerName}
                </td>

                <td className="px-4 py-3">
                  {manufacturer.contactPerson}
                </td>

                <td className="px-4 py-3">
                  {manufacturer.phone}
                </td>

                <td className="px-4 py-3">
                  {manufacturer.email}
                </td>

                <td className="px-4 py-3">
                  {manufacturer.address}
                </td>

                <td className="px-4 py-3">
                  {manufacturer.website}
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() =>
                        onEdit(manufacturer)
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
                          manufacturer.manufacturerId
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

export default ManufacturerTable;