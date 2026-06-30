// import { Link } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div
//       style={{
//         width: "220px",
//         height: "100vh",
//         background: "#1e293b",
//         color: "white",
//         padding: "20px",
//       }}
//     >
//       <h2>SCMS</h2>

//       <ul style={{ listStyle: "none", padding: 0 }}>
//         <li><Link to="/dashboard">Dashboard</Link></li>
//         <li><Link to="/manufacturer">Manufacturer</Link></li>
//         <li><Link to="/supplier">Supplier</Link></li>
//         <li><Link to="/material">Material</Link></li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;
// import { Link } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div className="w-64 h-screen bg-slate-900 text-white p-5">

//       <h1 className="text-2xl font-bold mb-8">
//         SCMS
//       </h1>

//       <nav className="flex flex-col gap-4">

//         <Link
//           to="/dashboard"
//           className="hover:bg-slate-700 p-2 rounded"
//         >
//           Dashboard
//         </Link>

//         <Link
//           to="/manufacturer"
//           className="hover:bg-slate-700 p-2 rounded"
//         >
//           Manufacturer
//         </Link>

//         <Link
//           to="/supplier"
//           className="hover:bg-slate-700 p-2 rounded"
//         >
//           Supplier
//         </Link>

//         <Link
//           to="/material"
//           className="hover:bg-slate-700 p-2 rounded"
//         >
//           Material
//         </Link>

//       </nav>
//     </div>
//   );
// }

// export default Sidebar;
// import { Link, useLocation } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Factory,
//   Truck,
//   Package,
//   Users,
// } from "lucide-react";
// // import {
// //   Package,
// // } from "lucide-react";

// function Sidebar() {
//   const location = useLocation();

//   const menuItems = [
//     {
//       name: "Dashboard",
//       path: "/dashboard",
//       icon: <LayoutDashboard size={18} />,
//     },
//     {
//       name: "Manufacturer",
//       path: "/manufacturer",
//       icon: <Factory size={18} />,
//     },
//     {
//       name: "Supplier",
//       path: "/supplier",
//       icon: <Truck size={18} />,
//     },
//     {
//       name: "Material",
//       path: "/material",
//       icon: <Package size={18} />,
//     },
//     {
//   name: "Store",
//   path: "/store",
//   icon: <Package size={18} />,
// },

//     {
//   name: "Employee",
//   path: "/employee",
//   icon: <Users size={18} />,
// }
//   ];

//   return (
//     <div className="w-64 h-screen bg-slate-900 text-white p-5">
//       <h1 className="text-2xl font-bold mb-8">
//         SCMS
//       </h1>

//       <div className="flex flex-col gap-2">
//         {menuItems.map((item) => (
//           <Link
//             key={item.path}
//             to={item.path}
//             className={`flex items-center gap-3 p-3 rounded-lg transition ${
//               location.pathname === item.path
//                 ? "bg-blue-600"
//                 : "hover:bg-slate-800"
//             }`}
//           >
//             {item.icon}
//             {item.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
// import { Link, useLocation } from "react-router-dom";

// import {
//   LayoutDashboard,
//   Factory,
//   Truck,
//   Package,
//   Users,
//   Warehouse,
// } from "lucide-react";

// function Sidebar() {
//   const location =
//     useLocation();

//   const menuItems = [
//     {
//       name: "Dashboard",
//       path: "/dashboard",
//       icon: (
//         <LayoutDashboard
//           size={20}
//         />
//       ),
//     },

//     {
//       name: "Manufacturer",
//       path: "/manufacturer",
//       icon: (
//         <Factory
//           size={20}
//         />
//       ),
//     },

//     {
//       name: "Supplier",
//       path: "/supplier",
//       icon: (
//         <Truck
//           size={20}
//         />
//       ),
//     },

//     {
//       name: "Material",
//       path: "/material",
//       icon: (
//         <Package
//           size={20}
//         />
//       ),
//     },

//     {
//       name: "Store",
//       path: "/store",
//       icon: (
//         <Warehouse
//           size={20}
//         />
//       ),
//     },

//     {
//       name: "Employee",
//       path: "/employee",
//       icon: (
//         <Users
//           size={20}
//         />
//       ),
//     },
//   ];

