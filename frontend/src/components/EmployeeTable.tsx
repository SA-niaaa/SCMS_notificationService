// interface Props {
//   employees: any[];
//   onDelete: (id: number) => void;
//   onEdit: (employee: any) => void;
// }

// function EmployeeTable({
//   employees,
//   onDelete,
//   onEdit,
// }: Props) {
//   return (
//     <table className="w-full">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Department</th>
//           <th>Salary</th>
//           <th>Actions</th>
//         </tr>
//       </thead>

//       <tbody>
//         {employees.map((employee) => (
//           <tr key={employee.id}>
//             <td>{employee.name}</td>
//             <td>{employee.email}</td>
//             <td>{employee.department}</td>
//             <td>{employee.salary}</td>

//             <td>
//               <button
//                 onClick={() =>
//                   onEdit(employee)
//                 }
//                 className="bg-blue-600 px-3 py-1 rounded mr-2"
//               >
//                 Edit
//               </button>

//               <button
//                 onClick={() =>
//                   onDelete(employee.id)
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

// export default EmployeeTable;
// function EmployeeTable({
//   employees,
//   onDelete,
//   onEdit,
// }: any) {
//   return (
//     <div className="bg-gray-900 rounded-xl overflow-hidden">

//       <table className="w-full">

//         <thead>
//           <tr className="border-b border-gray-700">

//             <th className="text-left p-3">
//               Name
//             </th>

//             <th className="text-left p-3">
//               Email
//             </th>

//             <th className="text-left p-3">
//               Department
//             </th>

//             <th className="text-left p-3">
//               Salary
//             </th>

//             <th className="text-left p-3">
//               Actions
//             </th>

//           </tr>
//         </thead>

//         <tbody>

//           {employees.map(
//             (employee: any) => (
//               <tr
//                 key={employee.id}
//                 className="border-b border-gray-800"
//               >

//                 <td className="p-3">
//                   {employee.name}
//                 </td>

//                 <td className="p-3">
//                   {employee.email}
//                 </td>

//                 <td className="p-3">
//                   {employee.department}
//                 </td>

//                 <td className="p-3">
//                   {employee.salary}
//                 </td>

//                 <td className="p-3 flex gap-2">

//                   <button
//                     onClick={() =>
//                       onEdit(employee)
//                     }
//                     className="bg-blue-600 px-3 py-1 rounded"
//                   >
//                     Edit
//                   </button>

//                   <button
//                     onClick={() =>
//                       onDelete(employee.id)
//                     }
//                     className="bg-red-600 px-3 py-1 rounded"
//                   >
//                     Delete
//                   </button>

//                 </td>

//               </tr>
//             )
//           )}

//         </tbody>

//       </table>

//     </div>
//   );
// }

// export default EmployeeTable;
// interface Props {
//   employees: any[];
//   onDelete: (id: number) => void;
//   onEdit: (employee: any) => void;
// }

// function EmployeeTable({
//   employees,
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
//               Employee ID
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Name
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Email
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Mobile
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Department
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Designation
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Salary
//             </th>

//             <th className="px-4 py-3 text-left border-b border-gray-700">
//               Joining Date
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

//           {employees.length === 0 ? (

//             <tr>

//               <td
//                 colSpan={10}
//                 className="
//                 text-center
//                 py-8
//                 text-gray-400
//                 "
//               >
//                 No Employees Found
//               </td>

//             </tr>

//           ) : (

//             employees.map(
//               (employee: any) => (

//                 <tr
//                   key={employee.id}
//                   className="
//                   border-b
//                   border-gray-800
//                   hover:bg-gray-800
//                   transition
//                   "
//                 >

//                   <td className="px-4 py-3">
//                     {employee.employeeId}
//                   </td>

//                   <td className="px-4 py-3">
//                     {employee.name}
//                   </td>

//                   <td className="px-4 py-3">
//                     {employee.email}
//                   </td>

//                   <td className="px-4 py-3">
//                     {employee.mobile}
//                   </td>

//                   <td className="px-4 py-3">
//                     {employee.department}
//                   </td>

//                   <td className="px-4 py-3">
//                     {employee.designation}
//                   </td>

//                   <td className="px-4 py-3">
//                     ₹{employee.salary}
//                   </td>

//                   <td className="px-4 py-3">
//                     {employee.joiningDate}
//                   </td>

//                   <td className="px-4 py-3">

//                     <span
//                       className={`px-2 py-1 rounded text-xs ${
//                         employee.status ===
//                         "Active"
//                           ? "bg-green-600"
//                           : "bg-red-600"
//                       }`}
//                     >
//                       {employee.status}
//                     </span>

//                   </td>

//                   <td className="px-4 py-3">

//                     <div className="flex justify-center gap-2">

//                       <button
//                         onClick={() =>
//                           onEdit(employee)
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
//                             employee.id
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

// export default EmployeeTable;
interface Props {
  employees: any[];
  onDelete: (id: number) => void;
  onEdit: (employee: any) => void;
}

function EmployeeTable({
  employees,
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
              Employee Name
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Email
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Phone
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Department
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Designation
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Salary
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Store ID
            </th>

            <th className="px-4 py-3 text-left border-b border-gray-700">
              Status
            </th>

            <th className="px-4 py-3 text-center border-b border-gray-700">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {employees.length === 0 ? (

            <tr>

              <td
                colSpan={10}
                className="
                text-center
                py-8
                text-gray-400
                "
              >
                No Employees Found
              </td>

            </tr>

          ) : (

            employees.map(
              (employee: any) => (

                <tr
                  key={employee.employeeId}
                  className="
                  border-b
                  border-gray-800
                  hover:bg-gray-800
                  transition
                  "
                >

                  <td className="px-4 py-3">
                    {employee.employeeCode}
                  </td>

                  <td className="px-4 py-3">
                    {employee.employeeName}
                  </td>

                  <td className="px-4 py-3">
                    {employee.email}
                  </td>

                  <td className="px-4 py-3">
                    {employee.phone}
                  </td>

                  <td className="px-4 py-3">
                    {employee.department}
                  </td>

                  <td className="px-4 py-3">
                    {employee.designation}
                  </td>

                  <td className="px-4 py-3">
                    ₹{employee.salary}
                  </td>

                  <td className="px-4 py-3">
                    {employee.storeId}
                  </td>

                  <td className="px-4 py-3">

                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        employee.status ===
                        "ACTIVE"
                          ? "bg-green-600"
                          : "bg-red-600"
                      }`}
                    >
                      {employee.status}
                    </span>

                  </td>

                  <td className="px-4 py-3">

                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() =>
                          onEdit(employee)
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
                            employee.employeeId
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

              )
            )

          )}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeTable;