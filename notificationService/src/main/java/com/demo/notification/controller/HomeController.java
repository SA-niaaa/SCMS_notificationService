// // package com.demo.notification.controller;

// // import com.demo.notification.dto.NotificationMessage;
// // import com.demo.notification.entity.Notification;
// // import com.demo.notification.service.NotificationService;
// // import com.demo.notification.service.OnlineUserService;

// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.messaging.handler.annotation.MessageMapping;
// // import org.springframework.messaging.simp.SimpMessagingTemplate;
// // import org.springframework.web.bind.annotation.*;

// // import java.util.List;
// // import java.util.Map;

// // @RestController
// // @RequestMapping("/notifications")
// // public class HomeController {

// //     @Autowired
// //     private NotificationService notificationService;

// //     @Autowired
// //     private SimpMessagingTemplate messagingTemplate;

// //     @Autowired
// //     private OnlineUserService onlineUserService;

// //     @GetMapping
// //     public String home() {
// //         return "Spring Boot is running successfully!";
// //     }

// //     @PostMapping
// //     public Notification createNotification(
// //             @RequestBody Notification notification) {

// //         return notificationService.saveNotification(notification);
// //     }

// //     @GetMapping("/all")
// //     public List<Notification> getAllNotifications() {

// //         return notificationService.getAllNotifications();
// //     }

// //     @DeleteMapping("/{id}")
// //     public String deleteNotification(
// //             @PathVariable Long id) {

// //         notificationService.deleteNotification(id);

// //         return "Notification deleted successfully!";
// //     }

// //     @PutMapping("/{id}")
// //     public Notification updateNotification(

// //             @PathVariable Long id,

// //             @RequestBody Notification notification) {

// //         return notificationService.updateNotification(
// //                 id,
// //                 notification
// //         );
// //     }

// //     @MessageMapping("/sendMessage")
// //     public void sendNotification(
// //             NotificationMessage notificationMessage) {

// //         Notification notification = new Notification();

// //         notification.setSenderId(
// //                 notificationMessage.getSenderId());

// //         notification.setReceiverId(
// //                 notificationMessage.getReceiverId());

// //         notification.setMessage(
// //                 notificationMessage.getMessage());

// //         notificationService.saveNotification(notification);

// //         messagingTemplate.convertAndSend(

// //                 "/topic/notifications/"
// //                         + notificationMessage.getReceiverId(),

// //                 notificationMessage
// //         );
// //     }

// //     // ==============================
// //     // ONLINE USER CONNECT
// //     // ==============================

// //     @MessageMapping("/user/connect")
// //     public void connectUser(
// //             Map<String, Object> user) {

// //         Integer id =
// //                 (Integer) user.get("id");

// //         String name =
// //                 (String) user.get("name");

// //         onlineUserService.addUser(id, name);

// //         messagingTemplate.convertAndSend(

// //                 "/topic/online-users",

// //                 onlineUserService.getOnlineUsers()

// //         );

// //         System.out.println(
// //                 "Online User : "
// //                         + name
// //         );
// //     }

// // }

// // import com.demo.notification.dto.IndentMessage;
// package com.demo.notification.controller;
// import com.demo.notification.dto.IndentMessage;

// import com.demo.notification.service.IndentService;
// import com.demo.notification.dto.NotificationMessage;
// import com.demo.notification.entity.Notification;
// import com.demo.notification.service.NotificationService;
// import com.demo.notification.service.OnlineUserService;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.messaging.handler.annotation.MessageMapping;
// import org.springframework.messaging.simp.SimpMessagingTemplate;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// import java.util.Map;

// @RestController
// @RequestMapping("/notifications")
// public class HomeController {

//     @Autowired
//     private NotificationService notificationService;

//     @Autowired
//     private SimpMessagingTemplate messagingTemplate;

//     @Autowired
//     private OnlineUserService onlineUserService;

//     @Autowired
// private IndentService indentService;

//     @GetMapping
//     public String home() {
//         return "Spring Boot is running successfully!";
//     }

//     @PostMapping
//     public Notification createNotification(
//             @RequestBody Notification notification) {

//         return notificationService.saveNotification(notification);
//     }

//     @GetMapping("/all")
//     public List<Notification> getAllNotifications() {

//         return notificationService.getAllNotifications();
//     }

//     @DeleteMapping("/{id}")
//     public String deleteNotification(
//             @PathVariable Long id) {

//         notificationService.deleteNotification(id);

//         return "Notification deleted successfully!";
//     }

//     @PutMapping("/{id}")
//     public Notification updateNotification(

//             @PathVariable Long id,

//             @RequestBody Notification notification) {

