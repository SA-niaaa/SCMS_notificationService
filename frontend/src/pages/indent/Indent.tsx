


// // import MainLayout from "../../layouts/MainLayout";
// // // import Indent from "../pages/indent/Indent";

// // function Indent() {

// //     return (

// //         <MainLayout>

// //             <div className="space-y-6">

// //                 <h1 className="text-3xl font-bold">

// //                     Store Dashboard

// //                 </h1>

// //                 {/* Session */}

// //                 <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

// //                     <h2 className="text-xl font-semibold mb-4">

// //                         Current Session Details

// //                     </h2>

// //                     <table className="w-full">

// //                         <tbody>

// //                             <tr>

// //                                 <td className="py-2 font-semibold">

// //                                     User ID

// //                                 </td>

// //                                 <td>

// //                                     1

// //                                 </td>

// //                             </tr>

// //                             <tr>

// //                                 <td className="py-2 font-semibold">

// //                                     Username

// //                                 </td>

// //                                 <td>

// //                                     Admin

// //                                 </td>

// //                             </tr>

// //                             <tr>

// //                                 <td className="py-2 font-semibold">

// //                                     Role

// //                                 </td>

// //                                 <td>

// //                                     System Administrator

// //                                 </td>

// //                             </tr>

// //                         </tbody>

// //                     </table>

// //                 </div>

// //                 {/* Raise Indent */}

// //                 <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

// //                     <h2 className="text-xl font-semibold mb-5">

// //                         Raise Stock Requisition Indent

// //                     </h2>

// //                     <div className="grid grid-cols-2 gap-5">

// //                         <input

// //                             placeholder="Select Item"

// //                             className="bg-black border border-gray-700 rounded p-3"

// //                         />

// //                         <input

// //                             placeholder="Quantity"

// //                             className="bg-black border border-gray-700 rounded p-3"

// //                         />

// //                         <input

// //                             placeholder="Send To"

// //                             className="bg-black border border-gray-700 rounded p-3"

// //                         />

// //                         <select

// //                             className="bg-black border border-gray-700 rounded p-3"

// //                         >

// //                             <option>

// //                                 Normal

// //                             </option>

// //                             <option>

// //                                 High

// //                             </option>

// //                             <option>

// //                                 Urgent

// //                             </option>

// //                         </select>

// //                     </div>

// //                     <button

// //                         className="mt-5 bg-green-600 hover:bg-green-700 px-8 py-3 rounded"

// //                     >

// //                         Send Indent

// //                     </button>

// //                 </div>

// //                 {/* Online Users */}

// //                 <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

// //                     <h2 className="text-xl font-semibold mb-5">

// //                         Online Staff / Stores

// //                     </h2>

// //                     <div className="space-y-3">

// //                         <div className="flex justify-between bg-[#1f2937] rounded p-3">

// //                             <span>

// //                                 🟢 Admin

// //                             </span>

// //                             <span>

// //                                 Online

// //                             </span>

// //                         </div>

// //                         <div className="flex justify-between bg-[#1f2937] rounded p-3">

// //                             <span>

// //                                 🟢 Manager

// //                             </span>

// //                             <span>

// //                                 Online

// //                             </span>

// //                         </div>

// //                     </div>

// //                 </div>

// //                 {/* Incoming Indents */}

// //                 <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

// //                     <h2 className="text-xl font-semibold mb-5">

// //                         My Incoming Indents (Real-Time)

// //                     </h2>

// //                     <div className="bg-[#1f2937] rounded p-4 border-l-4 border-yellow-500">

// //                         <h3 className="font-bold">

// //                             New Indent

// //                         </h3>

// //                         <p>

// //                             Waiting...

// //                         </p>

// //                     </div>

// //                 </div>

// //             </div>

// //         </MainLayout>

// //     );

// // }

// // export default Indent;

// // import { useEffect, useState } from "react";
// // import MainLayout from "../../layouts/MainLayout";

// // import { getCurrentUser } from "../../services/authService";

// // // import {
// // //   connectOnlineUsers,
// // //   disconnectOnlineUsers,
// // //   OnlineUser,
// // // } from "../../services/onlineUserService";
// // import {
// //   connectOnlineUsers,
// //   disconnectOnlineUsers,
// // } from "../../services/onlineUserService";

// // import type {
// //   OnlineUser,
// // } from "../../services/onlineUserService";

// // function Indent() {

// //   const currentUser = getCurrentUser();

// //   const [onlineUsers, setOnlineUsers] =
// //     useState<OnlineUser[]>([]);

// //   useEffect(() => {

// //     connectOnlineUsers(

// //       Number(currentUser.id),

// //       currentUser.name || "",

// //       (users) => {

// //         if (Array.isArray(users)) {

// //           setOnlineUsers(users);

// //         }

// //         else {

// //           const list = Object.entries(users).map(

// //             ([id, name]) => ({

// //               id: Number(id),

// //               name: String(name)

// //             })

// //           );

// //           setOnlineUsers(list);

// //         }

// //       }

// //     );

