// // // import SockJS from "sockjs-client";
// // // import { Client } from "@stomp/stompjs";

// // // let stompClient: Client | null = null;

// // // const SOCKET_URL = "http://localhost:8081/ws";

// // // export interface NotificationMessage {

// // //     senderId: number;

// // //     receiverId: number;

// // //     message: string;

// // // }

// // // export function connectNotification(

// // //     userId: number,

// // //     onMessage: (message: any) => void

// // // ) {

// // //     if (stompClient?.connected) {

// // //         return;

// // //     }

// // //     const socket = new SockJS(SOCKET_URL);

// // //     stompClient = new Client({

// // //         webSocketFactory: () => socket,

// // //         reconnectDelay: 5000,

// // //         debug: (str) => {

// // //             console.log(str);

// // //         }

// // //     });

// // //     stompClient.onConnect = () => {

// // //         console.log("WebSocket Connected");

// // //         stompClient?.subscribe(

// // //             `/topic/notifications/${userId}`,

// // //             (message) => {

// // //                 const body = JSON.parse(message.body);

// // //                 onMessage(body);

// // //             }

// // //         );

// // //     };

// // //     stompClient.onStompError = (frame) => {

// // //         console.error(frame);

// // //     };

// // //     stompClient.activate();

// // // }

// // // export function disconnectNotification() {

// // //     stompClient?.deactivate();

// // // }

// // // export function sendNotification(

// // //     notification: NotificationMessage

// // // ) {

// // //     if (!stompClient?.connected) {

// // //         alert("WebSocket not connected");

// // //         return;

// // //     }

// // //     stompClient.publish({

// // //         destination: "/app/sendMessage",

// // //         body: JSON.stringify(notification)

// // //     });

// // // }
// // import SockJS from "sockjs-client";
// // import { Client } from "@stomp/stompjs";

// // let stompClient: Client | null = null;

// // const SOCKET_URL = "http://localhost:8081/ws";
// // const API_URL = "http://localhost:8081/notifications";

// // export interface NotificationMessage {

// //     senderId: number;

// //     receiverId: number;

// //     message: string;

// // }

// // export function connectNotification(

// //     userId: number,

// //     onMessage: (message: NotificationMessage) => void

// // ) {

// //     if (stompClient?.connected) {

// //         return;

// //     }

// //     const socket = new SockJS(SOCKET_URL);

// //     stompClient = new Client({

// //         webSocketFactory: () => socket,

// //         reconnectDelay: 5000,

// //         debug: (str) => {

// //             console.log(str);

// //         }

// //     });

// //     stompClient.onConnect = () => {

// //         console.log("WebSocket Connected");

// //         stompClient?.subscribe(

// //             `/topic/notifications/${userId}`,

// //             (message) => {

// //                 onMessage(

// //                     JSON.parse(message.body)

// //                 );

// //             }

// //         );

// //     };

// //     stompClient.onStompError = (frame) => {

// //         console.error(frame);

// //     };

// //     stompClient.activate();

// // }

// // export function disconnectNotification() {

// //     stompClient?.deactivate();

// // }

// // export async function sendNotification(

// //     notification: NotificationMessage

// // ) {

// //     const response = await fetch(API_URL, {

// //         method: "POST",

// //         headers: {

// //             "Content-Type": "application/json"

// //         },

// //         body: JSON.stringify(notification)

// //     });

// //     if (!response.ok) {

// //         throw new Error(

// //             "Failed to send notification"

// //         );

// //     }

// //     return await response.json();

// // }
// // import SockJS from "sockjs-client";
// // import { Client } from "@stomp/stompjs";

// // let stompClient: Client | null = null;

// // const SOCKET_URL = "http://localhost:8081/ws";

// // export interface NotificationMessage {
// //   senderId: number;
// //   receiverId: number;
// //   message: string;
// // }

// // export function connectNotification(
// //   userId: number,
// //   onMessage: (message: any) => void
// // ) {

// //   if (stompClient?.connected) {
// //     return;
// //   }

// //   const socket = new SockJS(SOCKET_URL);

// //   stompClient = new Client({

// //     webSocketFactory: () => socket,

// //     reconnectDelay: 5000,

// //     debug: (msg) => console.log(msg)

// //   });

// //   stompClient.onConnect = () => {

// //     console.log("WebSocket Connected");

// //     stompClient?.subscribe(

// //       `/topic/notifications/${userId}`,

// //       (message) => {

// //         onMessage(JSON.parse(message.body));

// //       }

// //     );

// //   };

// //   stompClient.onStompError = (frame) => {