//         return notificationService.updateNotification(
//                 id,
//                 notification
//         );
//     }

//     // ==========================
//     // NORMAL USER NOTIFICATION
//     // ==========================

//     @MessageMapping("/sendMessage")
//     public void sendNotification(
//             NotificationMessage notificationMessage) {
//                 System.out.println("NOTIFICATION RECEIVED");

//         Notification notification = new Notification();

//         notification.setSenderId(
//                 notificationMessage.getSenderId());

//         notification.setReceiverId(
//                 notificationMessage.getReceiverId());

//         notification.setMessage(
//                 notificationMessage.getMessage());

//         notificationService.saveNotification(notification);

//         messagingTemplate.convertAndSend(

//                 "/topic/notifications/"
//                         + notificationMessage.getReceiverId(),

//                 notificationMessage
//         );
//     }

//     // ==========================
//     // USER CONNECT
//     // ==========================

//     @MessageMapping("/user/connect")
// public void connectUser(
//         Map<String, Object> user) {

//     Integer id =
//             (Integer) user.get("id");

//     String name =
//             (String) user.get("name");

//     onlineUserService.addUser(
//             id,
//             name
//     );

//     System.out.println(
//             "BROADCASTING : "
//             + onlineUserService.getOnlineUsers()
//     );

//     messagingTemplate.convertAndSend(
//             "/topic/online-users",
//             onlineUserService.getOnlineUsers()
//     );

// }
//     // ==========================
//     // USER DISCONNECT
//     // ==========================

//     @MessageMapping("/user/disconnect")
//     public void disconnectUser(
//             Integer userId) {

//         onlineUserService.removeUser(userId);

//         messagingTemplate.convertAndSend(
//                 "/topic/online-users",
//                 onlineUserService.getOnlineUsers()
//         );

//         System.out.println("Disconnected : " + userId);
//     }


//     // ==========================
// // SEND INDENT
// // ==========================

// // @MessageMapping("/sendIndent")
// // public void sendIndent(
// //         IndentMessage indent) {

// //     System.out.println("========== NEW INDENT ==========");

// //     System.out.println(
// //             "From : " + indent.getSenderName());

// //     System.out.println(
// //             "Item : " + indent.getItemName());

// //     System.out.println(
// //             "Qty : " + indent.getQuantity());

// //     System.out.println(
// //             "Priority : " + indent.getPriority());

// //     System.out.println(
// //             "To User : " + indent.getReceiverId());

// //     messagingTemplate.convertAndSend(

// //             "/topic/indent/"
// //                     + indent.getReceiverId(),

// //             indent

// //     );
// // }
// // @MessageMapping("/sendIndent")
// // public void sendIndent(
// //         IndentMessage indent) {

// //     System.out.println("========== INDENT RECEIVED ==========");
// //     System.out.println(indent.getSenderName());

// //     messagingTemplate.convertAndSend(
// //             "/topic/indent/" +
// //                     indent.getReceiverId(),
// //             indent
// //     );
// // }
// // @MessageMapping("/sendIndent")
// // public void sendIndent(
// //         IndentMessage indent) {

// //     System.out.println("========== INDENT RECEIVED ==========");
// //     System.out.println("Sender : " + indent.getSenderName());
// //     System.out.println("Time   : " + indent.getTimestamp());

// //     messagingTemplate.convertAndSend(
// //             "/topic/indent/" +
// //                     indent.getReceiverId(),
// //             indent
// //     );
// // }
// @MessageMapping("/sendIndent")
// public void sendIndent(
//         IndentMessage indent) {

//     System.out.println("========== INDENT RECEIVED ==========");
//     System.out.println("Sender : " + indent.getSenderName());
//     System.out.println("Time   : " + indent.getTimestamp());

//     indentService.saveIndent(
//             indent
//     );

//     messagingTemplate.convertAndSend(
//             "/topic/indent/" +
//                     indent.getReceiverId(),
//             indent
//     );
// }

// // @MessageMapping("/approveIndent")
// // public void approveIndent(
// //         IndentMessage indent) {

// //     indent.setStatus("Approved");

// //     messagingTemplate.convertAndSend(
// //             "/topic/indent/" +
// //                     indent.getSenderId(),
// //             indent
// //     );
// // }
// @MessageMapping("/approveIndent")
// public void approveIndent(
//         IndentMessage indent) {

//     indent.setStatus(
//             "Approved"
//     );

//     indentService.updateStatus(
//             indent.getIndentId(),
//             "Approved"
//     );

//     messagingTemplate.convertAndSend(
//             "/topic/indent/" +
//                     indent.getSenderId(),
//             indent
//     );
// }

// // @MessageMapping("/rejectIndent")
// // public void rejectIndent(
// //         IndentMessage indent) {

