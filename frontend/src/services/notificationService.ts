import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

let stompClient: Client | null = null;

const SOCKET_URL = "http://localhost:8081/ws";

export interface NotificationMessage {
  senderId: number;
  receiverId: number;
  message: string;
}

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
    console.log("Already Connected");
    return;
  }

  const socket = new SockJS(SOCKET_URL);

  stompClient = new Client({
    webSocketFactory: () => socket,
    reconnectDelay: 5000,
    debug: (msg) => console.log(msg),
  });

  stompClient.onConnect = () => {
    console.log("✅ Connected");

    // Notification Subscription
    stompClient?.subscribe(`/topic/notifications/${userId}`, (message) => {
      console.log("NOTIFICATION RECEIVED:", message.body);
      onMessage(JSON.parse(message.body));
    });

    // Indent Subscription
    stompClient?.subscribe(`/topic/indent/${userId}`, (message) => {
      console.log("INDENT RECEIVED", message.body);
      if (onIndent) {
        onIndent(JSON.parse(message.body));
      }
    });
  };

  stompClient.activate();
}

export function disconnectNotification() {
  stompClient?.deactivate();
}

export function sendNotification(notification: NotificationMessage) {
  if (!stompClient?.connected) {
    console.log("Not Connected");
    return;
  }

  stompClient.publish({
    destination: "/app/sendMessage",
    body: JSON.stringify(notification),
  });
}

export function sendIndent(indent: IndentMessage) {
  console.log("INDENT SENDING:", indent);

  if (!stompClient?.connected) {
    console.log("Not Connected");
    return;
  }

  stompClient.publish({
    destination: "/app/sendIndent",
    body: JSON.stringify(indent),
  });
}

export function approveIndent(indent: IndentMessage) {
  stompClient?.publish({
    destination: "/app/approveIndent",
    body: JSON.stringify(indent),
  });
}

export function rejectIndent(indent: IndentMessage) {
  stompClient?.publish({
    destination: "/app/rejectIndent",
    body: JSON.stringify(indent),
  });
}