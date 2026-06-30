// // // import SockJS from "sockjs-client";
// // // import { Client } from "@stomp/stompjs";

// // // let stompClient: Client | null = null;

// // // const SOCKET_URL = "http://localhost:8081/ws";

// // // export interface OnlineUser {

// // //     id: number;

// // //     name: string;

// // // }

// // // export function connectOnlineUsers(

// // //     userId: number,

// // //     userName: string,

// // //     onUsersChanged: (users: OnlineUser[]) => void

// // // ) {

// // //     if (stompClient?.connected) {

// // //         console.log("Already Connected");

// // //         return;

// // //     }

// // //     const socket = new SockJS(SOCKET_URL);

// // //     stompClient = new Client({

// // //         webSocketFactory: () => socket,

// // //         reconnectDelay: 5000,

// // //         debug: (msg) => console.log(msg),

// // //     });

// // //     stompClient.onConnect = () => {

// // //         console.log("Connected For Online Users");

// // //         stompClient?.publish({

// // //             destination: "/app/user/connect",

// // //             body: JSON.stringify({

// // //                 id: userId,

// // //                 name: userName

// // //             })

// // //         });

// // //         stompClient?.subscribe(

// // //             "/topic/online-users",

// // //             (message) => {

// // //                 const users = JSON.parse(message.body);

// // //                 onUsersChanged(users);

// // //             }

// // //         );

// // //     };

// // //     stompClient.activate();

// // // }

// // // export function disconnectOnlineUsers() {

// // //     stompClient?.deactivate();

// // // }
// // // import SockJS from "sockjs-client";
// // // import { Client } from "@stomp/stompjs";

// // // let stompClient: Client | null = null;

// // // const SOCKET_URL = "http://localhost:8081/ws";

// // // export interface OnlineUser {

// // //     id: number;

// // //     name: string;

// // // }

// // // export function connectOnlineUsers(

// // //     userId: number,

// // //     userName: string,

// // //     onUsersChanged: (users: OnlineUser[]) => void

// // // ) {

// // //     if (stompClient?.connected) {

// // //         return;

// // //     }

// // //     const socket = new SockJS(SOCKET_URL);

// // //     stompClient = new Client({

// // //         webSocketFactory: () => socket,

// // //         reconnectDelay: 5000,

// // //         debug: (msg) => console.log(msg)

// // //     });

// // //     stompClient.onConnect = () => {

// // //         console.log("Online User Connected");

// // //         stompClient?.subscribe(

// // //             "/topic/online-users",

// // //             (message) => {

// // //                 const users = JSON.parse(message.body);

// // //                 onUsersChanged(users);

// // //             }

// // //         );

// // //         stompClient?.publish({

// // //             destination: "/app/user/connect",

// // //             body: JSON.stringify({

// // //                 id: userId,

// // //                 name: userName

// // //             })

// // //         });

// // //     };

// // //     stompClient.onStompError = (frame) => {

// // //         console.error(frame);

// // //     };

// // //     stompClient.activate();

// // // }

// // // export function disconnectOnlineUsers() {

// // //     stompClient?.deactivate();

// // // }
// // // import SockJS from "sockjs-client";
// // // import { Client } from "@stomp/stompjs";

// // // let stompClient: Client | null = null;

// // // const SOCKET_URL = "http://localhost:8081/ws";

// // // export interface OnlineUser {
// // //   id: number;
// // //   name: string;
// // // }

// // // export function connectOnlineUsers(
// // //   userId: number,
// // //   userName: string,
// // //   onUsersChanged: (users: OnlineUser[]) => void
// // // ) {

// // //   if (stompClient?.connected) {
// // //     return;
// // //   }

// // //   const socket = new SockJS(SOCKET_URL);

// // //   stompClient = new Client({

// // //     webSocketFactory: () => socket,

// // //     reconnectDelay: 5000,

// // //     debug: (msg) => console.log(msg),

// // //   });

// // //   stompClient.onConnect = () => {

// // //     stompClient?.publish({

// // //       destination: "/app/user/connect",

// // //       body: JSON.stringify({

// // //         id: userId,

// // //         name: userName,

// // //       }),

// // //     });

// // //     stompClient?.subscribe(

// // //       "/topic/online-users",

// // //       (message) => {

// // //         const users = JSON.parse(
// // //           message.body
// // //         );