// //     indent.setStatus("Rejected");

// //     messagingTemplate.convertAndSend(
// //             "/topic/indent/" +
// //                     indent.getSenderId(),
// //             indent
// //     );
// // }
// @MessageMapping("/rejectIndent")
// public void rejectIndent(
//         IndentMessage indent) {

//     indent.setStatus(
//             "Rejected"
//     );

//     indentService.updateStatus(
//             indent.getIndentId(),
//             "Rejected"
//     );

//     messagingTemplate.convertAndSend(
//             "/topic/indent/" +
//                     indent.getSenderId(),
//             indent
//     );
// }

// }
// package com.demo.notification.controller;

// import com.demo.notification.dto.NotificationMessage;
// import com.demo.notification.entity.Notification;
// import com.demo.notification.service.NotificationService;
// import com.demo.notification.service.OnlineUserService;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.messaging.handler.annotation.MessageMapping;
// import org.springframework.messaging.simp.SimpMessagingTemplate;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// import java.util.Map;

// @RestController
// @RequestMapping("/notifications")
// public class HomeController {

//     @Autowired
//     private NotificationService notificationService;

//     @Autowired
//     private SimpMessagingTemplate messagingTemplate;

//     @Autowired
//     private OnlineUserService onlineUserService;

//     @GetMapping
//     public String home() {
//         return "Spring Boot is running successfully!";
//     }

//     @PostMapping
//     public Notification createNotification(
//             @RequestBody Notification notification) {

//         return notificationService.saveNotification(notification);
//     }

//     @GetMapping("/all")
//     public List<Notification> getAllNotifications() {

//         return notificationService.getAllNotifications();
//     }

//     @DeleteMapping("/{id}")
//     public String deleteNotification(
//             @PathVariable Long id) {

//         notificationService.deleteNotification(id);

//         return "Notification deleted successfully!";
//     }

//     @PutMapping("/{id}")
//     public Notification updateNotification(

//             @PathVariable Long id,

//             @RequestBody Notification notification) {

//         return notificationService.updateNotification(
//                 id,
//                 notification
//         );
//     }

//     @MessageMapping("/sendMessage")
//     public void sendNotification(
//             NotificationMessage notificationMessage) {

//         Notification notification = new Notification();

//         notification.setSenderId(
//                 notificationMessage.getSenderId());

//         notification.setReceiverId(
//                 notificationMessage.getReceiverId());

//         notification.setMessage(
//                 notificationMessage.getMessage());

//         notificationService.saveNotification(notification);

//         messagingTemplate.convertAndSend(

//                 "/topic/notifications/"
//                         + notificationMessage.getReceiverId(),

//                 notificationMessage
//         );
//     }

//     // ==============================
//     // ONLINE USER CONNECT
//     // ==============================

//     @MessageMapping("/user/connect")
//     public void connectUser(
//             Map<String, Object> user) {

//         Integer id =
//                 (Integer) user.get("id");

//         String name =
//                 (String) user.get("name");

//         onlineUserService.addUser(id, name);

//         messagingTemplate.convertAndSend(

//                 "/topic/online-users",

//                 onlineUserService.getOnlineUsers()

//         );

//         System.out.println(
//                 "Online User : "
//                         + name
//         );
//     }

// }

// import com.demo.notification.dto.IndentMessage;
package com.demo.notification.controller;
import com.demo.notification.dto.IndentMessage;

import com.demo.notification.service.IndentService;
import com.demo.notification.dto.NotificationMessage;
import com.demo.notification.entity.Notification;
import com.demo.notification.service.NotificationService;
import com.demo.notification.service.OnlineUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/notifications")
public class HomeController {

    @Autowired
    private NotificationService notificationService;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @Autowired
    private OnlineUserService onlineUserService;

    @Autowired
private IndentService indentService;

    @GetMapping
    public String home() {
        return "Spring Boot is running successfully!";
    }

    @PostMapping
    public Notification createNotification(
            @RequestBody Notification notification) {

        return notificationService.saveNotification(notification);
    }

    @GetMapping("/all")
    public List<Notification> getAllNotifications() {

        return notificationService.getAllNotifications();
    }

    @DeleteMapping("/{id}")
    public String deleteNotification(
            @PathVariable Long id) {

        notificationService.deleteNotification(id);

        return "Notification deleted successfully!";
    }

    @PutMapping("/{id}")
    public Notification updateNotification(

            @PathVariable Long id,

            @RequestBody Notification notification) {

        return notificationService.updateNotification(
                id,
                notification
        );
    }

    // ==========================
    // NORMAL USER NOTIFICATION
    // ==========================