// //     return () => {

// //       disconnectOnlineUsers();

// //     };

// //   }, []);

// //   return (

// //     <MainLayout>

// //       <div className="space-y-6">

// //         <h1 className="text-3xl font-bold">

// //           Store Dashboard

// //         </h1>

// //         {/* Session */}

// //         <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

// //           <h2 className="text-xl font-semibold mb-4">

// //             Current Session Details

// //           </h2>

// //           <table className="w-full">

// //             <tbody>

// //               <tr>

// //                 <td className="py-2 font-semibold">

// //                   User ID

// //                 </td>

// //                 <td>

// //                   {currentUser.id}

// //                 </td>

// //               </tr>

// //               <tr>

// //                 <td className="py-2 font-semibold">

// //                   Username

// //                 </td>

// //                 <td>

// //                   {currentUser.name}

// //                 </td>

// //               </tr>

// //               <tr>

// //                 <td className="py-2 font-semibold">

// //                   Role

// //                 </td>

// //                 <td>

// //                   {currentUser.role}

// //                 </td>

// //               </tr>

// //             </tbody>

// //           </table>

// //         </div>

// //         {/* Raise Indent */}

// //         <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

// //           <h2 className="text-xl font-semibold mb-5">

// //             Raise Stock Requisition Indent

// //           </h2>

// //           <div className="grid grid-cols-2 gap-5">

// //             <input

// //               placeholder="Select Item"

// //               className="bg-black border border-gray-700 rounded p-3"

// //             />

// //             <input

// //               placeholder="Quantity"

// //               className="bg-black border border-gray-700 rounded p-3"

// //             />

// //             <select

// //               className="bg-black border border-gray-700 rounded p-3"

// //             >

// //               <option>

// //                 Select Online User

// //               </option>

// //               {

// //                 onlineUsers

// //                   .filter(

// //                     user =>

// //                       user.id !==

// //                       Number(currentUser.id)

// //                   )

// //                   .map(

// //                     (user) => (

// //                       <option

// //                         key={user.id}

// //                         value={user.id}

// //                       >

// //                         {user.name}

// //                       </option>

// //                     )

// //                   )

// //               }

// //             </select>

// //             <select

// //               className="bg-black border border-gray-700 rounded p-3"

// //             >

// //               <option>

// //                 Normal

// //               </option>

// //               <option>

// //                 High

// //               </option>

// //               <option>

// //                 Urgent

// //               </option>

// //             </select>

// //           </div>

// //           <button

// //             className="mt-5 bg-green-600 hover:bg-green-700 px-8 py-3 rounded"

// //           >

// //             Send Indent

// //           </button>

// //         </div>

// //         {/* Online Users */}

// //         <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

// //           <h2 className="text-xl font-semibold mb-5">

// //             Online Staff / Stores

// //           </h2>

// //           {

// //             onlineUsers.length === 0 ?

// //             (

// //               <p>

// //                 No Users Online

// //               </p>

// //             )

// //             :

// //             (

// //               <div className="space-y-3">

// //                 {

// //                   onlineUsers.map(

// //                     (user) => (

// //                       <div

// //                         key={user.id}

// //                         className="flex justify-between bg-[#1f2937] rounded p-3"

// //                       >

// //                         <span>

// //                           🟢 {user.name}

// //                         </span>

// //                         <span>

// //                           Online

// //                         </span>

// //                       </div>

// //                     )

// //                   )

// //                 }

// //               </div>

// //             )

// //           }

// //         </div>

// //         {/* Incoming */}

// //         <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

// //           <h2 className="text-xl font-semibold mb-5">

// //             My Incoming Indents (Real-Time)

// //           </h2>

// //           <div className="bg-[#1f2937] rounded p-4 border-l-4 border-yellow-500">

// //             <h3 className="font-bold">

// //               Waiting...

// //             </h3>

// //           </div>

// //         </div>

// //       </div>

// //     </MainLayout>

// //   );

// // }

// // export default Indent;
// import { useEffect, useState } from "react";
// import MainLayout from "../../layouts/MainLayout";

// import { getCurrentUser } from "../../services/authService";

// import {
//   connectOnlineUsers,
//   disconnectOnlineUsers,
// } from "../../services/onlineUserService";

// import type {
//   OnlineUser,
// } from "../../services/onlineUserService";


// import {
//   connectNotification,
//   sendIndent,
//   approveIndent,
//   rejectIndent,
// } from "../../services/notificationService";

// import type {
//   IndentMessage,
// } from "../../services/notificationService";

// // import type {
// //   OnlineUser,
// // } from "../../services/onlineUserService";

// // const [onlineUsers, setOnlineUsers] =
// //   useState<OnlineUser[]>([]);

// function Indent() {

//   const currentUser = getCurrentUser();

//   const medicines = [

//   "Paracetamol 500mg",

//   "Amoxicillin 250mg",

//   "Cetirizine 10mg",

//   "Azithromycin 500mg",

//   "Vitamin C 1000mg",

// ];