// // //         onUsersChanged(users);

// // //       }

// // //     );

// // //   };

// // //   stompClient.activate();

// // // }

// // // export function notifyUserDisconnect(
// // //   userId: number
// // // ) {

// // //   if (!stompClient?.connected) {
// // //     return;
// // //   }

// // //   stompClient.publish({

// // //     destination:
// // //       "/app/user/disconnect",

// // //     body: JSON.stringify(
// // //       userId
// // //     ),

// // //   });

// // // }

// // // export function disconnectOnlineUsers() {

// // //   stompClient?.deactivate();

// // // }
// // // import SockJS from "sockjs-client";
// // // import { Client } from "@stomp/stompjs";

// // // let stompClient: Client | null = null;

// // // const SOCKET_URL =
// // //   "http://localhost:8081/ws";

// // // export interface OnlineUser {
// // //   id: number;
// // //   name: string;
// // // }

// // // export function connectOnlineUsers(
// // //   userId: number,
// // //   userName: string,
// // //   onUsersChanged: (users: OnlineUser[]) => void
// // // ) {

// // //   if (stompClient?.connected) {
// // //     return;
// // //   }

// // //   const socket =
// // //     new SockJS(SOCKET_URL);

// // //   stompClient =
// // //     new Client({

// // //       webSocketFactory:
// // //         () => socket,

// // //       reconnectDelay: 5000,

// // //       debug: (msg) =>
// // //         console.log(msg),

// // //     });

// // //     stompClient.onStompError = (frame) => {

// // //   console.error(
// // //     "ONLINE USER STOMP ERROR",
// // //     frame
// // //   );

// // // };


// // // stompClient.onWebSocketError = (event) => {

// // //   console.error(
// // //     "ONLINE USER WS ERROR",
// // //     event
// // //   );

// // // };

// // //   stompClient.onConnect = () => {

// // //   console.log(
// // //     "WEBSOCKET CONNECTED",
// // //     userName
// // //   );

// // //   stompClient?.publish({

// // //     destination:
// // //       "/app/user/connect",

// // //     body: JSON.stringify({

// // //       id: userId,

// // //       name: userName,

// // //     }),

// // //   });

// // //   console.log(
// // //     "USER CONNECT SENT",
// // //     userName
// // //   );

// // //   stompClient?.subscribe(

// // //     "/topic/online-users",

// // //     (message) => {

// // //       console.log(
// // //         "ONLINE USERS RECEIVED",
// // //         message.body
// // //       );

// // //       const users =
// // //         JSON.parse(
// // //           message.body
// // //         );

// // //       onUsersChanged(users);

// // //     }

// // //   );

// // // };

// // //   stompClient.activate();

// // // }

// // // export function notifyUserDisconnect(
// // //   userId: number
// // // ) {

// // //   if (
// // //     !stompClient?.connected
// // //   ) {
// // //     return;
// // //   }

// // //   stompClient.publish({

// // //     destination:
// // //       "/app/user/disconnect",

// // //     body: JSON.stringify(
// // //       userId
// // //     ),

// // //   });

// // // }

// // // export function disconnectOnlineUsers() {

// // //   stompClient?.deactivate();

// // // }
// // import SockJS from "sockjs-client";
// // import { Client } from "@stomp/stompjs";

// // let stompClient: Client | null = null;

// // const SOCKET_URL =
// //   "http://localhost:8081/ws";

// // export interface OnlineUser {
// //   id: number;
// //   name: string;
// // }

// // export function connectOnlineUsers(
// //   userId: number,
// //   userName: string,
// //   onUsersChanged: (users: any) => void
// // ) {

// //   if (stompClient?.connected) {
// //     console.log(
// //       "ONLINE WS ALREADY CONNECTED"
// //     );
// //     return;
// //   }

// //   const socket =
// //     new SockJS(SOCKET_URL);

// //   stompClient =
// //     new Client({

// //       webSocketFactory:
// //         () => socket,

// //       reconnectDelay: 5000,

// //       debug: (msg) =>
// //         console.log(msg),

// //     });

// //   stompClient.onStompError =
// //     (frame) => {

// //       console.error(
// //         "ONLINE USER STOMP ERROR",
// //         frame
// //       );

// //     };

// //   stompClient.onWebSocketError =
// //     (event) => {

