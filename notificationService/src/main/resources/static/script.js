// // // const API_URL = "http://localhost:8081/notifications";

// // // async function loadNotifications() {

// // //     const response = await fetch(API_URL + "/all");

// // //     const data = await response.json();

// // //     const container = document.getElementById("notifications");

// // //     container.innerHTML = "";

// // //     data.forEach(notification => {

// // //         container.innerHTML += `
// // //             <div class="notification">
// // //                 <h3>${notification.title}</h3>
// // //                 <p>${notification.message}</p>

// // //                 <button onclick="deleteNotification(${notification.id})">
// // //                     Delete
// // //                 </button>
// // //             </div>
// // //         `;
// // //     });
// // // }

// // // async function addNotification() {

// // //     const title = document.getElementById("title").value;

// // //     const message = document.getElementById("message").value;

// // //     await fetch(API_URL, {

// // //         method: "POST",

// // //         headers: {
// // //             "Content-Type": "application/json"
// // //         },

// // //         body: JSON.stringify({
// // //             title,
// // //             message
// // //         })
// // //     });

// // //     loadNotifications();
// // // }

// // // async function deleteNotification(id) {

// // //     await fetch(API_URL + "/" + id, {
// // //         method: "DELETE"
// // //     });

// // //     loadNotifications();
// // // }

// // // loadNotifications();

// // let stompClient = null;

// // let currentUserId = null;

// // function connectUser() {

// //     currentUserId = document.getElementById("currentUser").value;

// //     const socket = new SockJS('/ws');

// //     stompClient = Stomp.over(socket);

// //     stompClient.connect({}, function () {

// //         console.log("Connected");

// //         document.getElementById("status").innerText =
// //             "WebSocket Connected";

// //         // stompClient.subscribe(
// //         //     '/topic/notifications/' + currentUserId,

// //         //     function (notification) {

// //         //         const data = JSON.parse(notification.body);

// //         //         showNotification(data.message);
// //         //     }
// //         // );
// //         stompClient.subscribe(
// //     '/topic/notifications/1',

// //     // function (notification) {

// //     //     const data = JSON.parse(notification.body);

// //     //     console.log("Notification Received:", data);

// //     //     showNotification(
// //     //         `${data.event} : ${data.supplierName}`
// //     //     );
// //     // }
// //     function(notification) {

// //     console.log(
// //         "NOTIFICATION RECEIVED"
// //     );

// //     console.log(
// //         notification.body
// //     );

// //     const data =
// //         JSON.parse(notification.body);

// //     console.log(data);

// // }
// // );
// //     });
// // }

// // function sendNotification() {

// //     const receiverId =
// //         document.getElementById("targetUserId").value;

// //     const message =
// //         document.getElementById("message").value;

// //     const notification = {

// //         senderId: currentUserId,

// //         receiverId: receiverId,

// //         message: message
// //     };

// //     stompClient.send(
// //         "/app/sendMessage",
// //         {},
// //         JSON.stringify(notification)
// //     );
// // }

// // function showNotification(message) {

// //     const container =
// //         document.getElementById("notifications");

// //     container.innerHTML += `

// //         <div class="notification">
// //             <h3>NEW MESSAGE</h3>
// //             <p>${message}</p>
// //         </div>

// //     `;
// // }
// // //     container.innerHTML += `

// // //         <div class="notification">
// // //             <h3>NEW MESSAGE</h3>
// // //             <p>${message}</p>
// // //         </div>

// // //     `;
// // // }
// let stompClient = null;

// let currentUserId = null;

// function connectUser() {

//     currentUserId =
//         document.getElementById("currentUser").value;

//     const socket =
//         new SockJS('/ws');

//     stompClient =
//         Stomp.over(socket);

//     stompClient.connect({}, function () {

//         console.log("Connected");

//         document.getElementById("status").innerText =
//             "WebSocket Connected";

//         stompClient.subscribe(
//             '/topic/notifications/1',

//             function(notification) {

//                 console.log(
//                     "NOTIFICATION RECEIVED"
//                 );

//                 console.log(
//                     notification.body
//                 );

//                 const data =
//                     JSON.parse(
//                         notification.body
//                     );

//                 console.log(data);

//                 showNotification(
//                     `${data.event} : ${data.supplierName}`
//                 );
//             }
//         );
//     });
// }

// function sendNotification() {

//     const receiverId =
//         document.getElementById("targetUserId").value;

//     const message =
//         document.getElementById("message").value;

//     const notification = {

//         senderId: currentUserId,

//         receiverId: receiverId,

//         message: message
//     };

//     stompClient.send(
//         "/app/sendMessage",
//         {},
//         JSON.stringify(notification)
//     );
// }

