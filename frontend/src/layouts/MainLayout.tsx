// // // // import type { ReactNode } from "react";
// // // // import Sidebar from "../components/Sidebar";
// // // // import Navbar from "../components/Navbar";

// // // // interface Props {
// // // //   children: ReactNode;
// // // // }

// // // // function MainLayout({ children }: Props) {
// // // //   return (
// // // //     <div style={{ display: "flex" }}>
// // // //       <Sidebar />

// // // //       <div style={{ flex: 1 }}>
// // // //         <Navbar />

// // // //         <div style={{ padding: "20px" }}>
// // // //           {children}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default MainLayout;
// // // // import type { ReactNode } from "react";
// // // // import Sidebar from "../components/Sidebar";
// // // // import Navbar from "../components/Navbar";

// // // // interface Props {
// // // //   children: ReactNode;
// // // // }

// // // // function MainLayout({ children }: Props) {
// // // //   return (
// // // //     <div className="flex">

// // // //       <Sidebar />

// // // //       <div className="flex-1">

// // // //         <Navbar />

// // // //         <main className="p-6">
// // // //           {children}
// // // //         </main>

// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }

// // // // export default MainLayout;
// // // // import type { ReactNode } from "react";
// // // // import Sidebar from "../components/Sidebar";
// // // // import Navbar from "../components/Navbar";

// // // // interface Props {
// // // //   children: ReactNode;
// // // // }

// // // // function MainLayout({
// // // //   children,
// // // // }: Props) {
// // // //   return (
// // // //     <div className="flex min-h-screen bg-[#0f172a]">

// // // //       <Sidebar />

// // // //       <div className="flex-1 flex flex-col">

// // // //         <Navbar />

// // // //         <main className="p-6 bg-[#111827] min-h-screen">

// // // //           <div
// // // //             className="
// // // //             bg-[#1f2937]
// // // //             rounded-xl
// // // //             shadow-lg
// // // //             border
// // // //             border-gray-700
// // // //             p-6
// // // //             "
// // // //           >
// // // //             {children}
// // // //           </div>

// // // //         </main>

// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }

// // // // export default MainLayout;
// // // // import type { ReactNode } from "react";
// // // // import { useEffect } from "react";

// // // // import Sidebar from "../components/Sidebar";
// // // // import Navbar from "../components/Navbar";

// // // // import { getCurrentUser }
// // // // from "../services/authService";

// // // // import {
// // // //   connectOnlineUsers,
// // // //   disconnectOnlineUsers,
// // // // } from "../services/onlineUserService";

// // // // import {
// // // //   connectNotification,
// // // // } from "../services/notificationService";

// // // // interface Props {
// // // //   children: ReactNode;
// // // // }

// // // // function MainLayout({
// // // //   children,
// // // // }: Props) {

// // // //   const currentUser =
// // // //     getCurrentUser();

// // // //   useEffect(() => {

// // // //     if (!currentUser?.id) {
// // // //       return;
// // // //     }

// // // //     connectOnlineUsers(

// // // //       Number(currentUser.id),

// // // //       currentUser.name || "",

// // // //       () => {}

// // // //     );

// // // //     connectNotification(

// // // //       Number(currentUser.id),

// // // //       () => {}

// // // //     );

// // // //     return () => {

// // // //       disconnectOnlineUsers();

// // // //     };

// // // //   }, []);

// // // //   return (

// // // //     <div className="flex min-h-screen bg-[#0f172a]">

// // // //       <Sidebar />

// // // //       <div className="flex-1 flex flex-col">

// // // //         <Navbar />

// // // //         <main className="p-6 bg-[#111827] min-h-screen">

// // // //           <div
// // // //             className="
// // // //             bg-[#1f2937]
// // // //             rounded-xl
// // // //             shadow-lg
// // // //             border
// // // //             border-gray-700
// // // //             p-6
// // // //             "
// // // //           >

// // // //             {children}

// // // //           </div>

// // // //         </main>

// // // //       </div>

// // // //     </div>

// // // //   );

// // // // }

// // // // export default MainLayout;
// // // // import { ReactNode, useEffect } from "react";
// // // import { useEffect } from "react";
// // // import type { ReactNode } from "react";

// // // import Sidebar from "../components/Sidebar";
// // // import Navbar from "../components/Navbar";

// // // import {
// // //   getCurrentUser,
// // //   isAuthenticated,
// // // } from "../services/authService";

// // // import {
// // //   connectOnlineUsers,
// // // } from "../services/onlineUserService";

// // // interface Props {
// // //   children: ReactNode;
// // // }

// // // function MainLayout({
// // //   children,
// // // }: Props) {

// // //   useEffect(() => {

// // //     if (!isAuthenticated()) {
// // //       return;
// // //     }

// // //     const currentUser =
// // //       getCurrentUser();

// // //     connectOnlineUsers(
// // //       Number(currentUser.id),
// // //       currentUser.name || "",
// // //       () => {}
// // //     );

// // //   }, []);

// // //   return (

// // //     <div className="flex min-h-screen bg-[#0f172a]">

// // //       <Sidebar />

// // //       <div className="flex-1 flex flex-col">

// // //         <Navbar />

// // //         <main className="p-6 bg-[#111827] min-h-screen">

// // //           <div
// // //             className="
// // //             bg-[#1f2937]
// // //             rounded-xl
// // //             shadow-lg
// // //             border
// // //             border-gray-700
// // //             p-6
// // //             "
// // //           >
// // //             {children}
// // //           </div>

// // //         </main>

// // //       </div>

// // //     </div>

// // //   );

// // // }