//   return (
//     <div
//       className="
//       w-72
//       min-h-screen
//       bg-[#111827]
//       border-r
//       border-gray-700
//       text-white
//       flex
//       flex-col
//       "
//     >

//       {/* Logo Section */}

//       <div
//         className="
//         p-6
//         border-b
//         border-gray-700
//         "
//       >

//         <h1
//           className="
//           text-3xl
//           font-bold
//           text-green-500
//           "
//         >
//           SCMS
//         </h1>

//         <p
//           className="
//           text-sm
//           text-gray-400
//           mt-1
//           "
//         >
//           Supply Chain
//           Management System
//         </p>

//       </div>

//       {/* Menu */}

//       <div
//         className="
//         flex-1
//         p-4
//         "
//       >

//         <p
//           className="
//           text-xs
//           uppercase
//           text-gray-500
//           mb-3
//           px-3
//           "
//         >
//           Main Navigation
//         </p>

//         <div
//           className="
//           flex
//           flex-col
//           gap-2
//           "
//         >

//           {menuItems.map(
//             (item) => (

//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`
//                 flex
//                 items-center
//                 gap-3
//                 px-4
//                 py-3
//                 rounded-lg
//                 transition-all

//                 ${
//                   location.pathname ===
//                   item.path
//                     ? "bg-green-600 text-white shadow-lg"
//                     : "hover:bg-gray-800 text-gray-300"
//                 }
//                 `}
//               >

//                 {item.icon}

//                 <span>
//                   {item.name}
//                 </span>

//               </Link>

//             )
//           )}

//         </div>

//       </div>

//       {/* Footer */}

//       <div
//         className="
//         p-4
//         border-t
//         border-gray-700
//         text-center
//         "
//       >

//         <p
//           className="
//           text-xs
//           text-gray-500
//           "
//         >
//           SCMS v1.0
//         </p>

//       </div>

//     </div>
//   );
// }

// export default Sidebar;
// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";

// import {
//   LayoutDashboard,
//   Factory,
//   Truck,
//   Package,
//   Users,
//   Warehouse,
//   ChevronDown,
//   ChevronRight,
//   Folder,
// } from "lucide-react";

// function Sidebar() {
//   const location = useLocation();

//   const [showAdmin, setShowAdmin] =
//     useState(true);

//   const [
//     showStoreConfig,
//     setShowStoreConfig,
//   ] = useState(true);

//   return (
//     <div
//       className="
//       w-72
//       min-h-screen
//       bg-[#111827]
//       border-r
//       border-gray-700
//       text-white
//       flex
//       flex-col
//       "
//     >
//       {/* Logo */}

//       <div
//         className="
//         p-6
//         border-b
//         border-gray-700
//         "
//       >
//         <h1
//           className="
//           text-3xl
//           font-bold
//           text-green-500
//           "
//         >
//           SCMS
//         </h1>

//         <p
//           className="
//           text-sm
//           text-gray-400
//           mt-1
//           "
//         >
//           Supply Chain Management System
//         </p>
//       </div>

//       {/* Navigation */}

//       <div
//         className="
//         flex-1
//         p-4
//         overflow-y-auto
//         "
//       >
//         <p
//           className="
//           text-xs
//           uppercase
//           text-gray-500
//           mb-3
//           px-3
//           "
//         >
//           Main Navigation
//         </p>

//         <div className="flex flex-col gap-2">
//           {/* Dashboard */}

//           <Link
//             to="/dashboard"
//             className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
//               location.pathname ===
//               "/dashboard"
//                 ? "bg-green-600 text-white"
//                 : "hover:bg-gray-800 text-gray-300"
//             }`}
//           >
//             <LayoutDashboard size={20} />
//             Dashboard
//           </Link>

//           {/* Store Transaction */}

//           <button
//             className="
//             flex
//             items-center
//             gap-3
//             px-4
//             py-3
//             rounded-lg
//             text-gray-300
//             hover:bg-gray-800
//             "
//           >
//             <Folder size={20} />
//             Store Transactions
//           </button>

//           {/* Planning */}

