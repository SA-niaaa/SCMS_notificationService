// import SockJS from "sockjs-client";
// import { Client } from "@stomp/stompjs";

// let stompClient: Client | null = null;

// const SOCKET_URL = "http://localhost:8081/ws";

// export function connectWebSocket(

//     userId: number,

//     onMessage: (message: any) => void,

//     onConnected?: () => void

// ) {

//     if (stompClient?.connected) {

//         return;

//     }

//     const socket = new SockJS(SOCKET_URL);

//     stompClient = new Client({

//         webSocketFactory: () => socket,

//         reconnectDelay: 5000,

//         debug: (msg) => console.log(msg),

//     });

//     stompClient.onConnect = () => {

//         console.log("WebSocket Connected");

//         stompClient?.subscribe(

//             `/topic/notifications/${userId}`,

//             (message) => {

//                 const body = JSON.parse(message.body);

//                 onMessage(body);

//             }

//         );

//         if (onConnected) {

//             onConnected();

//         }

//     };

//     stompClient.onDisconnect = () => {

//         console.log("WebSocket Disconnected");

//     };

//     stompClient.onStompError = (frame) => {

//         console.error(frame);

//     };

//     stompClient.activate();

// }

// export function disconnectWebSocket() {

//     stompClient?.deactivate();

// }

import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

let stompClient: Client | null = null;

const SOCKET_URL = "http://localhost:8081/ws";

export function connectWebSocket(

    userId: number,

    onMessage: (message: any) => void,

    onConnected?: () => void

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

        console.log("✅ WebSocket Connected");

        stompClient?.subscribe(

            `/topic/notifications/${userId}`,

            (message) => {

                const body = JSON.parse(message.body);

                console.log("Notification Received :", body);

                onMessage(body);

            }

        );

        onConnected?.();

    };

    stompClient.onDisconnect = () => {

        console.log("❌ WebSocket Disconnected");

    };

    stompClient.onStompError = (frame) => {

        console.error("STOMP Error :", frame);

    };

    stompClient.activate();

}

export function disconnectWebSocket() {

    stompClient?.deactivate();

    stompClient = null;

}