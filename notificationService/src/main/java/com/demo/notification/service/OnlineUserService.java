// package com.demo.notification.service;

// import org.springframework.stereotype.Service;

// import java.util.Map;
// import java.util.concurrent.ConcurrentHashMap;

// @Service
// public class OnlineUserService {

//     // userId -> userName
//     private final Map<Integer, String> onlineUsers =
//             new ConcurrentHashMap<>();

//     public void addUser(
//             Integer userId,
//             String userName
//     ) {

//         onlineUsers.put(
//                 userId,
//                 userName
//         );

//         System.out.println(
//                 "ONLINE : " + onlineUsers
//         );

//     }

//     public void removeUser(
//             Integer userId
//     ) {

//         onlineUsers.remove(userId);

//         System.out.println(
//                 "ONLINE : " + onlineUsers
//         );

//     }

//     public Map<Integer, String> getOnlineUsers() {

//         return onlineUsers;

//     }

// }
package com.demo.notification.service;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OnlineUserService {

    private final Map<Integer, String> onlineUsers =
            new ConcurrentHashMap<>();

    private final SimpMessagingTemplate messagingTemplate;

    public OnlineUserService(
            SimpMessagingTemplate messagingTemplate
    ) {
        this.messagingTemplate =
                messagingTemplate;
    }

    public void addUser(
            Integer userId,
            String userName
    ) {

        onlineUsers.put(
                userId,
                userName
        );

        System.out.println(
                "ONLINE : " + onlineUsers
        );

        messagingTemplate.convertAndSend(
                "/topic/online-users",
                onlineUsers
        );

    }

    public void removeUser(
            Integer userId
    ) {

        onlineUsers.remove(userId);

        System.out.println(
                "ONLINE : " + onlineUsers
        );

        messagingTemplate.convertAndSend(
                "/topic/online-users",
                onlineUsers
        );

    }

    public Map<Integer, String> getOnlineUsers() {

        return onlineUsers;

    }

}