// import { useEffect } from "react";
// import type { ReactNode } from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import { getCurrentUser } from "../services/authService";
// import { connectOnlineUsers, disconnectOnlineUsers } from "../services/onlineUserService";

// interface Props {
//   children: ReactNode;
// }

// function MainLayout({ children }: Props) {
//   const currentUser = getCurrentUser();

//   useEffect(() => {
//     if (!currentUser.id) return;

//     // Connect to online status tracking stream immediately on login/render
//     connectOnlineUsers(
//       Number(currentUser.id),
//       currentUser.name || "",
//       (users) => {
//         let normalizedUsers = [];
//         if (Array.isArray(users)) {
//           normalizedUsers = users;
//         } else {
//           normalizedUsers = Object.entries(users).map(([id, name]) => ({
//             id: Number(id),
//             name: String(name),
//           }));
//         }

//         // Cache globally so components can sync instantly on mount
//         localStorage.setItem("globalOnlineUsers", JSON.stringify(normalizedUsers));
        
//         // Broadcast the real-time update event downstream to active pages
//         window.dispatchEvent(
//           new CustomEvent("online-users-updated", { detail: normalizedUsers })
//         );
//       }
//     );

//     return () => {
//       // Cleanup connections when layout unmounts completely
//       disconnectOnlineUsers();
//     };
//   }, [currentUser.id, currentUser.name]);

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

        // Notify active sub-views (like Indent.tsx) that the socket pipeline is alive and ready for page subscriptions
        window.dispatchEvent(new CustomEvent("socket-connected"));
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