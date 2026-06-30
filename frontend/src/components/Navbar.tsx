// // function Navbar() {
// //   return (
// //     <div
// //       style={{
// //         height: "60px",
// //         background: "#334155",
// //         color: "white",
// //         display: "flex",
// //         alignItems: "center",
// //         paddingLeft: "20px",
// //       }}
// //     >
// //       Supply Chain Management System
// //     </div>
// //   );
// // }

// // export default Navbar;
// // function Navbar() {
// //   return (
// //     <div className="h-16 bg-white shadow px-6 flex items-center justify-between">

// //       <h2 className="font-semibold text-lg">
// //         Supply Chain Management System
// //       </h2>

// //       <div className="font-medium">
// //         Admin
// //       </div>

// //     </div>
// //   );
// // }

// // export default Navbar;
// // import { useNavigate } from "react-router-dom";
// // import { logout } from "../services/authService";

// // function Navbar() {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     logout();
// //     navigate("/");
// //   };

// //   return (
// //     <div className="h-16 bg-white shadow px-6 flex items-center justify-between">

// //       <h2 className="font-semibold text-lg">
// //         Supply Chain Management System
// //       </h2>

// //       <div className="flex items-center gap-4">

// //         <span className="font-medium">
// //           Admin
// //         </span>

// //         <button
// //           onClick={handleLogout}
// //           className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
// //         >
// //           Logout
// //         </button>

// //       </div>

// //     </div>
// //   );
// // }

// // export default Navbar;
// // import { useNavigate } from "react-router-dom";
// // import { logout } from "../services/authService";

// // function Navbar() {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     logout();
// //     navigate("/");
// //   };

// //   return (
// //     <div
// //       className="
// //       h-16
// //       bg-[#1f2937]
// //       border-b
// //       border-gray-700
// //       px-6
// //       flex
// //       items-center
// //       justify-between
// //       shadow
// //       "
// //     >

// //       <div>

// //         <h1
// //           className="
// //           text-xl
// //           font-bold
// //           text-white
// //           "
// //         >
// //           Supply Chain Management System
// //         </h1>

// //         <p
// //           className="
// //           text-xs
// //           text-gray-400
// //           "
// //         >
// //           Inventory & Resource Management
// //         </p>

// //       </div>

// //       <div
// //         className="
// //         flex
// //         items-center
// //         gap-4
// //         "
// //       >

// //         <div
// //           className="
// //           text-right
// //           "
// //         >

// //           <p
// //             className="
// //             text-white
// //             font-medium
// //             "
// //           >
// //             Admin
// //           </p>

// //           <p
// //             className="
// //             text-xs
// //             text-gray-400
// //             "
// //           >
// //             System Administrator
// //           </p>

// //         </div>

// //         <div
// //           className="
// //           w-10
// //           h-10
// //           rounded-full
// //           bg-green-600
// //           flex
// //           items-center
// //           justify-center
// //           font-bold
// //           "
// //         >
// //           A
// //         </div>

// //         <button
// //           onClick={handleLogout}
// //           className="
// //           bg-red-600
// //           hover:bg-red-700
// //           px-4
// //           py-2
// //           rounded
// //           text-white
// //           "
// //         >
// //           Logout
// //         </button>

// //       </div>

// //     </div>
// //   );
// // }

// // export default Navbar;
// // import { useNavigate } from "react-router-dom";
// // import { logout } from "../services/authService";

// // import {
// //   Home,
// //   Lock,
// // } from "lucide-react";

// // function Navbar() {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     logout();
// //     navigate("/");
// //   };

// //   return (
// //     <div
// //       className="
// //       h-16
// //       bg-[#1f2937]
// //       border-b
// //       border-gray-700
// //       px-6
// //       flex
// //       items-center
// //       justify-between
// //       shadow
// //       "
// //     >
// //       {/* Left Side */}