//   const [onlineUsers, setOnlineUsers] =
//     useState<OnlineUser[]>([]);
//     useEffect(() => {

//   console.log(
//     "RENDER USERS",
//     onlineUsers
//   );

// }, [onlineUsers]);

//   const [itemName, setItemName] =
//     useState("");

//   const [quantity, setQuantity] =
//     useState("");

//   const [receiverId, setReceiverId] =
//     useState("");

//   const [priority, setPriority] =
//     useState("Normal");

//   const [incomingIndents, setIncomingIndents] =
//     useState<IndentMessage[]>([]);

//     useEffect(() => {

//   console.log(
//     "ONLINE USERS STATE",
//     onlineUsers
//   );

// }, [onlineUsers]);

//   useEffect(() => {

//     connectOnlineUsers(

//       Number(currentUser.id),

//       currentUser.name || "",

// //       (users) => {

// //        if (Array.isArray(users)) {

// //   console.log(
// //     "ARRAY USERS",
// //     users
// //   );

// //   setOnlineUsers(users);

// // }else {

// //           // const list =
// //           //   Object.entries(users).map(

// //           //     ([id, name]) => ({

// //           //       id: Number(id),

// //           //       name: String(name),

// //           //     })

// //           //   );

// //           // setOnlineUsers(list);
// //           const list =
// //   Object.entries(users).map(
// //     ([id, name]) => ({
// //       id: Number(id),
// //       name: String(name),
// //     })
// //   );

// // console.log(
// //   "SETTING USERS",
// //   list
// // );

// // setOnlineUsers(list);

// //         }

// //       }
// (users) => {

//   alert("CALLBACK FIRED");

//   console.log(
//     "CALLBACK USERS",
//     users
//   );

//   if (Array.isArray(users)) {

//     console.log(
//       "ARRAY USERS",
//       users
//     );

//     setOnlineUsers(users);

//   } else {

//     const list =
//       Object.entries(users).map(
//         ([id, name]) => ({
//           id: Number(id),
//           name: String(name),
//         })
//       );

//     console.log(
//       "SETTING USERS",
//       list
//     );

//     setOnlineUsers(list);

//   }

// }

//     );
//     console.log(
//   "CONNECT NOTIFICATION CALLED"
// );

//     connectNotification(

//       Number(currentUser.id),

//       () => {},

// (indent) => {

//   localStorage.setItem(
//     "newIndentNotification",
//     "true"
//   );

//   window.dispatchEvent(
//     new Event("indent-received")
//   );

//   setIncomingIndents(prev => {

//     const exists = prev.find(

//       i =>
//         i.indentId ===
//         indent.indentId

//     );

//     if (exists) {

//       return prev.map(

//         i =>

//           i.indentId ===
//           indent.indentId

//             ? indent

//             : i

//       );

//     }

//     return [

//       indent,

//       ...prev,

//     ];

//   });

// }

//     );

//    return () => {

//   console.log(
//     "INDENT UNMOUNT"
//   );

//   // disconnectOnlineUsers();

// };

//   }, []);
// // useEffect(() => {

// //   console.log(
// //     "CONNECT NOTIFICATION CALLED"
// //   );

// //   connectNotification(

// //     Number(currentUser.id),

// //     () => {},

// //     (indent) => {

// //       localStorage.setItem(
// //         "newIndentNotification",
// //         "true"
// //       );

// //       window.dispatchEvent(
// //         new Event("indent-received")
// //       );

// //       setIncomingIndents(prev => {

// //         const exists = prev.find(
// //           i =>
// //             i.indentId ===
// //             indent.indentId
// //         );

// //         if (exists) {

// //           return prev.map(
// //             i =>
// //               i.indentId ===
// //               indent.indentId
// //                 ? indent
// //                 : i
// //           );

// //         }

// //         return [
// //           indent,
// //           ...prev,
// //         ];

// //       });

// //     }

// //   );

// // }, []);


//   useEffect(() => {

//   localStorage.removeItem(
//     "newIndentNotification"
//   );

//   window.dispatchEvent(
//     new Event("indent-cleared")
//   );

// }, []);

//   const handleSendIndent = () => {

//     if (

//       !itemName ||

//       !quantity ||

//       !receiverId

//     ) {

//       alert(
//         "Fill all fields"
//       );

//       return;

//     }

//     sendIndent({

//   indentId: crypto.randomUUID(),

//   senderId: Number(currentUser.id),

//   senderName: currentUser.name || "",

//   receiverId: Number(receiverId),

//   itemName,

//   quantity: Number(quantity),

//   priority,

//   timestamp: new Date().toLocaleString(),

//   status: "Pending",

// });
    

//     alert(
//       "Indent Sent"
//     );

//     setItemName("");

//     setQuantity("");

//   };


//   const handleApprove = (
//   indent: IndentMessage
// ) => {

//   approveIndent(indent);

//   setIncomingIndents(prev =>
//     prev.map(i =>
//       i.indentId === indent.indentId
//         ? {
//             ...i,
//             status: "Approved",
//           }
//         : i
//     )
//   );

