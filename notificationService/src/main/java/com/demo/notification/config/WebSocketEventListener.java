// // // package com.demo.notification.config;

// // // import com.demo.notification.service.OnlineUserService;

// // // import org.springframework.beans.factory.annotation.Autowired;
// // // import org.springframework.context.event.EventListener;
// // // import org.springframework.messaging.simp.SimpMessagingTemplate;
// // // import org.springframework.stereotype.Component;
// // // import org.springframework.web.socket.messaging.SessionConnectEvent;
// // // import org.springframework.web.socket.messaging.SessionDisconnectEvent;

// // // @Component
// // // public class WebSocketEventListener {

// // //     @Autowired
// // //     private OnlineUserService onlineUserService;

// // //     @Autowired
// // //     private SimpMessagingTemplate messagingTemplate;

// // //     @EventListener
// // //     public void handleWebSocketConnectListener(
// // //             SessionConnectEvent event
// // //     ) {

// // //         System.out.println(
// // //                 "A User Connected"
// // //         );

// // //     }

// // //     @EventListener
// // //     public void handleWebSocketDisconnectListener(
// // //             SessionDisconnectEvent event
// // //     ) {

// // //         System.out.println(
// // //                 "A User Disconnected"
// // //         );

// // //     }

// // // }
// // package com.demo.notification.config;

// // import com.demo.notification.service.OnlineUserService;

// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.context.event.EventListener;
// // import org.springframework.messaging.simp.SimpMessagingTemplate;
// // import org.springframework.stereotype.Component;
// // import org.springframework.web.socket.messaging.SessionConnectEvent;
// // import org.springframework.web.socket.messaging.SessionDisconnectEvent;

// // @Component
// // public class WebSocketEventListener {

// //     @Autowired
// //     private OnlineUserService onlineUserService;

// //     @Autowired
// //     private SimpMessagingTemplate messagingTemplate;

// //     @EventListener
// //     public void handleWebSocketConnectListener(
// //             SessionConnectEvent event
// //     ) {

// //         System.out.println(
// //                 "A User Connected"
// //         );

// //     }

// //     @EventListener
// //     public void handleWebSocketDisconnectListener(
// //             SessionDisconnectEvent event
// //     ) {

// //         System.out.println(
// //                 "A User Disconnected"
// //         );

// //         // We'll remove the user later after
// //         // mapping SessionId -> UserId

// //     }

// // }
// // package com.demo.notification.config;

// // import com.demo.notification.service.OnlineUserService;

// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.context.event.EventListener;
// // import org.springframework.messaging.simp.SimpMessagingTemplate;
// // import org.springframework.stereotype.Component;
// // import org.springframework.web.socket.messaging.SessionConnectEvent;
// // import org.springframework.web.socket.messaging.SessionDisconnectEvent;

// // @Component
// // public class WebSocketEventListener {

// //     @Autowired
// //     private OnlineUserService onlineUserService;

// //     @Autowired
// //     private SimpMessagingTemplate messagingTemplate;

// //     @EventListener
// //     public void handleWebSocketConnectListener(
// //             SessionConnectEvent event
// //     ) {

// //         System.out.println(
// //                 "A User Connected"
// //         );

// //     }

// //     @EventListener
// //     public void handleWebSocketDisconnectListener(
// //             SessionDisconnectEvent event
// //     ) {

// //         System.out.println(
// //                 "A User Disconnected"
// //         );

// //     }

// // }
// package com.demo.notification.config;

// import com.demo.notification.service.OnlineUserService;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.event.EventListener;
// import org.springframework.messaging.simp.SimpMessagingTemplate;
// import org.springframework.stereotype.Component;
// import org.springframework.web.socket.messaging.SessionConnectEvent;
// import org.springframework.web.socket.messaging.SessionDisconnectEvent;

// @Component
// public class WebSocketEventListener {

//     @Autowired
//     private OnlineUserService onlineUserService;

//     @Autowired
//     private SimpMessagingTemplate messagingTemplate;

//     @EventListener
//     public void handleWebSocketConnectListener(
//             SessionConnectEvent event
//     ) {

//         System.out.println(
//                 "A User Connected"
//         );

//     }

//     @EventListener
//     public void handleWebSocketDisconnectListener(
//             SessionDisconnectEvent event
//     ) {

//         System.out.println(
//                 "A User Disconnected"
//         );

//         // We'll remove the user later after
//         // mapping SessionId -> UserId

//     }

// }
// package com.demo.notification.config;

// import com.demo.notification.service.OnlineUserService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.event.EventListener;
// import org.springframework.messaging.simp.SimpMessagingTemplate;
// import org.springframework.stereotype.Component;
// import org.springframework.web.socket.messaging.SessionConnectEvent;
// import org.springframework.web.socket.messaging.SessionDisconnectEvent;

// @Component
// public class WebSocketEventListener {

//     @Autowired
//     private OnlineUserService onlineUserService;

//     @Autowired
//     private SimpMessagingTemplate messagingTemplate;

//     @EventListener
//     public void handleWebSocketConnectListener(SessionConnectEvent event) {
//         System.out.println("A User Connected");
//     }

//     @EventListener
//     public void handleWebSocketDisconnectListener(SessionDisconnectEvent event) {
//         System.out.println("A User Disconnected");
//         // TODO: Map SessionId -> UserId to remove them from onlineUserService here
//     }
// }
package com.demo.notification.config;

import com.demo.notification.service.OnlineUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;
import org.springframework.web.socket.messaging.SessionSubscribeEvent;

import java.util.Map;

@Component
public class WebSocketEventListener {

    @Autowired
    private OnlineUserService onlineUserService;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @EventListener
    public void handleWebSocketSubscribeListener(SessionSubscribeEvent event) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());
        // Track connection attributes if needed when subscribing
    }

    @EventListener
    public void handleWebSocketDisconnectListener(SessionDisconnectEvent event) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());
        
        // Retrieve the map of session attributes
        Map<String, Object> sessionAttributes = headerAccessor.getSessionAttributes();
        
        if (sessionAttributes != null && sessionAttributes.containsKey("userId")) {
            Integer userId = (Integer) sessionAttributes.get("userId");
            
            System.out.println("Cleaning up disconnected User ID: " + userId);
            
            // 1. Remove from your core online tracking map service
            onlineUserService.removeUser(userId); 
            
            // 2. Instantly broadcast the fresh map to all remaining users
            messagingTemplate.convertAndSend("/topic/online-users", onlineUserService.getOnlineUsers());
        } else {
            System.out.println("A session disconnected without a mapped tracking User ID");
        }
    }
}