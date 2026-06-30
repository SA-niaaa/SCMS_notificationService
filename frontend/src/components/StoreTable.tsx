// import type { StoreType } from "../types/Store";

// interface Props {
//   stores: StoreType[];
//   onDelete: (id: number) => void;
//   onEdit: (store: StoreType) => void;
// }

// function StoreTable({
//   stores,
//   onDelete,
//   onEdit,
// }: Props) {
//   return (
//     <div className="bg-gray-900 rounded-xl overflow-hidden">

//       <table className="w-full">

//         <thead>

// <tr>

// <th>District</th>

// <th>Sub Division</th>

// <th>Block</th>

// <th>Store Code</th>

// <th>Store Name</th>

// <th>Store Type</th>

// <th>Actions</th>

// </tr>

// </thead>

//         {/* <tbody>

//           {stores.map((store) => (
//             <tr
//               key={store.id}
//               className="border-b border-gray-800"
//             >

//               <td className="p-3">
//                 {store.name}
//               </td>

//               <td className="p-3">
//                 {store.location}
//               </td>

//               <td className="p-3">
//                 {store.capacity}
//               </td>

//               <td className="p-3 flex gap-2">

//                 <button
//                   onClick={() =>
//                     onEdit(store)
//                   }
//                   className="bg-blue-600 px-3 py-1 rounded"
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() =>
//                     onDelete(store.id)
//                   }
//                   className="bg-red-600 px-3 py-1 rounded"
//                 >
//                   Delete
//                 </button>

//               </td>

//             </tr>
//           ))}

//         </tbody> */}
//         <tbody>

// {stores.map((store) => (

// <tr key={store.id}>

// <td>{store.district}</td>

// <td>{store.subdivision}</td>

// <td>{store.block}</td>

// <td>{store.storeCode}</td>

// <td>{store.storeName}</td>

// <td>{store.storeType}</td>

// <td>

// <button>Edit</button>

// <button>Delete</button>

// </td>

// </tr>

// ))}

// </tbody>

//       </table>

//     </div>
//   );
// }

// export default StoreTable;
// import type { StoreType } from "../types/Store";

// interface Props {
//   stores: StoreType[];
//   onDelete: (id: number) => void;
//   onEdit: (store: StoreType) => void;
// }

// function StoreTable({
//   stores,
//   onDelete,
//   onEdit,
// }: Props) {
//   return (
//     <div className="bg-gray-900 rounded-xl overflow-hidden">

//       <table className="w-full">

//         <thead>

//           <tr className="border-b border-gray-800">

//             <th className="p-3 text-left">
//               District
//             </th>

//             <th className="p-3 text-left">
//               Sub Division
//             </th>

//             <th className="p-3 text-left">
//               Block
//             </th>

//             <th className="p-3 text-left">
//               Store Code
//             </th>

//             <th className="p-3 text-left">
//               Store Name
//             </th>

//             <th className="p-3 text-left">
//               Store Type
//             </th>

//             <th className="p-3 text-left">
//               Actions
//             </th>

//           </tr>

//         </thead>

//         <tbody>

//           {stores.map((store) => (

//             <tr
//               key={store.id}
//               className="border-b border-gray-800"
//             >

//               <td className="p-3">
//                 {store.district}
//               </td>

//               <td className="p-3">
//                 {store.subdivision}
//               </td>

//               <td className="p-3">
//                 {store.block}
//               </td>

//               <td className="p-3">
//                 {store.storeCode}
//               </td>

//               <td className="p-3">
//                 {store.storeName}
//               </td>

//               <td className="p-3">
//                 {store.storeType}
//               </td>

//               <td className="p-3 flex gap-2">

//                 <button
//                   onClick={() =>
//                     onEdit(store)
//                   }
//                   className="bg-blue-600 px-3 py-1 rounded"
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() =>
//                     onDelete(store.id)
//                   }
//                   className="bg-red-600 px-3 py-1 rounded"
//                 >
//                   Delete
//                 </button>

//               </td>

//             </tr>

//           ))}

//         </tbody>

//       </table>

//     </div>
//   );
// }

// export default StoreTable;
// import type { StoreType } from "../types/Store";

// interface Props {
//   stores: StoreType[];
//   onDelete: (id: number) => void;
//   onEdit: (store: StoreType) => void;
// }

// function StoreTable({
//   stores,
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
//               District
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Sub Division
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Block
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Store Code
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Store Name
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Store Type
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Incharge
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Capacity
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Status
//             </th>

//             <th className="px-4 py-3 text-center border-b border-gray-700">
//               Actions
//             </th>

//           </tr>

//         </thead>

//         <tbody>

//           {stores.length === 0 ? (

//             <tr>

//               <td
//                 colSpan={10}
//                 className="
//                 text-center
//                 py-8
//                 text-gray-400
//                 "
//               >
//                 No Stores Found
//               </td>

//             </tr>

//           ) : (

//             stores.map((store) => (

//               <tr
//                 key={store.id}
//                 className="
//                 border-b
//                 border-gray-800
//                 hover:bg-gray-800
//                 transition
//                 "
//               >

//                 <td className="px-4 py-3">
//                   {store.district}
//                 </td>

//                 <td className="px-4 py-3">
//                   {store.subdivision}
//                 </td>

//                 <td className="px-4 py-3">
//                   {store.block}
//                 </td>

//                 <td className="px-4 py-3">
//                   {store.storeCode}
//                 </td>

//                 <td className="px-4 py-3">
//                   {store.storeName}
//                 </td>

//                 <td className="px-4 py-3">
//                   {store.storeType}
//                 </td>