// //     console.error(frame);

// //   };

// //   stompClient.activate();

// // }

// // export function disconnectNotification() {

// //   stompClient?.deactivate();

// // }

// // export function sendNotification(
// //   notification: NotificationMessage
// // ) {

// //   if (!stompClient?.connected) {

// //     console.log("WebSocket not connected");

// //     return;

// //   }

// //   stompClient.publish({

// //     destination: "/app/sendMessage",

// //     body: JSON.stringify(notification)

// //   });

// // }
// // import SockJS from "sockjs-client";
// // import { Client } from "@stomp/stompjs";

// // let stompClient: Client | null = null;

// // const SOCKET_URL = "http://localhost:8081/ws";

// // export interface NotificationMessage {
// //   senderId: number;
// //   receiverId: number;
// //   message: string;
// // }

// // export function connectNotification(
// //   userId: number,
// //   onMessage: (message: any) => void
// // ) {

// //   if (stompClient?.connected) {
// //     console.log("Already Connected");
// //     return;
// //   }

// //   console.log("Creating WebSocket...");

// //   const socket = new SockJS(SOCKET_URL);

// //   stompClient = new Client({

// //     webSocketFactory: () => socket,

// //     reconnectDelay: 5000,

// //     debug: (msg) => console.log(msg),

// //   });

// //   stompClient.onConnect = () => {

// //     console.log("✅ WebSocket Connected");

// //     console.log("Subscribing to:", `/topic/notifications/${userId}`);

// //     stompClient?.subscribe(

// //       `/topic/notifications/${userId}`,

// //       (message) => {

// //         console.log("Notification Received:", message.body);

// //         onMessage(JSON.parse(message.body));

// //       }

// //     );

// //   };

// //   stompClient.onStompError = (frame) => {

// //     console.error("STOMP ERROR:", frame);

// //   };

// //   stompClient.activate();

// // }

// // export function disconnectNotification() {

// //   stompClient?.deactivate();

// //   console.log("Disconnected");

// // }

// // export function sendNotification(
// //   notification: NotificationMessage
// // ) {

// //   console.log("Trying to send...");

// //   console.log("Connected:", stompClient?.connected);

// //   if (!stompClient?.connected) {

// //     console.log("❌ WebSocket not connected");

// //     return;

// //   }

// //   console.log("Sending:", notification);

// //   stompClient.publish({

// //     destination: "/app/sendMessage",

// //     body: JSON.stringify(notification),

// //   });

// // }
// import SockJS from "sockjs-client";
// import { Client } from "@stomp/stompjs";

// let stompClient: Client | null = null;

// const SOCKET_URL =
//   "http://localhost:8081/ws";

// export interface NotificationMessage {

//   senderId: number;

//   receiverId: number;

//   message: string;

// }

// // export interface IndentMessage {

// //   senderId: number;

// //   senderName: string;

// //   receiverId: number;

// //   itemName: string;

// //   quantity: number;

// //   priority: string;

// //   timestamp: string;

// // }
// // export interface IndentMessage {
// //   senderId: number;
// //   senderName: string;
// //   receiverId: number;
// //   itemName: string;
// //   quantity: number;
// //   priority: string;
// //   timestamp: string;
// //   status: string;
// // }
// export interface IndentMessage {

//   indentId: string;

//   senderId: number;

//   senderName: string;

//   receiverId: number;

//   itemName: string;

//   quantity: number;

//   priority: string;

//   timestamp: string;

//   status: string;

// }

// export function connectNotification(

//   userId: number,

//   onMessage: (message: any) => void,

//   onIndent?: (indent: IndentMessage) => void

// ) {

//   if (stompClient?.connected) {

//     console.log(
//       "Already Connected"
//     );

//     return;

//   }

//   const socket =
//     new SockJS(SOCKET_URL);

//   stompClient =
//     new Client({

//       webSocketFactory: () =>
//         socket,

//       reconnectDelay: 5000,

//       debug: (msg) =>
//         console.log(msg),

//     });

//   stompClient.onConnect =
//     () => {

//       console.log(
//         "✅ Connected"
//       );

//       // Notification Subscribe

//       // stompClient?.subscribe(

//       //   `/topic/notifications/${userId}`,

//       //   (message) => {

//       //     onMessage(

//       //       JSON.parse(
//       //         message.body
//       //       )

//       //     );

//       //   }

//       // );
// //       stompClient?.subscribe(
// //   `/topic/notifications/${userId}`,
// //   (message) => {

// //     console.log(
// //       "NOTIFICATION RECEIVED:",
// //       message.body
// //     );