// };

// const handleReject = (
//   indent: IndentMessage
// ) => {

//   rejectIndent(indent);

//   setIncomingIndents(prev =>
//     prev.map(i =>
//       i.indentId === indent.indentId
//         ? {
//             ...i,
//             status: "Rejected",
//           }
//         : i
//     )
//   );

// };

//   return (

//     <MainLayout>

//       <div className="space-y-6">

//         <h1 className="text-3xl font-bold">

//           Store Dashboard

//         </h1>

//         {/* Session */}

//         <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

//           <h2 className="text-xl font-semibold mb-4">

//             Current Session Details

//           </h2>

//           <table className="w-full">

//             <tbody>

//               <tr>

//                 <td className="py-2 font-semibold">

//                   User ID

//                 </td>

//                 <td>

//                   {currentUser.id}

//                 </td>

//               </tr>

//               <tr>

//                 <td className="py-2 font-semibold">

//                   Username

//                 </td>

//                 <td>

//                   {currentUser.name}

//                 </td>

//               </tr>

//               <tr>

//                 <td className="py-2 font-semibold">

//                   Role

//                 </td>

//                 <td>

//                   {currentUser.role}

//                 </td>

//               </tr>

//             </tbody>

//           </table>

//         </div>

//         {/* Raise Indent */}

//         <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

//           <h2 className="text-xl font-semibold mb-5">

//             Raise Stock Requisition Indent

//           </h2>

//           <div className="grid grid-cols-2 gap-5">

//             <input

//   list="medicine-list"

//   value={itemName}

//   onChange={(e) =>

//     setItemName(
//       e.target.value
//     )

//   }

//   placeholder="Select Or Type Medicine"

//   className="
//     bg-black
//     border
//     border-gray-700
//     rounded
//     p-3
//   "

// />

// <datalist id="medicine-list">

//   {

//     medicines.map(

//       (medicine) => (

//         <option
//           key={medicine}
//           value={medicine}
//         />

//       )

//     )

//   }

// </datalist>
//             <input

//               value={quantity}

//               onChange={(e) =>

//                 setQuantity(
//                   e.target.value
//                 )

//               }

//               placeholder="Quantity"

//               className="bg-black border border-gray-700 rounded p-3"

//             />

//             <select

//               value={receiverId}

//               onChange={(e) =>

//                 setReceiverId(
//                   e.target.value
//                 )

//               }

//               className="bg-black border border-gray-700 rounded p-3"

//             >

//               <option value="">

//                 Select Online User

//               </option>

//               {

//                 onlineUsers

//                   .filter(

//                     (user) =>

//                       user.id !==

//                       Number(
//                         currentUser.id
//                       )

//                   )

//                   .map(

//                     (user) => (

//                       <option

//                         key={user.id}

//                         value={user.id}

//                       >

//                         {user.name}

//                       </option>

//                     )

//                   )

//               }

//             </select>

//             <select

//               value={priority}

//               onChange={(e) =>

//                 setPriority(
//                   e.target.value
//                 )

//               }

//               className="bg-black border border-gray-700 rounded p-3"

//             >

//               <option>

//                 Normal

//               </option>

//               <option>

//                 High

//               </option>

//               <option>

//                 Urgent

//               </option>

//             </select>

//           </div>

//           <button

//             onClick={
//               handleSendIndent
//             }

//             className="mt-5 bg-green-600 hover:bg-green-700 px-8 py-3 rounded"

//           >

//             Send Indent

//           </button>

//         </div>

//         {/* Online Users */}

//         <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

//           <h2 className="text-xl font-semibold mb-5">

//             Online Staff / Stores

//           </h2>

//           {

//             onlineUsers.length === 0 ?

//             (

//               <p>

//                 No Users Online

//               </p>

//             )

//             :

//             (

//               <div className="space-y-3">

//                 {

//                   onlineUsers.map(

//                     (user) => (

//                       <div

//                         key={user.id}

//                         className="flex justify-between bg-[#1f2937] rounded p-3"

//                       >

//                         <span>

//                           🟢 {user.name}

//                         </span>

//                         <span>

//                           Online

//                         </span>

//                       </div>

//                     )

//                   )

//                 }

//               </div>

//             )

//           }

//         </div>

//         {/* Incoming Indents */}

//         <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

//           <h2 className="text-xl font-semibold mb-5">

//             My Incoming Indents (Real-Time)

//           </h2>

//           {

//             incomingIndents.length === 0 ?

//             (

//               <div className="bg-[#1f2937] rounded p-4 border-l-4 border-yellow-500">

//                 <h3 className="font-bold">

//                   Waiting...

//                 </h3>

//               </div>

//             )

//             :

//             (

//               incomingIndents.map(

//                 (indent, index) => (

//                   <div

//                     key={indent.indentId}

//                     className="bg-[#1f2937] rounded p-4 border-l-4 border-green-500 mb-3"

//                   >

//                     <h3 className="font-bold">

//                       New Indent From {indent.senderName}

//                     </h3>

