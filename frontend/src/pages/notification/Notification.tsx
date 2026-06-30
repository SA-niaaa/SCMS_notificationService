// function Notification() {
//   return (
//     <div>
//       Notification Page
//     </div>
//   );
// }

// export default Notification;
// import { useState } from "react";
// import MainLayout from "../../layouts/MainLayout";

// function Notification() {

//   const [currentUser, setCurrentUser] =
//     useState("1");

//   const [receiverId, setReceiverId] =
//     useState("");

//   const [message, setMessage] =
//     useState("");

//   const [status] =
//     useState("Disconnected");

//   const [notifications] =
//     useState<string[]>([]);

//   return (

//     <MainLayout>

//       <div>

//         <h1 className="text-3xl font-bold mb-6">
//           Notification Service
//         </h1>

//         {/* Connection */}

//         <div className="bg-[#111827] rounded-lg p-5 border border-gray-700">

//           <h2 className="text-xl font-semibold mb-4">
//             Connection
//           </h2>

//           <div className="flex gap-4 items-center">

//             <input
//               value={currentUser}
//               onChange={(e) =>
//                 setCurrentUser(
//                   e.target.value
//                 )
//               }
//               placeholder="Current User"
//               className="bg-black border border-gray-700 rounded p-2 w-40"
//             />

//             <button
//               className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded"
//             >
//               Connect
//             </button>

//             <span className="text-yellow-400">
//               {status}
//             </span>

//           </div>

//         </div>

//         {/* Send Notification */}

//         <div className="bg-[#111827] rounded-lg p-5 border border-gray-700 mt-6">

//           <h2 className="text-xl font-semibold mb-4">
//             Send Notification
//           </h2>

//           <div className="flex flex-col gap-4">

//             <input
//               value={receiverId}
//               onChange={(e) =>
//                 setReceiverId(
//                   e.target.value
//                 )
//               }
//               placeholder="Receiver User ID"
//               className="bg-black border border-gray-700 rounded p-3"
//             />

//             <textarea
//               value={message}
//               onChange={(e) =>
//                 setMessage(
//                   e.target.value
//                 )
//               }
//               placeholder="Enter Message"
//               rows={4}
//               className="bg-black border border-gray-700 rounded p-3"
//             />

//             <button
//               className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded w-fit"
//             >
//               Send
//             </button>

//           </div>

//         </div>

//         {/* Notifications */}

//         <div className="bg-[#111827] rounded-lg p-5 border border-gray-700 mt-6">

//           <h2 className="text-xl font-semibold mb-4">
//             Notifications
//           </h2>

//           {

//             notifications.length === 0 ? (

//               <p className="text-gray-400">

//                 No Notifications Yet

//               </p>

//             ) : (

//               notifications.map(
//                 (notification, index) => (

//                   <div
//                     key={index}
//                     className="bg-[#1f2937] border-l-4 border-green-500 rounded p-4 mb-4"
//                   >

//                     <h3 className="font-bold">

//                       NEW EVENT

//                     </h3>

//                     <p>

//                       {notification}

//                     </p>

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

// export default Notification;
// import { useState } from "react";
// import MainLayout from "../../layouts/MainLayout";

// // import {
// //   connectWebSocket,
// //   disconnectWebSocket,
// // } from "../../services/websocketService";
// import {
//   connectNotification,
//   disconnectNotification,
//   sendNotification,
// } from "../../services/notificationService";

// function Notification() {
//   const [currentUser, setCurrentUser] =
//     useState("1");

//   const [receiverId, setReceiverId] =
//     useState("");

//   const [message, setMessage] =
//     useState("");

//   const [status, setStatus] =
//     useState("Disconnected");

//   const [notifications, setNotifications] =
//     useState<string[]>([]);

//   const handleConnect = () => {
//     connectNotification(
//       Number(currentUser),

//       (data) => {
//         const entityName =
//           data.employeeName ||
//           data.materialName ||
//           data.manufacturerName ||
//           data.supplierName ||
//           data.storeName ||
//           "Unknown";

//         const event =
//           data.event.replaceAll("_", " ");

//         setNotifications((prev) => [
//           `${event} : ${entityName}`,
//           ...prev,
//         ]);
//       },

//       () => {
//         setStatus("Connected");
//       }
//     );
//   };

//   const handleDisconnect = () => {
//     disconnectNotification();
//     setStatus("Disconnected");
//   };

//   const handleSend = () => {

//   if (!receiverId || !message) {

//     alert("Please enter Receiver ID and Message");

//     return;

//   }

//   sendNotification({

//     senderId: Number(currentUser),

//     receiverId: Number(receiverId),

//     message: message

//   });

//   setMessage("");

// };

//   return (
//     <MainLayout>
//       <div>
//         <h1 className="text-3xl font-bold mb-6">
//           Notification Service
//         </h1>

//         {/* Connection */}

//         <div className="bg-[#111827] rounded-lg p-5 border border-gray-700">

//           <h2 className="text-xl font-semibold mb-4">
//             Connection
//           </h2>

//           <div className="flex gap-4 items-center">

//             <input
//               value={currentUser}
//               onChange={(e) =>
//                 setCurrentUser(e.target.value)
//               }
//               placeholder="Current User"
//               className="bg-black border border-gray-700 rounded p-2 w-40"
//             />

//             <button
//               onClick={handleConnect}
//               className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded"
//             >
//               Connect
//             </button>

//             <button
//               onClick={handleDisconnect}
//               className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded"
//             >
//               Disconnect
//             </button>

//             <span
//               className={
//                 status === "Connected"
//                   ? "text-green-400"
//                   : "text-yellow-400"
//               }
//             >
//               {status}
//             </span>