//                 <td className="px-4 py-3">
//                   {store.storeIncharge}
//                 </td>

//                 <td className="px-4 py-3">
//                   {store.capacity}
//                 </td>

//                 <td className="px-4 py-3">

//                   <span
//                     className={`px-2 py-1 rounded text-xs ${
//                       store.status ===
//                       "Active"
//                         ? "bg-green-600"
//                         : "bg-red-600"
//                     }`}
//                   >
//                     {store.status}
//                   </span>

//                 </td>

//                 <td className="px-4 py-3">

//                   <div className="flex justify-center gap-2">

//                     <button
//                       onClick={() =>
//                         onEdit(store)
//                       }
//                       className="
//                       bg-green-600
//                       hover:bg-green-700
//                       px-3
//                       py-1
//                       rounded
//                       "
//                     >
//                       Edit
//                     </button>

//                     <button
//                       onClick={() =>
//                         onDelete(store.id)
//                       }
//                       className="
//                       bg-red-600
//                       hover:bg-red-700
//                       px-3
//                       py-1
//                       rounded
//                       "
//                     >
//                       Delete
//                     </button>

//                   </div>

//                 </td>

//               </tr>

//             ))

//           )}

//         </tbody>

//       </table>

//     </div>
//   );
// }

// export default StoreTable;
// import type { StoreType } from "../types/Store";

// interface Props {
//   stores: StoreType[];
//   onDelete: (id: number) => void;
//   onEdit: (store: StoreType) => void;
// }

// function StoreTable({
//   stores,
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

//             <th className="px-4 py-3 text-left">
//               District
//             </th>

//             <th className="px-4 py-3 text-left">
//               Sub Division
//             </th>

//             <th className="px-4 py-3 text-left">
//               Block
//             </th>

//             <th className="px-4 py-3 text-left">
//               Store Code
//             </th>

//             <th className="px-4 py-3 text-left">
//               Store Name
//             </th>

//             <th className="px-4 py-3 text-left">
//               Store Type
//             </th>

//             <th className="px-4 py-3 text-center">
//               Actions
//             </th>

//           </tr>
//         </thead>

//         <tbody>

//           {stores.length === 0 ? (
//             <tr>
//               <td
//                 colSpan={7}
//                 className="text-center py-8 text-gray-400"
//               >
//                 No Stores Found
//               </td>
//             </tr>
//           ) : (
//             stores.map((store) => (
//               <tr
//                 key={store.id}
//                 className="
//                 border-t
//                 border-gray-700
//                 hover:bg-gray-800
//                 "
//               >

//                 <td className="px-4 py-3">
//                   {store.district}
//                 </td>

//                 <td className="px-4 py-3">
//                   {store.subdivision}
//                 </td>

//                 <td className="px-4 py-3">
//                   {store.block}
//                 </td>

//                 <td className="px-4 py-3">
//                   {store.storeCode}
//                 </td>

//                 <td className="px-4 py-3">
//                   {store.storeName}
//                 </td>

//                 <td className="px-4 py-3">
//                   {store.storeType}
//                 </td>

//                 <td className="px-4 py-3">

//                   <div className="flex justify-center gap-2">

//                     <button
//                       onClick={() =>
//                         onEdit(store)
//                       }
//                       className="
//                       bg-green-600
//                       hover:bg-green-700
//                       px-3
//                       py-1
//                       rounded
//                       "
//                     >
//                       Edit
//                     </button>

//                     <button
//                       onClick={() =>
//                         onDelete(store.id)
//                       }
//                       className="
//                       bg-red-600
//                       hover:bg-red-700
//                       px-3
//                       py-1
//                       rounded
//                       "
//                     >
//                       Delete
//                     </button>

//                   </div>

//                 </td>

//               </tr>
//             ))
//           )}

//         </tbody>

//       </table>
//     </div>
//   );
// }

// export default StoreTable;
import type { StoreType } from "../types/Store";

interface Props {
  stores: StoreType[];
  onDelete: (id: number) => void;
  onEdit: (store: StoreType) => void;
}

function StoreTable({
  stores,
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

            <th className="px-4 py-3 text-left">
              Store Code
            </th>

            <th className="px-4 py-3 text-left">
              Store Name
            </th>

            <th className="px-4 py-3 text-left">
              Location
            </th>

            <th className="px-4 py-3 text-left">
              Store Type
            </th>

            <th className="px-4 py-3 text-left">
              Manager
            </th>

            <th className="px-4 py-3 text-left">
              Contact
            </th>

            <th className="px-4 py-3 text-left">
              Status
            </th>

            <th className="px-4 py-3 text-center">
              Actions
            </th>

          </tr>
        </thead>

        <tbody>

          {stores.length === 0 ? (
            <tr>
              <td
                colSpan={8}
                className="text-center py-8 text-gray-400"
              >
                No Stores Found
              </td>
            </tr>
          ) : (
            stores.map((store) => (
              <tr
                key={store.storeId}
                className="
                border-t
                border-gray-700
                hover:bg-gray-800
                "
              >

                <td className="px-4 py-3">
                  {store.storeCode}
                </td>

                <td className="px-4 py-3">
                  {store.storeName}
                </td>

                <td className="px-4 py-3">
                  {store.location}
                </td>

                <td className="px-4 py-3">
                  {store.storeType}
                </td>

                <td className="px-4 py-3">
                  {store.managerName}
                </td>

                <td className="px-4 py-3">
                  {store.contactNumber}
                </td>

                <td className="px-4 py-3">
                  {store.status}
                </td>

                <td className="px-4 py-3">

                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() =>
                        onEdit(store)
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
                          store.storeId
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

export default StoreTable;