//           <button
//             className="
//             flex
//             items-center
//             gap-3
//             px-4
//             py-3
//             rounded-lg
//             text-gray-300
//             hover:bg-gray-800
//             "
//           >
//             <Folder size={20} />
//             Planning
//           </button>

//           {/* Admin */}

//           <button
//             onClick={() =>
//               setShowAdmin(!showAdmin)
//             }
//             className="
//             flex
//             items-center
//             justify-between
//             px-4
//             py-3
//             rounded-lg
//             text-gray-300
//             hover:bg-gray-800
//             "
//           >
//             <div className="flex items-center gap-3">
//               <Folder size={20} />
//               Admin
//             </div>

//             {showAdmin ? (
//               <ChevronDown size={16} />
//             ) : (
//               <ChevronRight size={16} />
//             )}
//           </button>

//           {/* Admin Submenu */}

//           {showAdmin && (
//             <div className="ml-4">
//               <button
//                 onClick={() =>
//                   setShowStoreConfig(
//                     !showStoreConfig
//                   )
//                 }
//                 className="
//                 flex
//                 items-center
//                 justify-between
//                 w-full
//                 px-4
//                 py-2
//                 rounded-lg
//                 text-gray-300
//                 hover:bg-gray-800
//                 "
//               >
//                 <span>
//                   Store Configuration
//                 </span>

//                 {showStoreConfig ? (
//                   <ChevronDown
//                     size={14}
//                   />
//                 ) : (
//                   <ChevronRight
//                     size={14}
//                   />
//                 )}
//               </button>

//               {showStoreConfig && (
//                 <div
//                   className="
//                   ml-4
//                   mt-2
//                   flex
//                   flex-col
//                   gap-1
//                   "
//                 >
//                   <Link
//                     to="/store"
//                     className={`flex items-center gap-2 px-3 py-2 rounded ${
//                       location.pathname ===
//                       "/store"
//                         ? "bg-green-600"
//                         : "hover:bg-gray-800"
//                     }`}
//                   >
//                     <Warehouse
//                       size={16}
//                     />
//                     Store
//                   </Link>

//                   <Link
//                     to="/employee"
//                     className={`flex items-center gap-2 px-3 py-2 rounded ${
//                       location.pathname ===
//                       "/employee"
//                         ? "bg-green-600"
//                         : "hover:bg-gray-800"
//                     }`}
//                   >
//                     <Users
//                       size={16}
//                     />
//                     Employee
//                   </Link>

//                   <Link
//                     to="/material"
//                     className={`flex items-center gap-2 px-3 py-2 rounded ${
//                       location.pathname ===
//                       "/material"
//                         ? "bg-green-600"
//                         : "hover:bg-gray-800"
//                     }`}
//                   >
//                     <Package
//                       size={16}
//                     />
//                     Material
//                   </Link>

//                   <Link
//                     to="/supplier"
//                     className={`flex items-center gap-2 px-3 py-2 rounded ${
//                       location.pathname ===
//                       "/supplier"
//                         ? "bg-green-600"
//                         : "hover:bg-gray-800"
//                     }`}
//                   >
//                     <Truck
//                       size={16}
//                     />
//                     Supplier
//                   </Link>

//                   <Link
//                     to="/manufacturer"
//                     className={`flex items-center gap-2 px-3 py-2 rounded ${
//                       location.pathname ===
//                       "/manufacturer"
//                         ? "bg-green-600"
//                         : "hover:bg-gray-800"
//                     }`}
//                   >
//                     <Factory
//                       size={16}
//                     />
//                     Manufacturer
//                   </Link>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* MIS */}

//           <button
//             className="
//             flex
//             items-center
//             gap-3
//             px-4
//             py-3
//             rounded-lg
//             text-gray-300
//             hover:bg-gray-800
//             "
//           >
//             <Folder size={20} />
//             MIS
//           </button>
//         </div>
//       </div>

//       {/* Footer */}

//       <div
//         className="
//         p-4
//         border-t
//         border-gray-700
//         text-center
//         "
//       >
//         <p
//           className="
//           text-xs
//           text-gray-500
//           "
//         >
//           SCMS v1.0
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";