// //     onMessage(
// //       JSON.parse(message.body)
// //     );

// //   }
// // );
// stompClient?.subscribe(
//   `/topic/notifications/${userId}`,
//   (message) => {

//     try {

//       console.log(
//         "NOTIFICATION RECEIVED:",
//         message.body
//       );

//       onMessage(
//         JSON.parse(message.body)
//       );

//     } catch (e) {

//       console.error(
//         "NOTIFICATION ERROR",
//         e
//       );

//     }

//   }
// );

//       // Indent Subscribe

//       // stompClient?.subscribe(

//       //   `/topic/indent/${userId}`,

//       //   (message) => {

//       //     if (onIndent) {

//       //       onIndent(

//       //         JSON.parse(
//       //           message.body
//       //         )

//       //       );

//       //     }

//       //   }

//       // );
// //       stompClient?.subscribe(

// //   `/topic/indent/${userId}`,

// //   (message) => {

// //     console.log(
// //       "INDENT RECEIVED",
// //       message.body
// //     );

// //     if (onIndent) {

// //       onIndent(
// //         JSON.parse(message.body)
// //       );

// //     }

// //   }

// // );
// stompClient?.subscribe(
//   `/topic/indent/${userId}`,
//   (message) => {

//     try {

//       console.log(
//         "INDENT RECEIVED",
//         message.body
//       );

//       if (onIndent) {

//         onIndent(
//           JSON.parse(message.body)
//         );

//       }

//     } catch (e) {

//       console.error(
//         "INDENT ERROR",
//         e
//       );

//     }

//   }
// );

//     };

//   stompClient.activate();

// }

// export function disconnectNotification() {

//   stompClient?.deactivate();

// }

// export function sendNotification(

//   notification: NotificationMessage

// ) {

//   if (!stompClient?.connected) {

//     console.log(
//       "Not Connected"
//     );

//     return;

//   }

//   stompClient.publish({

//     destination:
//       "/app/sendMessage",

//     body: JSON.stringify(
//       notification
//     ),

//   });

// }

// // export function sendIndent(

// //   indent: IndentMessage

// // ) {

// //   if (!stompClient?.connected) {

// //     console.log(
// //       "Not Connected"
// //     );

// //     return;

// //   }

// //   stompClient.publish({

// //     destination:
// //       "/app/sendIndent",

// //     body: JSON.stringify(
// //       indent
// //     ),

// //   });

// // }
// export function sendIndent(
//   indent: IndentMessage
// ) {

//   console.log(
//     "INDENT SENDING:",
//     indent
//   );

//   if (!stompClient?.connected) {

//     console.log(
//       "Not Connected"
//     );

//     return;

//   }

//   stompClient.publish({

//     destination:
//       "/app/sendIndent",

//     body: JSON.stringify(
//       indent
//     ),

//   });

  

// }

// export function approveIndent(
//   indent: IndentMessage
// ) {

//   stompClient?.publish({

//     destination:
//       "/app/approveIndent",

//     body: JSON.stringify(
//       indent
//     ),

//   });

// }

// export function rejectIndent(
//   indent: IndentMessage
// ) {

//   stompClient?.publish({

//     destination:
//       "/app/rejectIndent",

//     body: JSON.stringify(
//       indent
//     ),

//   });

// }
// // import SockJS from "sockjs-client";
// // import { Client } from "@stomp/stompjs";

// // let stompClient: Client | null = null;

// // const SOCKET_URL = "http://localhost:8081/ws";

// // export interface NotificationMessage {

// //     senderId: number;

// //     receiverId: number;

// //     message: string;

// // }

// // export function connectNotification(

// //     userId: number,

// //     onMessage: (message: any) => void

// // ) {

// //     if (stompClient?.connected) {

// //         return;

// //     }

// //     const socket = new SockJS(SOCKET_URL);

// //     stompClient = new Client({

// //         webSocketFactory: () => socket,

// //         reconnectDelay: 5000,

// //         debug: (str) => {

// //             console.log(str);

// //         }

// //     });

// //     stompClient.onConnect = () => {

// //         console.log("WebSocket Connected");

// //         stompClient?.subscribe(

// //             `/topic/notifications/${userId}`,

// //             (message) => {

// //                 const body = JSON.parse(message.body);

// //                 onMessage(body);

// //             }

// //         );

// //     };

// //     stompClient.onStompError = (frame) => {

// //         console.error(frame);

// //     };

// //     stompClient.activate();

// // }

// // export function disconnectNotification() {

// //     stompClient?.deactivate();