// function showNotification(message) {

//     const container =
//         document.getElementById(
//             "notifications"
//         );

//     container.innerHTML += `
//         <div class="notification">
//             <h3>NEW EVENT</h3>
//             <p>${message}</p>
//         </div>
//     `;
// }
// let stompClient = null;

// let currentUserId = null;

// function connectUser() {

//     currentUserId =
//         document.getElementById("currentUser").value;

//     const socket =
//         new SockJS('/ws');

//     stompClient =
//         Stomp.over(socket);

//     stompClient.connect({}, function () {

//         console.log("Connected");

//         document.getElementById("status").innerText =
//             "WebSocket Connected";

//         stompClient.subscribe(
//             "/topic/notifications/1",

//             function (notification) {

//                 console.log(
//                     "NOTIFICATION RECEIVED"
//                 );

//                 console.log(
//                     notification.body
//                 );

//                 const data =
//                     JSON.parse(
//                         notification.body
//                     );

//                 console.log(data);

//                 showNotification(
//                     `${data.event} : ${data.supplierName}`
//                 );
//             }
//         );
//     });
// }

// function sendNotification() {

//     const receiverId =
//         document.getElementById("targetUserId").value;

//     const message =
//         document.getElementById("message").value;

//     const notification = {

//         senderId: currentUserId,

//         receiverId: receiverId,

//         message: message
//     };

//     stompClient.send(
//         "/app/sendMessage",
//         {},
//         JSON.stringify(notification)
//     );
// }

// function showNotification(message) {

//     console.log(
//         "showNotification called"
//     );

//     const container =
//         document.getElementById(
//             "notifications"
//         );

//     console.log(
//         "Container:",
//         container
//     );

//     container.innerHTML += `
//         <div style="
//             background:#1e293b;
//             color:white;
//             padding:12px;
//             margin-top:10px;
//             border-radius:8px;
//             border-left:5px solid #22c55e;
//         ">
//             <h3>NEW EVENT</h3>
//             <p>${message}</p>
//         </div>
//     `;
// }
// let stompClient = null;

// let currentUserId = null;

// function connectUser() {

//     currentUserId =
//         document.getElementById("currentUser").value;

//     const socket =
//         new SockJS('/ws');

//     stompClient =
//         Stomp.over(socket);

//     stompClient.connect({}, function () {

//         console.log("Connected");

//         document.getElementById("status").innerText =
//             "WebSocket Connected";

//         stompClient.subscribe(
//             "/topic/notifications/1",

//             function (notification) {

//                 console.log(
//                     "NOTIFICATION RECEIVED"
//                 );

//                 console.log(
//                     notification.body
//                 );

//                 const data =
//                     JSON.parse(
//                         notification.body
//                     );

//                 console.log(data);

//                 // const entityName =
//                 //     data.supplierName ||
//                 //     data.storeName ||
//                 //     data.employeeName ||
//                 //     data.materialName ||
//                 //     data.manufacturerName ||
//                 //     "Unknown";

//                 // showNotification(
//                 //     `${data.event} : ${entityName}`
//                 // );
//                 const entityName =
//     data.employeeName ||
//     data.materialName ||
//     data.supplierName ||
//     data.storeName ||
//     "Unknown";

// const eventText =
//     data.event
//         .replaceAll("_", " ");

// showNotification(
//     `${eventText} : ${entityName}`
// );
//             }
//         );
//     });
// }

// function sendNotification() {

//     const receiverId =
//         document.getElementById("targetUserId").value;

//     const message =
//         document.getElementById("message").value;

//     const notification = {

//         senderId: currentUserId,

//         receiverId: receiverId,

//         message: message
//     };

//     stompClient.send(
//         "/app/sendMessage",
//         {},
//         JSON.stringify(notification)
//     );
// }

// function showNotification(message) {

//     console.log(
//         "showNotification called"
//     );

//     const container =
//         document.getElementById(
//             "notifications"
//         );

//     console.log(
//         "Container:",
//         container
//     );

//     container.innerHTML =
//         `
//         <div style="
//             background:#1e293b;
//             color:white;
//             padding:12px;
//             margin-top:10px;
//             border-radius:8px;
//             border-left:5px solid #22c55e;
//         ">
//             <h3>NEW EVENT</h3>
//             <p>${message}</p>
//         </div>
//         `
//         +
//         container.innerHTML;

//     // Keep only latest 10 notifications

//     const notifications =
//         container.children;

//     while (
//         notifications.length > 10
//     ) {
//         container.removeChild(
//             notifications[
//                 notifications.length - 1
//             ]
//         );
//     }
// }
// let stompClient = null;