//                     <p>

//                       Item : {indent.itemName}

//                     </p>

//                     <p>

//                       Quantity : {indent.quantity}

//                     </p>

//                     <p>

//                       Priority : {indent.priority}

//                     </p>

//                     {/* <p>
//   Time : {indent.timestamp}
// </p> */}

// <p>
//   Time : {indent.timestamp}
// </p>


// <p
//   className={
//     indent.status === "Approved"
//       ? "text-green-400 font-bold"
//       : indent.status === "Rejected"
//       ? "text-red-400 font-bold"
//       : "text-yellow-400 font-bold"
//   }
// >
//   Status : {indent.status}
// </p>

// {
//   indent.status === "Pending" && (

//     <div className="flex gap-3 mt-3">

//       <button
//         onClick={() =>
//           handleApprove(indent)
//         }
//         className="bg-green-600 px-4 py-2 rounded"
//       >
//         Accept
//       </button>

//       <button
//         onClick={() =>
//           handleReject(indent)
//         }
//         className="bg-red-600 px-4 py-2 rounded"
//       >
//         Reject
//       </button>

//     </div>

//   )
// }

//                   </div>

//                 )

//               )

//             )

//           }

//         </div>

//       </div>

//     </MainLayout>

//   );

// }

// export default Indent;



// import MainLayout from "../../layouts/MainLayout";
// // import Indent from "../pages/indent/Indent";

// function Indent() {

//     return (

//         <MainLayout>

//             <div className="space-y-6">

//                 <h1 className="text-3xl font-bold">

//                     Store Dashboard

//                 </h1>

//                 {/* Session */}

//                 <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

//                     <h2 className="text-xl font-semibold mb-4">

//                         Current Session Details

//                     </h2>

//                     <table className="w-full">

//                         <tbody>

//                             <tr>

//                                 <td className="py-2 font-semibold">

//                                     User ID

//                                 </td>

//                                 <td>

//                                     1

//                                 </td>

//                             </tr>

//                             <tr>

//                                 <td className="py-2 font-semibold">

//                                     Username

//                                 </td>

//                                 <td>

//                                     Admin

//                                 </td>

//                             </tr>

//                             <tr>

//                                 <td className="py-2 font-semibold">

//                                     Role

//                                 </td>

//                                 <td>

//                                     System Administrator

//                                 </td>

//                             </tr>

//                         </tbody>

//                     </table>

//                 </div>

//                 {/* Raise Indent */}

//                 <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

//                     <h2 className="text-xl font-semibold mb-5">

//                         Raise Stock Requisition Indent

//                     </h2>

//                     <div className="grid grid-cols-2 gap-5">

//                         <input

//                             placeholder="Select Item"

//                             className="bg-black border border-gray-700 rounded p-3"

//                         />

//                         <input

//                             placeholder="Quantity"

//                             className="bg-black border border-gray-700 rounded p-3"

//                         />

//                         <input

//                             placeholder="Send To"

//                             className="bg-black border border-gray-700 rounded p-3"

//                         />

//                         <select

//                             className="bg-black border border-gray-700 rounded p-3"

//                         >

//                             <option>

//                                 Normal

//                             </option>

//                             <option>

//                                 High

//                             </option>

//                             <option>

//                                 Urgent

//                             </option>

//                         </select>

//                     </div>

//                     <button

//                         className="mt-5 bg-green-600 hover:bg-green-700 px-8 py-3 rounded"

//                     >

//                         Send Indent

//                     </button>

//                 </div>

//                 {/* Online Users */}

//                 <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

//                     <h2 className="text-xl font-semibold mb-5">

//                         Online Staff / Stores

//                     </h2>

//                     <div className="space-y-3">

//                         <div className="flex justify-between bg-[#1f2937] rounded p-3">

//                             <span>

//                                 🟢 Admin

//                             </span>

//                             <span>

//                                 Online

//                             </span>

//                         </div>

//                         <div className="flex justify-between bg-[#1f2937] rounded p-3">

//                             <span>

//                                 🟢 Manager

//                             </span>

//                             <span>

//                                 Online

//                             </span>

//                         </div>

//                     </div>

//                 </div>

//                 {/* Incoming Indents */}

//                 <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

//                     <h2 className="text-xl font-semibold mb-5">

//                         My Incoming Indents (Real-Time)

//                     </h2>

//                     <div className="bg-[#1f2937] rounded p-4 border-l-4 border-yellow-500">

//                         <h3 className="font-bold">

//                             New Indent

//                         </h3>

//                         <p>

//                             Waiting...

//                         </p>

//                     </div>

//                 </div>

//             </div>

//         </MainLayout>

//     );

// }

// export default Indent;

// import { useEffect, useState } from "react";
// import MainLayout from "../../layouts/MainLayout";

// import { getCurrentUser } from "../../services/authService";

// // import {
// //   connectOnlineUsers,
// //   disconnectOnlineUsers,
// //   OnlineUser,
// // } from "../../services/onlineUserService";
// import {
//   connectOnlineUsers,
//   disconnectOnlineUsers,
// } from "../../services/onlineUserService";