// // }

// // export function sendNotification(

// //     notification: NotificationMessage

// // ) {

// //     if (!stompClient?.connected) {

// //         alert("WebSocket not connected");

// //         return;

// //     }

// //     stompClient.publish({

// //         destination: "/app/sendMessage",

// //         body: JSON.stringify(notification)

// //     });

// // }
// import SockJS from "sockjs-client";
// import { Client } from "@stomp/stompjs";

// let stompClient: Client | null = null;

// const SOCKET_URL = "http://localhost:8081/ws";
// const API_URL = "http://localhost:8081/notifications";

// export interface NotificationMessage {

//     senderId: number;

//     receiverId: number;

//     message: string;

// }

// export function connectNotification(

//     userId: number,

//     onMessage: (message: NotificationMessage) => void

// ) {

//     if (stompClient?.connected) {

//         return;

//     }

//     const socket = new SockJS(SOCKET_URL);

//     stompClient = new Client({

//         webSocketFactory: () => socket,

//         reconnectDelay: 5000,

//         debug: (str) => {

//             console.log(str);

//         }

//     });

//     stompClient.onConnect = () => {

//         console.log("WebSocket Connected");

//         stompClient?.subscribe(

//             `/topic/notifications/${userId}`,

//             (message) => {

//                 onMessage(

//                     JSON.parse(message.body)

//                 );

//             }

//         );

//     };

//     stompClient.onStompError = (frame) => {

//         console.error(frame);

//     };

//     stompClient.activate();

// }

// export function disconnectNotification() {

//     stompClient?.deactivate();

// }

// export async function sendNotification(

//     notification: NotificationMessage

// ) {

//     const response = await fetch(API_URL, {

//         method: "POST",

//         headers: {

//             "Content-Type": "application/json"

//         },

//         body: JSON.stringify(notification)

//     });

//     if (!response.ok) {

//         throw new Error(

//             "Failed to send notification"

//         );

//     }

//     return await response.json();

// }
// import SockJS from "sockjs-client";
// import { Client } from "@stomp/stompjs";

// let stompClient: Client | null = null;

// const SOCKET_URL = "http://localhost:8081/ws";

// export interface NotificationMessage {
//   senderId: number;
//   receiverId: number;
//   message: string;
// }

// export function connectNotification(
//   userId: number,
//   onMessage: (message: any) => void
// ) {

//   if (stompClient?.connected) {
//     return;
//   }

//   const socket = new SockJS(SOCKET_URL);

//   stompClient = new Client({

//     webSocketFactory: () => socket,

//     reconnectDelay: 5000,

//     debug: (msg) => console.log(msg)

//   });

//   stompClient.onConnect = () => {

//     console.log("WebSocket Connected");

//     stompClient?.subscribe(

//       `/topic/notifications/${userId}`,

//       (message) => {

//         onMessage(JSON.parse(message.body));

//       }

//     );

//   };

//   stompClient.onStompError = (frame) => {

//     console.error(frame);

//   };

//   stompClient.activate();

// }

// export function disconnectNotification() {

//   stompClient?.deactivate();

// }

// export function sendNotification(
//   notification: NotificationMessage
// ) {

//   if (!stompClient?.connected) {

//     console.log("WebSocket not connected");

//     return;

//   }

//   stompClient.publish({

//     destination: "/app/sendMessage",

//     body: JSON.stringify(notification)

//   });

// }
// import SockJS from "sockjs-client";
// import { Client } from "@stomp/stompjs";

// let stompClient: Client | null = null;

// const SOCKET_URL = "http://localhost:8081/ws";

// export interface NotificationMessage {
//   senderId: number;
//   receiverId: number;
//   message: string;
// }

// export function connectNotification(
//   userId: number,
//   onMessage: (message: any) => void
// ) {

//   if (stompClient?.connected) {
//     console.log("Already Connected");
//     return;
//   }

//   console.log("Creating WebSocket...");

//   const socket = new SockJS(SOCKET_URL);

//   stompClient = new Client({

//     webSocketFactory: () => socket,

//     reconnectDelay: 5000,

//     debug: (msg) => console.log(msg),

//   });

//   stompClient.onConnect = () => {

//     console.log("✅ WebSocket Connected");

//     console.log("Subscribing to:", `/topic/notifications/${userId}`);

//     stompClient?.subscribe(

//       `/topic/notifications/${userId}`,

//       (message) => {

//         console.log("Notification Received:", message.body);

//         onMessage(JSON.parse(message.body));

//       }

//     );

//   };

//   stompClient.onStompError = (frame) => {