// // import {
// //   LayoutDashboard,
// //   Factory,
// //   Truck,
// //   Package,
// //   Users,
// //   Warehouse,
// //   ChevronDown,
// //   ChevronRight,
// //   Folder,
// //   Bell,
// // } from "lucide-react";
// import {
//   LayoutDashboard,
//   Factory,
//   Truck,
//   Package,
//   Users,
//   Warehouse,
//   ChevronDown,
//   ChevronRight,
//   Folder,
//   Bell,
//   FileText,
// } from "lucide-react";

// function Sidebar() {
//   const location = useLocation();

//   const [showAdmin, setShowAdmin] =
//     useState(true);

//   const [
//     showStoreConfig,
//     setShowStoreConfig,
//   ] = useState(true);

//   // Open Notification Service
//   // const openNotificationService = () => {
//   //   window.open(
//   //     "http://localhost:8081",
//   //     "_blank"
//   //   );
//   // };

//   return (
//     <div
//       className="
//       w-72
//       min-h-screen
//       bg-[#111827]
//       border-r
//       border-gray-700
//       text-white
//       flex
//       flex-col
//       "
//     >
//       {/* Logo */}

//       <div
//         className="
//         p-6
//         border-b
//         border-gray-700
//         "
//       >
//         <h1
//           className="
//           text-3xl
//           font-bold
//           text-green-500
//           "
//         >
//           SCMS
//         </h1>

//         <p
//           className="
//           text-sm
//           text-gray-400
//           mt-1
//           "
//         >
//           Supply Chain Management System
//         </p>
//       </div>

//       {/* Navigation */}

//       <div
//         className="
//         flex-1
//         p-4
//         overflow-y-auto
//         "
//       >
//         <p
//           className="
//           text-xs
//           uppercase
//           text-gray-500
//           mb-3
//           px-3
//           "
//         >
//           Main Navigation
//         </p>

//         <div className="flex flex-col gap-2">

//           {/* Dashboard */}

//           <Link
//             to="/dashboard"
//             className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
//               location.pathname === "/dashboard"
//                 ? "bg-green-600 text-white"
//                 : "hover:bg-gray-800 text-gray-300"
//             }`}
//           >
//             <LayoutDashboard size={20} />
//             Dashboard
//           </Link>

//           {/* Store Transaction */}

//           <button
//             className="
//             flex
//             items-center
//             gap-3
//             px-4
//             py-3
//             rounded-lg
//             text-gray-300
//             hover:bg-gray-800
//             "
//           >
//             <Folder size={20} />
//             Store Transactions
//           </button>

//           {/* Planning */}

//           {/* <button
//             className="
//             flex
//             items-center
//             gap-3
//             px-4
//             py-3
//             rounded-lg
//             text-gray-300
//             hover:bg-gray-800
//             "
//           >
//             <Folder size={20} />
//             Planning
//           </button> */}
//           {/* Planning */}

// <Link
//   to="/indent"
//   className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
//     location.pathname === "/indent"
//       ? "bg-green-600 text-white"
//       : "hover:bg-gray-800 text-gray-300"
//   }`}
// >
//   <FileText size={20} />
//   Create Indent
// </Link>

//           {/* Admin */}

//           <button
//             onClick={() =>
//               setShowAdmin(!showAdmin)
//             }
//             className="
//             flex
//             items-center
//             justify-between
//             px-4
//             py-3
//             rounded-lg
//             text-gray-300
//             hover:bg-gray-800
//             "
//           >
//             <div className="flex items-center gap-3">
//               <Folder size={20} />
//               Admin
//             </div>

//             {showAdmin ? (
//               <ChevronDown size={16} />
//             ) : (
//               <ChevronRight size={16} />
//             )}
//           </button>

//           {/* Admin Submenu */}

//           {showAdmin && (
//             <div className="ml-4">

//               <button
//                 onClick={() =>
//                   setShowStoreConfig(
//                     !showStoreConfig
//                   )
//                 }
//                 className="
//                 flex
//                 items-center
//                 justify-between
//                 w-full
//                 px-4
//                 py-2
//                 rounded-lg
//                 text-gray-300
//                 hover:bg-gray-800
//                 "
//               >
//                 <span>
//                   Store Configuration
//                 </span>