// import type {
//   OnlineUser,
// } from "../../services/onlineUserService";

// function Indent() {

//   const currentUser = getCurrentUser();

//   const [onlineUsers, setOnlineUsers] =
//     useState<OnlineUser[]>([]);

//   useEffect(() => {

//     connectOnlineUsers(

//       Number(currentUser.id),

//       currentUser.name || "",

//       (users) => {

//         if (Array.isArray(users)) {

//           setOnlineUsers(users);

//         }

//         else {

//           const list = Object.entries(users).map(

//             ([id, name]) => ({

//               id: Number(id),

//               name: String(name)

//             })

//           );

//           setOnlineUsers(list);

//         }

//       }

//     );

//     return () => {

//       disconnectOnlineUsers();

//     };

//   }, []);

//   return (

//     <MainLayout>

//       <div className="space-y-6">

//         <h1 className="text-3xl font-bold">

//           Store Dashboard

//         </h1>

//         {/* Session */}

//         <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

//           <h2 className="text-xl font-semibold mb-4">

//             Current Session Details

//           </h2>

//           <table className="w-full">

//             <tbody>

//               <tr>

//                 <td className="py-2 font-semibold">

//                   User ID

//                 </td>

//                 <td>

//                   {currentUser.id}

//                 </td>

//               </tr>

//               <tr>

//                 <td className="py-2 font-semibold">

//                   Username

//                 </td>

//                 <td>

//                   {currentUser.name}

//                 </td>

//               </tr>

//               <tr>

//                 <td className="py-2 font-semibold">

//                   Role

//                 </td>

//                 <td>

//                   {currentUser.role}

//                 </td>

//               </tr>

//             </tbody>

//           </table>

//         </div>

//         {/* Raise Indent */}

//         <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

//           <h2 className="text-xl font-semibold mb-5">

//             Raise Stock Requisition Indent

//           </h2>

//           <div className="grid grid-cols-2 gap-5">

//             <input

//               placeholder="Select Item"

//               className="bg-black border border-gray-700 rounded p-3"

//             />

//             <input

//               placeholder="Quantity"

//               className="bg-black border border-gray-700 rounded p-3"

//             />

//             <select

//               className="bg-black border border-gray-700 rounded p-3"

//             >

//               <option>

//                 Select Online User

//               </option>

//               {

//                 onlineUsers

//                   .filter(

//                     user =>

//                       user.id !==

//                       Number(currentUser.id)

//                   )

//                   .map(

//                     (user) => (

//                       <option

//                         key={user.id}

//                         value={user.id}

//                       >

//                         {user.name}

//                       </option>

//                     )

//                   )

//               }

//             </select>

//             <select

//               className="bg-black border border-gray-700 rounded p-3"

//             >

//               <option>

//                 Normal

//               </option>

//               <option>

//                 High

//               </option>

//               <option>

//                 Urgent

//               </option>

//             </select>

//           </div>

//           <button

//             className="mt-5 bg-green-600 hover:bg-green-700 px-8 py-3 rounded"

//           >

//             Send Indent

//           </button>

//         </div>

//         {/* Online Users */}

//         <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

//           <h2 className="text-xl font-semibold mb-5">

//             Online Staff / Stores

//           </h2>

//           {

//             onlineUsers.length === 0 ?

//             (

//               <p>

//                 No Users Online

//               </p>

//             )

//             :

//             (

//               <div className="space-y-3">

//                 {

//                   onlineUsers.map(

//                     (user) => (

//                       <div

//                         key={user.id}

//                         className="flex justify-between bg-[#1f2937] rounded p-3"

//                       >

//                         <span>

//                           🟢 {user.name}

//                         </span>

//                         <span>

//                           Online

//                         </span>

//                       </div>

//                     )

//                   )

//                 }

//               </div>

//             )

//           }

//         </div>

//         {/* Incoming */}

//         <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

//           <h2 className="text-xl font-semibold mb-5">

//             My Incoming Indents (Real-Time)

//           </h2>

//           <div className="bg-[#1f2937] rounded p-4 border-l-4 border-yellow-500">

//             <h3 className="font-bold">

//               Waiting...

//             </h3>

//           </div>

//         </div>

//       </div>

//     </MainLayout>

//   );

// }

// export default Indent;
import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";

import { getCurrentUser } from "../../services/authService";

import {
  connectOnlineUsers,
  disconnectOnlineUsers,
} from "../../services/onlineUserService";

import type {
  OnlineUser,
} from "../../services/onlineUserService";

// import {
//   connectNotification,
//   sendIndent,
// } from "../../services/notificationService";
import {
  connectNotification,
  sendIndent,
  approveIndent,
  rejectIndent,
} from "../../services/notificationService";

import type {
  IndentMessage,
} from "../../services/notificationService";