// //       console.error(
// //         "ONLINE USER WS ERROR",
// //         event
// //       );

// //     };

// //   stompClient.onConnect = () => {

// //     console.log(
// //       "WEBSOCKET CONNECTED",
// //       userName
// //     );

// //     stompClient?.subscribe(

// //       "/topic/online-users",

// //       (message) => {

// //         console.log(
// //           "ONLINE USERS RECEIVED",
// //           message.body
// //         );

// //         const users =
// //           JSON.parse(
// //             message.body
// //           );

// //         console.log(
// //           "BEFORE CALLBACK"
// //         );

// //         onUsersChanged(
// //           users
// //         );

// //         console.log(
// //           "AFTER CALLBACK"
// //         );

// //       }

// //     );

// //     stompClient?.publish({

// //       destination:
// //         "/app/user/connect",

// //       body: JSON.stringify({

// //         id: userId,

// //         name: userName,

// //       }),

// //     });

// //     console.log(
// //       "USER CONNECT SENT",
// //       userName
// //     );

// //   };

// //   stompClient.activate();

// // }

// // export function notifyUserDisconnect(
// //   userId: number
// // ) {

// //   if (
// //     !stompClient?.connected
// //   ) {
// //     return;
// //   }

// //   stompClient.publish({

// //     destination:
// //       "/app/user/disconnect",

// //     body: JSON.stringify(
// //       userId
// //     ),

// //   });

// // }

// // export function disconnectOnlineUsers() {

// //   stompClient?.deactivate();

// // }
// // import SockJS from "sockjs-client";
// // import { Client } from "@stomp/stompjs";

// // let stompClient: Client | null = null;

// // const SOCKET_URL = "http://localhost:8081/ws";

// // export interface OnlineUser {

// //     id: number;

// //     name: string;

// // }

// // export function connectOnlineUsers(

// //     userId: number,

// //     userName: string,

// //     onUsersChanged: (users: OnlineUser[]) => void

// // ) {

// //     if (stompClient?.connected) {

// //         console.log("Already Connected");

// //         return;

// //     }

// //     const socket = new SockJS(SOCKET_URL);

// //     stompClient = new Client({

// //         webSocketFactory: () => socket,

// //         reconnectDelay: 5000,

// //         debug: (msg) => console.log(msg),

// //     });

// //     stompClient.onConnect = () => {

// //         console.log("Connected For Online Users");

// //         stompClient?.publish({

// //             destination: "/app/user/connect",

// //             body: JSON.stringify({

// //                 id: userId,

// //                 name: userName

// //             })

// //         });

// //         stompClient?.subscribe(

// //             "/topic/online-users",

// //             (message) => {

// //                 const users = JSON.parse(message.body);

// //                 onUsersChanged(users);

// //             }

// //         );

// //     };

// //     stompClient.activate();

// // }

// // export function disconnectOnlineUsers() {

// //     stompClient?.deactivate();

// // }
// // import SockJS from "sockjs-client";
// // import { Client } from "@stomp/stompjs";

// // let stompClient: Client | null = null;

// // const SOCKET_URL = "http://localhost:8081/ws";

// // export interface OnlineUser {

// //     id: number;

// //     name: string;

// // }

// // export function connectOnlineUsers(

// //     userId: number,

// //     userName: string,

// //     onUsersChanged: (users: OnlineUser[]) => void

// // ) {

// //     if (stompClient?.connected) {

// //         return;

// //     }

// //     const socket = new SockJS(SOCKET_URL);

// //     stompClient = new Client({

// //         webSocketFactory: () => socket,

// //         reconnectDelay: 5000,

// //         debug: (msg) => console.log(msg)

// //     });

// //     stompClient.onConnect = () => {

// //         console.log("Online User Connected");

// //         stompClient?.subscribe(

// //             "/topic/online-users",

// //             (message) => {

// //                 const users = JSON.parse(message.body);

// //                 onUsersChanged(users);

// //             }

// //         );

// //         stompClient?.publish({

// //             destination: "/app/user/connect",

// //             body: JSON.stringify({

// //                 id: userId,

// //                 name: userName

// //             })

// //         });

// //     };

// //     stompClient.onStompError = (frame) => {

// //         console.error(frame);

// //     };

// //     stompClient.activate();

// // }

// // export function disconnectOnlineUsers() {

// //     stompClient?.deactivate();