//                 {showStoreConfig ? (
//                   <ChevronDown size={14} />
//                 ) : (
//                   <ChevronRight size={14} />
//                 )}
//               </button>

//               {showStoreConfig && (
//                 <div
//                   className="
//                   ml-4
//                   mt-2
//                   flex
//                   flex-col
//                   gap-1
//                   "
//                 >
//                   <Link
//                     to="/store"
//                     className={`flex items-center gap-2 px-3 py-2 rounded ${
//                       location.pathname === "/store"
//                         ? "bg-green-600"
//                         : "hover:bg-gray-800"
//                     }`}
//                   >
//                     <Warehouse size={16} />
//                     Store
//                   </Link>

//                   <Link
//                     to="/employee"
//                     className={`flex items-center gap-2 px-3 py-2 rounded ${
//                       location.pathname === "/employee"
//                         ? "bg-green-600"
//                         : "hover:bg-gray-800"
//                     }`}
//                   >
//                     <Users size={16} />
//                     Employee
//                   </Link>

//                   <Link
//                     to="/material"
//                     className={`flex items-center gap-2 px-3 py-2 rounded ${
//                       location.pathname === "/material"
//                         ? "bg-green-600"
//                         : "hover:bg-gray-800"
//                     }`}
//                   >
//                     <Package size={16} />
//                     Material
//                   </Link>

//                   <Link
//                     to="/supplier"
//                     className={`flex items-center gap-2 px-3 py-2 rounded ${
//                       location.pathname === "/supplier"
//                         ? "bg-green-600"
//                         : "hover:bg-gray-800"
//                     }`}
//                   >
//                     <Truck size={16} />
//                     Supplier
//                   </Link>

//                   <Link
//                     to="/manufacturer"
//                     className={`flex items-center gap-2 px-3 py-2 rounded ${
//                       location.pathname === "/manufacturer"
//                         ? "bg-green-600"
//                         : "hover:bg-gray-800"
//                     }`}
//                   >
//                     <Factory size={16} />
//                     Manufacturer
//                   </Link>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Notification */}

//           {/* <button
//             onClick={openNotificationService}
//             className="
//             flex
//             items-center
//             gap-3
//             px-4
//             py-3
//             rounded-lg
//             text-gray-300
//             hover:bg-gray-800
//             "
//           >
//             <Bell size={20} />
//             Notifications
//           </button> */}
//           {/* Notification */}

// <Link
//   to="/notifications"
//   className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
//     location.pathname === "/notifications"
//       ? "bg-green-600 text-white"
//       : "hover:bg-gray-800 text-gray-300"
//   }`}
// >
//   <Bell size={20} />
//   Notifications
// </Link>

//           {/* MIS */}

//           <button
//             className="
//             flex
//             items-center
//             gap-3
//             px-4
//             py-3
//             rounded-lg
//             text-gray-300
//             hover:bg-gray-800
//             "
//           >
//             <Folder size={20} />
//             MIS
//           </button>

//         </div>
//       </div>

//       {/* Footer */}