function Indent() {

  const currentUser = getCurrentUser();

  const medicines = [

  "Paracetamol 500mg",

  "Amoxicillin 250mg",

  "Cetirizine 10mg",

  "Azithromycin 500mg",

  "Vitamin C 1000mg",

];

  const [onlineUsers, setOnlineUsers] =
    useState<OnlineUser[]>([]);

  const [itemName, setItemName] =
    useState("");

  const [quantity, setQuantity] =
    useState("");

  const [receiverId, setReceiverId] =
    useState("");

  const [priority, setPriority] =
    useState("Normal");

  const [incomingIndents, setIncomingIndents] =
    useState<IndentMessage[]>([]);

  useEffect(() => {

    connectOnlineUsers(

      Number(currentUser.id),

      currentUser.name || "",

      (users) => {

        if (Array.isArray(users)) {

          setOnlineUsers(users);

        } else {

          const list =
            Object.entries(users).map(

              ([id, name]) => ({

                id: Number(id),

                name: String(name),

              })

            );

          setOnlineUsers(list);

        }

      }

    );
    console.log(
  "CONNECT NOTIFICATION CALLED"
);

    connectNotification(

      Number(currentUser.id),

      () => {},

    //   (indent) => {

    //     setIncomingIndents(

    //       (prev) => [

    //         indent,

    //         ...prev,

    //       ]

    //     );

    //   }
//     (indent) => {

//   setIncomingIndents(prev => {
(indent) => {

  localStorage.setItem(
    "newIndentNotification",
    "true"
  );

  window.dispatchEvent(
    new Event("indent-received")
  );

  setIncomingIndents(prev => {

    const exists = prev.find(

      i =>
        i.indentId ===
        indent.indentId

    );

    if (exists) {

      return prev.map(

        i =>

          i.indentId ===
          indent.indentId

            ? indent

            : i

      );

    }

    return [

      indent,

      ...prev,

    ];

  });

}

    );

    return () => {

      disconnectOnlineUsers();

    };

  }, []);


  useEffect(() => {

  localStorage.removeItem(
    "newIndentNotification"
  );

  window.dispatchEvent(
    new Event("indent-cleared")
  );

}, []);

  const handleSendIndent = () => {

    if (

      !itemName ||

      !quantity ||

      !receiverId

    ) {

      alert(
        "Fill all fields"
      );

      return;

    }

    sendIndent({

  indentId: crypto.randomUUID(),

  senderId: Number(currentUser.id),

  senderName: currentUser.name || "",

  receiverId: Number(receiverId),

  itemName,

  quantity: Number(quantity),

  priority,

  timestamp: new Date().toLocaleString(),

  status: "Pending",

});
    

    alert(
      "Indent Sent"
    );

    setItemName("");

    setQuantity("");

  };


  const handleApprove = (
  indent: IndentMessage
) => {

  approveIndent(indent);

  setIncomingIndents(prev =>
    prev.map(i =>
      i.indentId === indent.indentId
        ? {
            ...i,
            status: "Approved",
          }
        : i
    )
  );

};

const handleReject = (
  indent: IndentMessage
) => {

  rejectIndent(indent);

  setIncomingIndents(prev =>
    prev.map(i =>
      i.indentId === indent.indentId
        ? {
            ...i,
            status: "Rejected",
          }
        : i
    )
  );

};

  return (

    <MainLayout>

      <div className="space-y-6">

        <h1 className="text-3xl font-bold">

          Store Dashboard

        </h1>

        {/* Session */}

        <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

          <h2 className="text-xl font-semibold mb-4">

            Current Session Details

          </h2>

          <table className="w-full">

            <tbody>

              <tr>

                <td className="py-2 font-semibold">

                  User ID

                </td>

                <td>

                  {currentUser.id}

                </td>

              </tr>

              <tr>

                <td className="py-2 font-semibold">

                  Username

                </td>

                <td>

                  {currentUser.name}

                </td>

              </tr>

              <tr>

                <td className="py-2 font-semibold">

                  Role

                </td>

                <td>

                  {currentUser.role}

                </td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* Raise Indent */}

        <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

          <h2 className="text-xl font-semibold mb-5">

            Raise Stock Requisition Indent

          </h2>

          <div className="grid grid-cols-2 gap-5">

            <input

  list="medicine-list"

  value={itemName}

  onChange={(e) =>

    setItemName(
      e.target.value
    )

  }

  placeholder="Select Or Type Medicine"

  className="
    bg-black
    border
    border-gray-700
    rounded
    p-3
  "

/>

<datalist id="medicine-list">

  {

    medicines.map(

      (medicine) => (

        <option
          key={medicine}
          value={medicine}
        />

      )

    )

  }

</datalist>
            <input

              value={quantity}

              onChange={(e) =>

                setQuantity(
                  e.target.value
                )

              }

              placeholder="Quantity"

              className="bg-black border border-gray-700 rounded p-3"

            />

            <select

              value={receiverId}

              onChange={(e) =>

                setReceiverId(
                  e.target.value
                )

              }

              className="bg-black border border-gray-700 rounded p-3"

            >

              <option value="">

                Select Online User

              </option>

              {

                onlineUsers

                  .filter(

                    (user) =>

                      user.id !==

                      Number(
                        currentUser.id
                      )

                  )

                  .map(

                    (user) => (

                      <option

                        key={user.id}

                        value={user.id}

                      >

                        {user.name}

                      </option>

                    )

                  )

              }

            </select>

            <select

              value={priority}

              onChange={(e) =>

                setPriority(
                  e.target.value
                )

              }

              className="bg-black border border-gray-700 rounded p-3"

            >

              <option>

                Normal

              </option>

              <option>

                High

              </option>

              <option>

                Urgent

              </option>

            </select>

          </div>

          <button

            onClick={
              handleSendIndent
            }

            className="mt-5 bg-green-600 hover:bg-green-700 px-8 py-3 rounded"

          >

            Send Indent

          </button>

        </div>

        {/* Online Users */}

        <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

          <h2 className="text-xl font-semibold mb-5">

            Online Staff / Stores

          </h2>

          {

            onlineUsers.length === 0 ?

            (

              <p>

                No Users Online

              </p>

            )

            :

            (

              <div className="space-y-3">

                {

                  onlineUsers.map(

                    (user) => (

                      <div

                        key={user.id}

                        className="flex justify-between bg-[#1f2937] rounded p-3"

                      >

                        <span>

                          🟢 {user.name}

                        </span>

                        <span>

                          Online

                        </span>

                      </div>

                    )

                  )

                }

              </div>

            )

          }

        </div>

        {/* Incoming Indents */}

        <div className="bg-[#111827] border border-gray-700 rounded-lg p-5">

          <h2 className="text-xl font-semibold mb-5">

            My Incoming Indents (Real-Time)

          </h2>

          {

            incomingIndents.length === 0 ?

            (

              <div className="bg-[#1f2937] rounded p-4 border-l-4 border-yellow-500">

                <h3 className="font-bold">

                  Waiting...

                </h3>

              </div>

            )

            :

            (

              incomingIndents.map(

                (indent, index) => (

                  <div

                    key={indent.indentId}

                    className="bg-[#1f2937] rounded p-4 border-l-4 border-green-500 mb-3"

                  >

                    <h3 className="font-bold">

                      New Indent From {indent.senderName}

                    </h3>

                    <p>

                      Item : {indent.itemName}

                    </p>

                    <p>

                      Quantity : {indent.quantity}

                    </p>

                    <p>

                      Priority : {indent.priority}

                    </p>

                    {/* <p>
  Time : {indent.timestamp}
</p> */}

<p>
  Time : {indent.timestamp}
</p>

{/* <p
  className={
    indent.status === "Approved"
      ? "text-green-400 font-bold"
      : indent.status === "Rejected"
      ? "text-red-400 font-bold"
      : "text-yellow-400 font-bold"
  }
>
  Status : {indent.status}
</p>

{
  indent.status === "Pending" && (
    <div className="flex gap-3 mt-3">

      <button
        onClick={() =>
          handleApprove(indent)
        }
        className="bg-green-600 px-4 py-2 rounded"
      >
        Accept
      </button>

      <button
        onClick={() =>
          handleReject(indent)
        }
        className="bg-red-600 px-4 py-2 rounded"
      >
        Reject
      </button>

    </div>
  )
} */}

{/* <p
  className={
    indent.status === "Approved"
      ? "text-green-400"
      : indent.status === "Rejected"
      ? "text-red-400"
      : "text-yellow-400"
  }
>
  Status : {indent.status}
</p>

<div className="flex gap-3 mt-3">

  <button

    onClick={() => {

      const updated =
        [...incomingIndents];

      updated[index] = {

        ...updated[index],

        status: "Approved",

      };

      setIncomingIndents(
        updated
      );

    }}

    className="
      bg-green-600
      hover:bg-green-700
      px-4
      py-2
      rounded
    "

  >

    Accept

  </button>

  <button

    onClick={() => {

      const updated =
        [...incomingIndents];

      updated[index] = {

        ...updated[index],

        status: "Rejected",

      };

      setIncomingIndents(
        updated
      );

    }}

    className="
      bg-red-600
      hover:bg-red-700
      px-4
      py-2
      rounded
    "

  >

    Reject

  </button>

</div> */}
<p
  className={
    indent.status === "Approved"
      ? "text-green-400 font-bold"
      : indent.status === "Rejected"
      ? "text-red-400 font-bold"
      : "text-yellow-400 font-bold"
  }
>
  Status : {indent.status}
</p>

{
  indent.status === "Pending" && (

    <div className="flex gap-3 mt-3">

      <button
        onClick={() =>
          handleApprove(indent)
        }
        className="bg-green-600 px-4 py-2 rounded"
      >
        Accept
      </button>

      <button
        onClick={() =>
          handleReject(indent)
        }
        className="bg-red-600 px-4 py-2 rounded"
      >
        Reject
      </button>

    </div>

  )
}

                  </div>

                )

              )

            )

          }

        </div>

      </div>

    </MainLayout>

  );

}

export default Indent;