// //       <div>
// //         <h1
// //           className="
// //           text-xl
// //           font-bold
// //           text-white
// //           "
// //         >
// //           Supply Chain Management System
// //         </h1>

// //         <p
// //           className="
// //           text-xs
// //           text-gray-400
// //           "
// //         >
// //           Inventory & Resource Management
// //         </p>
// //       </div>

// //       {/* Right Side */}

// //       <div
// //         className="
// //         flex
// //         items-center
// //         gap-3
// //         "
// //       >
// //         <div
// //           className="
// //           text-right
// //           "
// //         >
// //           <p
// //             className="
// //             text-white
// //             font-medium
// //             "
// //           >
// //             Admin
// //           </p>

// //           <p
// //             className="
// //             text-xs
// //             text-gray-400
// //             "
// //           >
// //             System Administrator
// //           </p>
// //         </div>

// //         {/* Avatar */}

// //         <div
// //           className="
// //           w-10
// //           h-10
// //           rounded-full
// //           bg-green-600
// //           flex
// //           items-center
// //           justify-center
// //           font-bold
// //           text-white
// //           "
// //         >
// //           A
// //         </div>

// //         {/* Home Button */}

// //         <button
// //           className="
// //           bg-blue-600
// //           hover:bg-blue-700
// //           p-2
// //           rounded
// //           "
// //         >
// //           <Home size={18} />
// //         </button>

// //         {/* Lock Button */}

// //         <button
// //           className="
// //           bg-gray-700
// //           hover:bg-gray-600
// //           p-2
// //           rounded
// //           "
// //         >
// //           <Lock size={18} />
// //         </button>

// //         {/* Logout */}

// //         <button
// //           onClick={handleLogout}
// //           className="
// //           bg-red-600
// //           hover:bg-red-700
// //           px-4
// //           py-2
// //           rounded
// //           text-white
// //           "
// //         >
// //           Logout
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Navbar;
// // import { useNavigate } from "react-router-dom";

// // import {
// //   Home,
// //   Lock,
// // } from "lucide-react";

// // import {
// //   getCurrentUser,
// //   logout,
// // } from "../services/authService";

// // import {
// //   notifyUserDisconnect,
// // } from "../services/onlineUserService";

// // function Navbar() {

// //   const navigate =
// //     useNavigate();

// //   const handleLogout =
// //     () => {

// //       const currentUser =
// //         getCurrentUser();

// //       notifyUserDisconnect(

// //         Number(
// //           currentUser.id
// //         )

// //       );

// //       logout();

// //       navigate("/");

// //     };

// //   return (

// //     <div
// //       className="
// //       h-16
// //       bg-[#1f2937]
// //       border-b
// //       border-gray-700
// //       px-6
// //       flex
// //       items-center
// //       justify-between
// //       shadow
// //       "
// //     >

// //       <div>

// //         <h1
// //           className="
// //           text-xl
// //           font-bold
// //           text-white
// //           "
// //         >
// //           Supply Chain Management System
// //         </h1>

// //         <p
// //           className="
// //           text-xs
// //           text-gray-400
// //           "
// //         >
// //           Inventory & Resource Management
// //         </p>

// //       </div>

// //       <div
// //         className="
// //         flex
// //         items-center
// //         gap-3
// //         "
// //       >

// //         <div
// //           className="
// //           text-right
// //           "
// //         >

// //           <p
// //             className="
// //             text-white
// //             font-medium
// //             "
// //           >
// //             Admin
// //           </p>

// //           <p
// //             className="
// //             text-xs
// //             text-gray-400
// //             "
// //           >
// //             System Administrator
// //           </p>

// //         </div>

// //         <div
// //           className="
// //           w-10
// //           h-10
// //           rounded-full
// //           bg-green-600
// //           flex
// //           items-center
// //           justify-center
// //           font-bold
// //           text-white
// //           "
// //         >
// //           A
// //         </div>

// //         <button
// //           className="
// //           bg-blue-600
// //           hover:bg-blue-700
// //           p-2
// //           rounded
// //           "
// //         >
// //           <Home size={18} />
// //         </button>