//           </div>

//         </div>

//         {/* Send Notification */}

//         <div className="bg-[#111827] rounded-lg p-5 border border-gray-700 mt-6">

//           <h2 className="text-xl font-semibold mb-4">
//             Send Notification
//           </h2>

//           <div className="flex flex-col gap-4">

//             <input
//               value={receiverId}
//               onChange={(e) =>
//                 setReceiverId(e.target.value)
//               }
//               placeholder="Receiver User ID"
//               className="bg-black border border-gray-700 rounded p-3"
//             />

//             <textarea
//               value={message}
//               onChange={(e) =>
//                 setMessage(e.target.value)
//               }
//               placeholder="Enter Message"
//               rows={4}
//               className="bg-black border border-gray-700 rounded p-3"
//             />

//             <button
//               className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded w-fit"
//             >
//               Send
//             </button>

//           </div>

//         </div>

//         {/* Notifications */}

//         <div className="bg-[#111827] rounded-lg p-5 border border-gray-700 mt-6">

//           <h2 className="text-xl font-semibold mb-4">
//             Notifications
//           </h2>

//           {notifications.length === 0 ? (

//             <p className="text-gray-400">
//               No Notifications Yet
//             </p>

//           ) : (

//             notifications.map(
//               (notification, index) => (

//                 <div
//                   key={index}
//                   className="bg-[#1f2937] border-l-4 border-green-500 rounded p-4 mb-4"
//                 >

//                   <h3 className="font-bold">
//                     NEW EVENT
//                   </h3>

//                   <p>
//                     {notification}
//                   </p>

//                 </div>

//               )
//             )

//           )}

//         </div>

//       </div>
//     </MainLayout>
//   );
// }

// export default Notification;
import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

import {
  connectNotification,
  disconnectNotification,
  sendNotification,
} from "../../services/notificationService";

function Notification() {

  const [currentUser, setCurrentUser] =
    useState("1");

  const [receiverId, setReceiverId] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [status, setStatus] =
    useState("Disconnected");

  const [notifications, setNotifications] =
    useState<string[]>([]);

  const handleConnect = () => {

    connectNotification(

      Number(currentUser),

      (data) => {

        console.log("Received:", data);

        // Manual Notification
        if (data.message) {

          setNotifications((prev) => [

            `From User ${data.senderId} : ${data.message}`,

            ...prev,

          ]);

        }

        // RabbitMQ Event Notification
        else if (data.event) {

          const entityName =

            data.employeeName ||

            data.materialName ||

            data.manufacturerName ||

            data.supplierName ||

            data.storeName ||

            "Unknown";

          const event =
            data.event.replaceAll(
              "_",
              " "
            );

          setNotifications((prev) => [

            `${event} : ${entityName}`,

            ...prev,

          ]);

        }

      }

    );

    setStatus("Connected");

  };

  const handleDisconnect = () => {

    disconnectNotification();

    setStatus("Disconnected");

  };

  const handleSend = () => {

    if (
      !receiverId ||
      !message
    ) {

      alert(
        "Please enter Receiver ID and Message"
      );

      return;

    }

    sendNotification({

      senderId:
        Number(currentUser),

      receiverId:
        Number(receiverId),

      message,

    });

    setMessage("");

  };

  return (

    <MainLayout>

      <div>

        <h1 className="text-3xl font-bold mb-6">

          Notification Service

        </h1>

        {/* Connection */}

        <div className="bg-[#111827] rounded-lg p-5 border border-gray-700">

          <h2 className="text-xl font-semibold mb-4">

            Connection

          </h2>

          <div className="flex gap-4 items-center">

            <input

              value={currentUser}

              onChange={(e) =>

                setCurrentUser(
                  e.target.value
                )

              }

              placeholder="Current User"

              className="bg-black border border-gray-700 rounded p-2 w-40"

            />

            <button

              onClick={handleConnect}

              className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded"

            >

              Connect

            </button>

            <button

              onClick={handleDisconnect}

              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded"

            >

              Disconnect

            </button>

            <span

              className={
                status === "Connected"

                  ? "text-green-400"

                  : "text-yellow-400"

              }

            >

              {status}

            </span>

          </div>

        </div>

        {/* Send */}

        <div className="bg-[#111827] rounded-lg p-5 border border-gray-700 mt-6">

          <h2 className="text-xl font-semibold mb-4">

            Send Notification

          </h2>

          <div className="flex flex-col gap-4">

            <input

              value={receiverId}

              onChange={(e) =>

                setReceiverId(
                  e.target.value
                )

              }

              placeholder="Receiver User ID"

              className="bg-black border border-gray-700 rounded p-3"

            />

            <textarea

              value={message}

              onChange={(e) =>

                setMessage(
                  e.target.value
                )

              }

              placeholder="Enter Message"

              rows={4}

              className="bg-black border border-gray-700 rounded p-3"

            />

            <button

              onClick={handleSend}

              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded w-fit"

            >

              Send

            </button>

          </div>

        </div>

        {/* Notifications */}

        <div className="bg-[#111827] rounded-lg p-5 border border-gray-700 mt-6">

          <h2 className="text-xl font-semibold mb-4">

            Notifications

          </h2>

          {

            notifications.length === 0 ? (

              <p className="text-gray-400">

                No Notifications Yet

              </p>

            ) : (

              notifications.map(

                (notification, index) => (

                  <div

                    key={index}

                    className="bg-[#1f2937] border-l-4 border-green-500 rounded p-4 mb-4"

                  >

                    <h3 className="font-bold">

                      NEW EVENT

                    </h3>

                    <p>

                      {notification}

                    </p>

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

export default Notification;