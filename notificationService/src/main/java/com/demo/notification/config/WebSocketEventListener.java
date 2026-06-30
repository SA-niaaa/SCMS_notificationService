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

//     }

// }
package com.demo.notification.config;

import com.demo.notification.service.OnlineUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Component
public class WebSocketEventListener {

    @Autowired
    private OnlineUserService onlineUserService;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @EventListener
    public void handleWebSocketConnectListener(
            SessionConnectEvent event
    ) {

        System.out.println(
                "A User Connected"
        );

    }

    @EventListener
    public void handleWebSocketDisconnectListener(
            SessionDisconnectEvent event
    ) {

        System.out.println(
                "A User Disconnected"
        );

        // We'll remove the user later after
        // mapping SessionId -> UserId

    }

}