// //         <button
// //           className="
// //           bg-gray-700
// //           hover:bg-gray-600
// //           p-2
// //           rounded
// //           "
// //         >
// //           <Lock size={18} />
// //         </button>

// //         <button

// //           onClick={
// //             handleLogout
// //           }

// //           className="
// //           bg-red-600
// //           hover:bg-red-700
// //           px-4
// //           py-2
// //           rounded
// //           text-white
// //           "
// //         >
// //           Logout
// //         </button>

// //       </div>

// //     </div>

// //   );

// // }

// // export default Navbar;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import {
//   Home,
//   Bell,
// } from "lucide-react";

// import {
//   getCurrentUser,
//   logout,
// } from "../services/authService";

// import {
//   notifyUserDisconnect,
// } from "../services/onlineUserService";

// function Navbar() {

//   const navigate =
//     useNavigate();

//   const [hasNewIndent,
//     setHasNewIndent] =
//     useState(
//       localStorage.getItem(
//         "newIndentNotification"
//       ) === "true"
//     );

//   useEffect(() => {

//     const updateBell =
//       () => {

//         setHasNewIndent(

//           localStorage.getItem(
//             "newIndentNotification"
//           ) === "true"

//         );

//       };

//     window.addEventListener(
//       "indent-received",
//       updateBell
//     );

//     window.addEventListener(
//       "indent-cleared",
//       updateBell
//     );

//     return () => {

//       window.removeEventListener(
//         "indent-received",
//         updateBell
//       );

//       window.removeEventListener(
//         "indent-cleared",
//         updateBell
//       );

//     };

//   }, []);

//   const handleLogout =
//     () => {

//       const currentUser =
//         getCurrentUser();

//       notifyUserDisconnect(

//         Number(
//           currentUser.id
//         )

//       );

//       logout();

//       navigate("/");

//     };

//   return (

//     <div
//       className="
//       h-16
//       bg-[#1f2937]
//       border-b
//       border-gray-700
//       px-6
//       flex
//       items-center
//       justify-between
//       shadow
//       "
//     >

//       <div>

//         <h1
//           className="
//           text-xl
//           font-bold
//           text-white
//           "
//         >
//           Supply Chain Management System
//         </h1>

//         <p
//           className="
//           text-xs
//           text-gray-400
//           "
//         >
//           Inventory & Resource Management
//         </p>

//       </div>

//       <div
//         className="
//         flex
//         items-center
//         gap-3
//         "
//       >

//         <div
//           className="
//           text-right
//           "
//         >

//           <p
//             className="
//             text-white
//             font-medium
//             "
//           >
//             Admin
//           </p>

//           <p
//             className="
//             text-xs
//             text-gray-400
//             "
//           >
//             System Administrator
//           </p>

//         </div>

//         <div
//           className="
//           w-10
//           h-10
//           rounded-full
//           bg-green-600
//           flex
//           items-center
//           justify-center
//           font-bold
//           text-white
//           "
//         >
//           A
//         </div>

//         <button
//           className="
//           bg-blue-600
//           hover:bg-blue-700
//           p-2
//           rounded
//           "
//         >
//           <Home size={18} />
//         </button>

//         {/* Notification Bell */}

//         <div className="relative">

//           <button
//             className="
//             bg-gray-700
//             hover:bg-gray-600
//             p-2
//             rounded
//             "
//           >
//             <Bell size={18} />
//           </button>

//           {hasNewIndent && (

//             <span
//               className="
//               absolute
//               -top-1
//               -right-1
//               w-3
//               h-3
//               bg-green-500
//               rounded-full
//               border
//               border-white
//               "
//             />

//           )}

//         </div>

//         <button

//           onClick={
//             handleLogout
//           }

//           className="
//           bg-red-600
//           hover:bg-red-700
//           px-4
//           py-2
//           rounded
//           text-white
//           "
//         >
//           Logout
//         </button>