//       <div
//         className="
//         p-4
//         border-t
//         border-gray-700
//         text-center
//         "
//       >
//         <p
//           className="
//           text-xs
//           text-gray-500
//           "
//         >
//           SCMS v1.0
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import {
  LayoutDashboard,
  Factory,
  Truck,
  Package,
  Users,
  Warehouse,
  ChevronDown,
  ChevronRight,
  Folder,
  Bell,
  FileText,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const [showAdmin, setShowAdmin] =
    useState(true);

  const [
    showStoreConfig,
    setShowStoreConfig,
  ] = useState(true);

  return (
    <div
      className="
      w-72
      min-h-screen
      bg-[#111827]
      border-r
      border-gray-700
      text-white
      flex
      flex-col
      "
    >
      {/* Logo */}

      <div
        className="
        p-6
        border-b
        border-gray-700
        "
      >
        <h1
          className="
          text-3xl
          font-bold
          text-green-500
          "
        >
          SCMS
        </h1>

        <p
          className="
          text-sm
          text-gray-400
          mt-1
          "
        >
          Supply Chain Management System
        </p>
      </div>

      {/* Navigation */}

      <div
        className="
        flex-1
        p-4
        overflow-y-auto
        "
      >
        <p
          className="
          text-xs
          uppercase
          text-gray-500
          mb-3
          px-3
          "
        >
          Main Navigation
        </p>

        <div className="flex flex-col gap-2">

          {/* Dashboard */}

          <Link
            to="/dashboard"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              location.pathname === "/dashboard"
                ? "bg-green-600 text-white"
                : "hover:bg-gray-800 text-gray-300"
            }`}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          {/* Store Transactions */}

          <button
            className="
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            text-gray-300
            hover:bg-gray-800
            "
          >
            <Folder size={20} />
            Store Transactions
          </button>

          {/* Admin */}

          <button
            onClick={() =>
              setShowAdmin(!showAdmin)
            }
            className="
            flex
            items-center
            justify-between
            px-4
            py-3
            rounded-lg
            text-gray-300
            hover:bg-gray-800
            "
          >
            <div className="flex items-center gap-3">
              <Folder size={20} />
              Admin
            </div>

            {showAdmin ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>

          {/* Admin Submenu */}

          {showAdmin && (
            <div className="ml-4">

              <button
                onClick={() =>
                  setShowStoreConfig(
                    !showStoreConfig
                  )
                }
                className="
                flex
                items-center
                justify-between
                w-full
                px-4
                py-2
                rounded-lg
                text-gray-300
                hover:bg-gray-800
                "
              >
                <span>
                  Store Configuration
                </span>

                {showStoreConfig ? (
                  <ChevronDown size={14} />
                ) : (
                  <ChevronRight size={14} />
                )}
              </button>

              {showStoreConfig && (
                <div
                  className="
                  ml-4
                  mt-2
                  flex
                  flex-col
                  gap-1
                  "
                >
                  <Link
                    to="/store"
                    className={`flex items-center gap-2 px-3 py-2 rounded ${
                      location.pathname === "/store"
                        ? "bg-green-600"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    <Warehouse size={16} />
                    Store
                  </Link>

                  <Link
                    to="/employee"
                    className={`flex items-center gap-2 px-3 py-2 rounded ${
                      location.pathname === "/employee"
                        ? "bg-green-600"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    <Users size={16} />
                    Employee
                  </Link>

                  <Link
                    to="/material"
                    className={`flex items-center gap-2 px-3 py-2 rounded ${
                      location.pathname === "/material"
                        ? "bg-green-600"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    <Package size={16} />
                    Material
                  </Link>

                  <Link
                    to="/supplier"
                    className={`flex items-center gap-2 px-3 py-2 rounded ${
                      location.pathname === "/supplier"
                        ? "bg-green-600"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    <Truck size={16} />
                    Supplier
                  </Link>

                  <Link
                    to="/manufacturer"
                    className={`flex items-center gap-2 px-3 py-2 rounded ${
                      location.pathname === "/manufacturer"
                        ? "bg-green-600"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    <Factory size={16} />
                    Manufacturer
                  </Link>
                </div>
              )}

              {/* Create Indent */}

              <Link
                to="/indent"
                className={`flex items-center gap-2 px-4 py-2 rounded mt-2 ${
                  location.pathname === "/indent"
                    ? "bg-green-600"
                    : "hover:bg-gray-800"
                }`}
              >
                <FileText size={16} />
                Create Indent
              </Link>

              {/* Notifications */}

              <Link
                to="/notifications"
                className={`flex items-center gap-2 px-4 py-2 rounded ${
                  location.pathname === "/notifications"
                    ? "bg-green-600"
                    : "hover:bg-gray-800"
                }`}
              >
                <Bell size={16} />
                Notifications
              </Link>

            </div>
          )}

          {/* MIS */}

          <button
            className="
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            text-gray-300
            hover:bg-gray-800
            "
          >
            <Folder size={20} />
            MIS
          </button>

        </div>
      </div>

      {/* Footer */}

      <div
        className="
        p-4
        border-t
        border-gray-700
        text-center
        "
      >
        <p
          className="
          text-xs
          text-gray-500
          "
        >
          SCMS v1.0
        </p>
      </div>
    </div>
  );
}

export default Sidebar;