// // }
// import SockJS from "sockjs-client";
// import { Client } from "@stomp/stompjs";

// let stompClient: Client | null = null;

// const SOCKET_URL = "http://localhost:8081/ws";

// export interface OnlineUser {
//   id: number;
//   name: string;
// }

// export function connectOnlineUsers(
//   userId: number,
//   userName: string,
//   onUsersChanged: (users: OnlineUser[]) => void
// ) {

//   if (stompClient?.connected) {
//     return;
//   }

//   const socket = new SockJS(SOCKET_URL);

//   stompClient = new Client({

//     webSocketFactory: () => socket,

//     reconnectDelay: 5000,

//     debug: (msg) => console.log(msg),

//   });

//   stompClient.onConnect = () => {

//     stompClient?.publish({

//       destination: "/app/user/connect",

//       body: JSON.stringify({

//         id: userId,

//         name: userName,

//       }),

//     });

//     stompClient?.subscribe(

//       "/topic/online-users",

//       (message) => {

//         const users = JSON.parse(
//           message.body
//         );

//         onUsersChanged(users);

//       }

//     );

//   };

//   stompClient.activate();

// }

// export function notifyUserDisconnect(
//   userId: number
// ) {

//   if (!stompClient?.connected) {
//     return;
//   }

//   stompClient.publish({

//     destination:
//       "/app/user/disconnect",

//     body: JSON.stringify(
//       userId
//     ),

//   });

// }

// export function disconnectOnlineUsers() {

//   stompClient?.deactivate();

// }
// import SockJS from "sockjs-client";
// import { Client } from "@stomp/stompjs";

// let stompClient: Client | null = null;

// const SOCKET_URL = "http://localhost:8081/ws";

// export interface OnlineUser {
//   id: number;
//   name: string;
// }

// export function connectOnlineUsers(
//   userId: number,
//   userName: string,
//   onUsersChanged: (users: OnlineUser[]) => void
// ) {
//   if (stompClient?.connected) {
//     return;
//   }

//   const socket = new SockJS(SOCKET_URL);

//   stompClient = new Client({
//     webSocketFactory: () => socket,
//     reconnectDelay: 5000,
//     debug: (msg) => console.log(msg),
//   });

//   stompClient.onConnect = () => {
//     stompClient?.publish({
//       destination: "/app/user/connect",
//       body: JSON.stringify({
//         id: userId,
//         name: userName,
//       }),
//     });

//     stompClient?.subscribe("/topic/online-users", (message) => {
//       const users = JSON.parse(message.body);
//       onUsersChanged(users);
//     });
//   };

//   stompClient.activate();
// }

// export function notifyUserDisconnect(userId: number) {
//   if (!stompClient?.connected) {
//     return;
//   }

//   stompClient.publish({
//     destination: "/app/user/disconnect",
//     body: JSON.stringify(userId),
//   });
// }

// export function disconnectOnlineUsers() {
//   stompClient?.deactivate();
// }
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

let stompClient: Client | null = null;

const SOCKET_URL = "http://localhost:8081/ws";

export interface OnlineUser {
  id: number;
  name: string;
}

export function connectOnlineUsers(
  userId: number,
  userName: string,
  onUsersChanged: (users: OnlineUser[]) => void
) {
  if (stompClient?.connected) {
    return;
  }

  const socket = new SockJS(SOCKET_URL);

  stompClient = new Client({
    webSocketFactory: () => socket,
    reconnectDelay: 5000,
    debug: (msg) => console.log(msg),
  });

  stompClient.onConnect = () => {
    stompClient?.publish({
      destination: "/app/user/connect",
      body: JSON.stringify({
        id: userId,
        name: userName,
      }),
    });

    stompClient?.subscribe("/topic/online-users", (message) => {
      const users = JSON.parse(message.body);
      onUsersChanged(users);
    });
  };

  stompClient.activate();
}

export function notifyUserDisconnect(userId: number) {
  if (!stompClient?.connected) {
    return;
  }

  stompClient.publish({
    destination: "/app/user/disconnect",
    body: JSON.stringify({ id: userId }),
  });
}

export function disconnectOnlineUsers(userId?: number) {
  if (stompClient?.connected && userId) {
    // Explicitly notify the backend right before disconnecting
    notifyUserDisconnect(userId);
  }
  stompClient?.deactivate();
  stompClient = null;
}