// // // export default MainLayout;
// // // import type { ReactNode } from "react";
// // // import Sidebar from "../components/Sidebar";
// // // import Navbar from "../components/Navbar";

// // // interface Props {
// // //   children: ReactNode;
// // // }

// // // function MainLayout({ children }: Props) {
// // //   return (
// // //     <div style={{ display: "flex" }}>
// // //       <Sidebar />

// // //       <div style={{ flex: 1 }}>
// // //         <Navbar />

// // //         <div style={{ padding: "20px" }}>
// // //           {children}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default MainLayout;
// // // import type { ReactNode } from "react";
// // // import Sidebar from "../components/Sidebar";
// // // import Navbar from "../components/Navbar";

// // // interface Props {
// // //   children: ReactNode;
// // // }

// // // function MainLayout({ children }: Props) {
// // //   return (
// // //     <div className="flex">

// // //       <Sidebar />

// // //       <div className="flex-1">

// // //         <Navbar />

// // //         <main className="p-6">
// // //           {children}
// // //         </main>

// // //       </div>

// // //     </div>
// // //   );
// // // }

// // // export default MainLayout;
// // import type { ReactNode } from "react";
// // import Sidebar from "../components/Sidebar";
// // import Navbar from "../components/Navbar";

// // interface Props {
// //   children: ReactNode;
// // }

// // function MainLayout({
// //   children,
// // }: Props) {
// //   return (
// //     <div className="flex min-h-screen bg-[#0f172a]">

// //       <Sidebar />

// //       <div className="flex-1 flex flex-col">

// //         <Navbar />

// //         <main className="p-6 bg-[#111827] min-h-screen">

// //           <div
// //             className="
// //             bg-[#1f2937]
// //             rounded-xl
// //             shadow-lg
// //             border
// //             border-gray-700
// //             p-6
// //             "
// //           >
// //             {children}
// //           </div>

// //         </main>

// //       </div>

// //     </div>
// //   );
// // }

// // export default MainLayout;
// // import type { ReactNode } from "react";
// // import Sidebar from "../components/Sidebar";
// // import Navbar from "../components/Navbar";

// // interface Props {
// //   children: ReactNode;
// // }

// // function MainLayout({ children }: Props) {
// //   return (
// //     <div style={{ display: "flex" }}>
// //       <Sidebar />

// //       <div style={{ flex: 1 }}>
// //         <Navbar />

// //         <div style={{ padding: "20px" }}>
// //           {children}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default MainLayout;
// // import type { ReactNode } from "react";
// // import Sidebar from "../components/Sidebar";
// // import Navbar from "../components/Navbar";

// // interface Props {
// //   children: ReactNode;
// // }

// // function MainLayout({ children }: Props) {
// //   return (
// //     <div className="flex">

// //       <Sidebar />

// //       <div className="flex-1">

// //         <Navbar />

// //         <main className="p-6">
// //           {children}
// //         </main>

// //       </div>

// //     </div>
// //   );
// // }

// // export default MainLayout;
// import type { ReactNode } from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// interface Props {
//   children: ReactNode;
// }

// function MainLayout({
//   children,
// }: Props) {
//   return (
//     <div className="flex min-h-screen bg-[#0f172a]">

//       <Sidebar />

//       <div className="flex-1 flex flex-col">

//         <Navbar />

//         <main className="p-6 bg-[#111827] min-h-screen">

//           <div
//             className="
//             bg-[#1f2937]
//             rounded-xl
//             shadow-lg
//             border
//             border-gray-700
//             p-6
//             "
//           >
//             {children}
//           </div>

//         </main>

//       </div>

//     </div>
//   );
// }

// export default MainLayout;
// import type { ReactNode } from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// interface Props {
//   children: ReactNode;
// }

// function MainLayout({ children }: Props) {
//   return (
//     <div className="flex min-h-screen bg-[#0f172a] text-white">
//       {/* Sidebar Navigation */}
//       <Sidebar />

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col">
//         <Navbar />

//         <main className="p-6 bg-[#111827] flex-1">
//           <div className="bg-[#1f2937] rounded-xl shadow-lg border border-gray-700 p-6">
//             {children}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default MainLayout;
// import { ReactNode, useEffect } from "react";
import { useEffect } from "react";
import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { getCurrentUser } from "../services/authService";
import { connectOnlineUsers, disconnectOnlineUsers } from "../services/onlineUserService";

interface Props {
  children: ReactNode;
}

function MainLayout({ children }: Props) {
  const currentUser = getCurrentUser();

  useEffect(() => {
    if (!currentUser.id) return;

    // Connect to online status tracking stream immediately on login/render
    connectOnlineUsers(
      Number(currentUser.id),
      currentUser.name || "",
      (users) => {
        let normalizedUsers = [];
        if (Array.isArray(users)) {
          normalizedUsers = users;
        } else {
          normalizedUsers = Object.entries(users).map(([id, name]) => ({
            id: Number(id),
            name: String(name),
          }));
        }

        // Cache globally so components can sync instantly on mount
        localStorage.setItem("globalOnlineUsers", JSON.stringify(normalizedUsers));
        
        // Broadcast the real-time update event downstream to active pages
        window.dispatchEvent(
          new CustomEvent("online-users-updated", { detail: normalizedUsers })
        );
      }
    );

    return () => {
      // Cleanup connections when layout unmounts completely
      disconnectOnlineUsers();
    };
  }, [currentUser.id, currentUser.name]);

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6 bg-[#111827] flex-1">
          <div className="bg-[#1f2937] rounded-xl shadow-lg border border-gray-700 p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;