//       </div>

//     </div>

//   );

// }

// export default Navbar;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Home, Bell } from "lucide-react";
// import { getCurrentUser, logout } from "../services/authService";
// import { notifyUserDisconnect } from "../services/onlineUserService";

// function Navbar() {
//   const navigate = useNavigate();
//   const [hasNewIndent, setHasNewIndent] = useState(
//     localStorage.getItem("newIndentNotification") === "true"
//   );

//   useEffect(() => {
//     const updateBell = () => {
//       setHasNewIndent(localStorage.getItem("newIndentNotification") === "true");
//     };

//     window.addEventListener("indent-received", updateBell);
//     window.addEventListener("indent-cleared", updateBell);

//     return () => {
//       window.removeEventListener("indent-received", updateBell);
//       window.removeEventListener("indent-cleared", updateBell);
//     };
//   }, []);

//   const handleLogout = () => {
//     const currentUser = getCurrentUser();
//     notifyUserDisconnect(Number(currentUser.id));
//     logout();
//     navigate("/");
//   };

//   return (
//     <div className="h-16 bg-[#1f2937] border-b border-gray-700 px-6 flex items-center justify-between shadow">
//       <div>
//         <h1 className="text-xl font-bold text-white">
//           Supply Chain Management System
//         </h1>
//         <p className="text-xs text-gray-400">
//           Inventory & Resource Management
//         </p>
//       </div>

//       <div className="flex items-center gap-3">
//         <div className="text-right">
//           <p className="text-white font-medium">Admin</p>
//           <p className="text-xs text-gray-400">System Administrator</p>
//         </div>

//         <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center font-bold text-white">
//           A
//         </div>

//         <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded text-white">
//           <Home size={18} />
//         </button>

//         {/* Notification Bell */}
//         <div className="relative">
//           <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-white">
//             <Bell size={18} />
//           </button>

//           {hasNewIndent && (
//             <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white" />
//           )}
//         </div>

//         <button
//           onClick={handleLogout}
//           className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Bell } from "lucide-react";
import { getCurrentUser, logout } from "../services/authService";
import { disconnectOnlineUsers } from "../services/onlineUserService";

function Navbar() {
  const navigate = useNavigate();
  const [hasNewIndent, setHasNewIndent] = useState(
    localStorage.getItem("newIndentNotification") === "true"
  );

  useEffect(() => {
    const updateBell = () => {
      setHasNewIndent(localStorage.getItem("newIndentNotification") === "true");
    };

    window.addEventListener("indent-received", updateBell);
    window.addEventListener("indent-cleared", updateBell);

    return () => {
      window.removeEventListener("indent-received", updateBell);
      window.removeEventListener("indent-cleared", updateBell);
    };
  }, []);

  const handleLogout = () => {
    const currentUser = getCurrentUser();
    
    // 1. Send the disconnect signal to the server right away
    disconnectOnlineUsers(Number(currentUser.id));
    
    // 2. Wipe the local storage cache layouts instantly
    localStorage.removeItem("globalOnlineUsers");
    localStorage.removeItem("newIndentNotification");
    
    // 3. Clear auth context state and push to sign in screen
    logout();
    navigate("/");
  };

  return (
    <div className="h-16 bg-[#1f2937] border-b border-gray-700 px-6 flex items-center justify-between shadow">
      <div>
        <h1 className="text-xl font-bold text-white">
          Supply Chain Management System
        </h1>
        <p className="text-xs text-gray-400">
          Inventory & Resource Management
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-white font-medium">Admin</p>
          <p className="text-xs text-gray-400">System Administrator</p>
        </div>

        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center font-bold text-white">
          A
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded text-white">
          <Home size={18} />
        </button>

        {/* Notification Bell */}
        <div className="relative">
          <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-white">
            <Bell size={18} />
          </button>

          {hasNewIndent && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white" />
          )}
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;