// let currentUserId = null;

// function connectUser() {

//     currentUserId =
//         document.getElementById(
//             "currentUser"
//         ).value;

//     const socket =
//         new SockJS("/ws");

//     stompClient =
//         Stomp.over(socket);

//     stompClient.connect(
//         {},
//         function () {

//             console.log(
//                 "Connected"
//             );

//             document.getElementById(
//                 "status"
//             ).innerText =
//                 "WebSocket Connected";

//             stompClient.subscribe(
//                 "/topic/notifications/1",

//                 function (
//                     notification
//                 ) {

//                     console.log(
//                         "NOTIFICATION RECEIVED"
//                     );

//                     console.log(
//                         notification.body
//                     );

//                     const data =
//                         JSON.parse(
//                             notification.body
//                         );

//                     console.log(
//                         data
//                     );

//                     const entityName =

//                         data.employeeName ||

//                         data.materialName ||

//                         data.manufacturerName ||

//                         data.supplierName ||

//                         data.storeName ||

//                         "Unknown";

//                     const eventText =
//                         data.event
//                             .replaceAll(
//                                 "_",
//                                 " "
//                             );

//                     showNotification(
//                         `${eventText} : ${entityName}`
//                     );

//                 }
//             );

//         }
//     );

// }

// function sendNotification() {

//     const receiverId =
//         document.getElementById(
//             "targetUserId"
//         ).value;

//     const message =
//         document.getElementById(
//             "message"
//         ).value;

//     const notification = {

//         senderId:
//             currentUserId,

//         receiverId:
//             receiverId,

//         message:
//             message

//     };

//     stompClient.send(
//         "/app/sendMessage",
//         {},
//         JSON.stringify(
//             notification
//         )
//     );

// }

// function showNotification(
//     message
// ) {

//     console.log(
//         "showNotification called"
//     );

//     const container =
//         document.getElementById(
//             "notifications"
//         );

//     container.innerHTML =

//         `
//         <div style="
//             background:#1e293b;
//             color:white;
//             padding:12px;
//             margin-top:10px;
//             border-radius:8px;
//             border-left:5px solid #22c55e;
//         ">
//             <h3>NEW EVENT</h3>
//             <p>${message}</p>
//         </div>
//         `

//         +

//         container.innerHTML;

//     const notifications =
//         container.children;

//     while (
//         notifications.length > 10
//     ) {

//         container.removeChild(
//             notifications[
//                 notifications.length - 1
//             ]
//         );

//     }

// }
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

import {
  Home,
  Lock,
  Bell,
} from "lucide-react";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const openNotifications = () => {
    navigate("/notifications");
  };

  return (
    <div
      className="
      h-16
      bg-[#1f2937]
      border-b
      border-gray-700
      px-6
      flex
      items-center
      justify-between
      shadow
      "
    >
      {/* Left Side */}

      <div>
        <h1
          className="
          text-xl
          font-bold
          text-white
          "
        >
          Supply Chain Management System
        </h1>

        <p
          className="
          text-xs
          text-gray-400
          "
        >
          Inventory & Resource Management
        </p>
      </div>

      {/* Right Side */}

      <div
        className="
        flex
        items-center
        gap-3
        "
      >
        <div
          className="
          text-right
          "
        >
          <p
            className="
            text-white
            font-medium
            "
          >
            Admin
          </p>

          <p
            className="
            text-xs
            text-gray-400
            "
          >
            System Administrator
          </p>
        </div>

        {/* Avatar */}

        <div
          className="
          w-10
          h-10
          rounded-full
          bg-green-600
          flex
          items-center
          justify-center
          font-bold
          text-white
          "
        >
          A
        </div>

        {/* Notification */}

        <button
          onClick={openNotifications}
          className="
          relative
          bg-yellow-500
          hover:bg-yellow-600
          p-2
          rounded
          "
        >
          <Bell size={18} />

          {/* Future Notification Count */}

          <span
            className="
            absolute
            -top-2
            -right-2
            bg-red-600
            text-white
            text-[10px]
            w-5
            h-5
            rounded-full
            flex
            items-center
            justify-center
            "
          >
            0
          </span>
        </button>

        {/* Home */}

        <button
          className="
          bg-blue-600
          hover:bg-blue-700
          p-2
          rounded
          "
        >
          <Home size={18} />
        </button>

        {/* Lock */}

        <button
          className="
          bg-gray-700
          hover:bg-gray-600
          p-2
          rounded
          "
        >
          <Lock size={18} />
        </button>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="
          bg-red-600
          hover:bg-red-700
          px-4
          py-2
          rounded
          text-white
          "
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;