//     console.error("STOMP ERROR:", frame);

//   };

//   stompClient.activate();

// }

// export function disconnectNotification() {

//   stompClient?.deactivate();

//   console.log("Disconnected");

// }

// export function sendNotification(
//   notification: NotificationMessage
// ) {

//   console.log("Trying to send...");

//   console.log("Connected:", stompClient?.connected);

//   if (!stompClient?.connected) {

//     console.log("❌ WebSocket not connected");

//     return;

//   }

//   console.log("Sending:", notification);

//   stompClient.publish({

//     destination: "/app/sendMessage",

//     body: JSON.stringify(notification),

//   });

// }
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

let stompClient: Client | null = null;

const SOCKET_URL =
  "http://localhost:8081/ws";

export interface NotificationMessage {

  senderId: number;

  receiverId: number;

  message: string;

}

// export interface IndentMessage {

//   senderId: number;

//   senderName: string;

//   receiverId: number;

//   itemName: string;

//   quantity: number;

//   priority: string;

//   timestamp: string;

// }
// export interface IndentMessage {
//   senderId: number;
//   senderName: string;
//   receiverId: number;
//   itemName: string;
//   quantity: number;
//   priority: string;
//   timestamp: string;
//   status: string;
// }
export interface IndentMessage {

  indentId: string;

  senderId: number;

  senderName: string;

  receiverId: number;

  itemName: string;

  quantity: number;

  priority: string;

  timestamp: string;

  status: string;

}

export function connectNotification(

  userId: number,

  onMessage: (message: any) => void,

  onIndent?: (indent: IndentMessage) => void

) {

  if (stompClient?.connected) {

    console.log(
      "Already Connected"
    );

    return;

  }

  const socket =
    new SockJS(SOCKET_URL);

  stompClient =
    new Client({

      webSocketFactory: () =>
        socket,

      reconnectDelay: 5000,

      debug: (msg) =>
        console.log(msg),

    });

  stompClient.onConnect =
    () => {

      console.log(
        "✅ Connected"
      );

      // Notification Subscribe

      // stompClient?.subscribe(

      //   `/topic/notifications/${userId}`,

      //   (message) => {

      //     onMessage(

      //       JSON.parse(
      //         message.body
      //       )

      //     );

      //   }

      // );
      stompClient?.subscribe(
  `/topic/notifications/${userId}`,
  (message) => {

    console.log(
      "NOTIFICATION RECEIVED:",
      message.body
    );

    onMessage(
      JSON.parse(message.body)
    );

  }
);

      // Indent Subscribe

      // stompClient?.subscribe(

      //   `/topic/indent/${userId}`,

      //   (message) => {

      //     if (onIndent) {

      //       onIndent(

      //         JSON.parse(
      //           message.body
      //         )

      //       );

      //     }

      //   }

      // );
      stompClient?.subscribe(

  `/topic/indent/${userId}`,

  (message) => {

    console.log(
      "INDENT RECEIVED",
      message.body
    );

    if (onIndent) {

      onIndent(
        JSON.parse(message.body)
      );

    }

  }

);

    };

  stompClient.activate();

}

export function disconnectNotification() {

  stompClient?.deactivate();

}

export function sendNotification(

  notification: NotificationMessage

) {

  if (!stompClient?.connected) {

    console.log(
      "Not Connected"
    );

    return;

  }

  stompClient.publish({

    destination:
      "/app/sendMessage",

    body: JSON.stringify(
      notification
    ),

  });

}

// export function sendIndent(

//   indent: IndentMessage

// ) {

//   if (!stompClient?.connected) {

//     console.log(
//       "Not Connected"
//     );

//     return;

//   }

//   stompClient.publish({

//     destination:
//       "/app/sendIndent",

//     body: JSON.stringify(
//       indent
//     ),

//   });

// }
export function sendIndent(
  indent: IndentMessage
) {

  console.log(
    "INDENT SENDING:",
    indent
  );

  if (!stompClient?.connected) {

    console.log(
      "Not Connected"
    );

    return;

  }

  stompClient.publish({

    destination:
      "/app/sendIndent",

    body: JSON.stringify(
      indent
    ),

  });

  

}

export function approveIndent(
  indent: IndentMessage
) {

  stompClient?.publish({

    destination:
      "/app/approveIndent",

    body: JSON.stringify(
      indent
    ),

  });

}

export function rejectIndent(
  indent: IndentMessage
) {

  stompClient?.publish({

    destination:
      "/app/rejectIndent",

    body: JSON.stringify(
      indent
    ),

  });

}