    @MessageMapping("/sendMessage")
    public void sendNotification(
            NotificationMessage notificationMessage) {
                System.out.println("NOTIFICATION RECEIVED");

        Notification notification = new Notification();

        notification.setSenderId(
                notificationMessage.getSenderId());

        notification.setReceiverId(
                notificationMessage.getReceiverId());

        notification.setMessage(
                notificationMessage.getMessage());

        notificationService.saveNotification(notification);

        messagingTemplate.convertAndSend(

                "/topic/notifications/"
                        + notificationMessage.getReceiverId(),

                notificationMessage
        );
    }

    // ==========================
    // USER CONNECT
    // ==========================

    @MessageMapping("/user/connect")
    public void connectUser(
            Map<String, Object> user) {

        Integer id =
                (Integer) user.get("id");

        String name =
                (String) user.get("name");

        onlineUserService.addUser(id, name);

        messagingTemplate.convertAndSend(
                "/topic/online-users",
                onlineUserService.getOnlineUsers()
        );

        System.out.println("Connected : " + name);
    }

    // ==========================
    // USER DISCONNECT
    // ==========================

    @MessageMapping("/user/disconnect")
    public void disconnectUser(
            Integer userId) {

        onlineUserService.removeUser(userId);

        messagingTemplate.convertAndSend(
                "/topic/online-users",
                onlineUserService.getOnlineUsers()
        );

        System.out.println("Disconnected : " + userId);
    }


    // ==========================
// SEND INDENT
// ==========================

// @MessageMapping("/sendIndent")
// public void sendIndent(
//         IndentMessage indent) {

//     System.out.println("========== NEW INDENT ==========");

//     System.out.println(
//             "From : " + indent.getSenderName());

//     System.out.println(
//             "Item : " + indent.getItemName());

//     System.out.println(
//             "Qty : " + indent.getQuantity());

//     System.out.println(
//             "Priority : " + indent.getPriority());

//     System.out.println(
//             "To User : " + indent.getReceiverId());

//     messagingTemplate.convertAndSend(

//             "/topic/indent/"
//                     + indent.getReceiverId(),

//             indent

//     );
// }
// @MessageMapping("/sendIndent")
// public void sendIndent(
//         IndentMessage indent) {

//     System.out.println("========== INDENT RECEIVED ==========");
//     System.out.println(indent.getSenderName());

//     messagingTemplate.convertAndSend(
//             "/topic/indent/" +
//                     indent.getReceiverId(),
//             indent
//     );
// }
// @MessageMapping("/sendIndent")
// public void sendIndent(
//         IndentMessage indent) {

//     System.out.println("========== INDENT RECEIVED ==========");
//     System.out.println("Sender : " + indent.getSenderName());
//     System.out.println("Time   : " + indent.getTimestamp());

//     messagingTemplate.convertAndSend(
//             "/topic/indent/" +
//                     indent.getReceiverId(),
//             indent
//     );
// }
@MessageMapping("/sendIndent")
public void sendIndent(
        IndentMessage indent) {

    System.out.println("========== INDENT RECEIVED ==========");
    System.out.println("Sender : " + indent.getSenderName());
    System.out.println("Time   : " + indent.getTimestamp());

    indentService.saveIndent(
            indent
    );

    messagingTemplate.convertAndSend(
            "/topic/indent/" +
                    indent.getReceiverId(),
            indent
    );
}

// @MessageMapping("/approveIndent")
// public void approveIndent(
//         IndentMessage indent) {

//     indent.setStatus("Approved");

//     messagingTemplate.convertAndSend(
//             "/topic/indent/" +
//                     indent.getSenderId(),
//             indent
//     );
// }
@MessageMapping("/approveIndent")
public void approveIndent(
        IndentMessage indent) {

    indent.setStatus(
            "Approved"
    );

    indentService.updateStatus(
            indent.getIndentId(),
            "Approved"
    );

    messagingTemplate.convertAndSend(
            "/topic/indent/" +
                    indent.getSenderId(),
            indent
    );
}

// @MessageMapping("/rejectIndent")
// public void rejectIndent(
//         IndentMessage indent) {

//     indent.setStatus("Rejected");

//     messagingTemplate.convertAndSend(
//             "/topic/indent/" +
//                     indent.getSenderId(),
//             indent
//     );
// }
@MessageMapping("/rejectIndent")
public void rejectIndent(
        IndentMessage indent) {

    indent.setStatus(
            "Rejected"
    );

    indentService.updateStatus(
            indent.getIndentId(),
            "Rejected"
    );

    messagingTemplate.convertAndSend(
            "/topic/indent/" +
                    indent.getSenderId(),
            indent
    );
}

}

