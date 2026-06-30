// package com.demo.notification.service;

// import com.demo.notification.entity.Notification;
// import com.demo.notification.repository.NotificationRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.time.LocalDateTime;
// import java.util.List;
// import java.time.LocalDateTime;
// import org.springframework.messaging.simp.SimpMessagingTemplate;
// import com.demo.notification.dto.NotificationMessage;

// @Service
// public class NotificationService {

//     @Autowired
//     private NotificationRepository notificationRepository;

//     @Autowired
//     private SimpMessagingTemplate messagingTemplate;

//     public Notification saveNotification(Notification notification) {

//     if(notification.getCreatedAt() == null) {
//         notification.setCreatedAt(LocalDateTime.now());
//     }

//     return notificationRepository.save(notification);
// }

//     public List<Notification> getAllNotifications() {
//         return notificationRepository.findAll();
//     }

//     public void deleteNotification(Long id) {
//     notificationRepository.deleteById(id);
// }

// public Notification updateNotification(Long id, Notification updatedNotification) {

//     Notification existingNotification =
//             notificationRepository.findById(id).orElse(null);

//     if (existingNotification != null) {

//         existingNotification.setTitle(updatedNotification.getTitle());
//         existingNotification.setMessage(updatedNotification.getMessage());

//         return notificationRepository.save(existingNotification);
//     }

//     return null;
// }

// public void sendRealtimeNotification(NotificationMessage message) {

//     messagingTemplate.convertAndSend(
//             "/topic/notifications/" + message.getUserId(),
//             message
//     );
// }


// }
package com.demo.notification.service;

import com.demo.notification.entity.Notification;
import com.demo.notification.repository.NotificationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    public Notification saveNotification(Notification notification) {

        return notificationRepository.save(notification);
    }

    public List<Notification> getAllNotifications() {

        return notificationRepository.findAll();
    }

    public void deleteNotification(Long id) {

        notificationRepository.deleteById(id);
    }

    public Notification updateNotification(
            Long id,
            Notification updatedNotification
    ) {

        Notification existingNotification =
                notificationRepository.findById(id).orElse(null);

        if (existingNotification != null) {

            existingNotification.setSenderId(
                    updatedNotification.getSenderId()
            );

            existingNotification.setReceiverId(
                    updatedNotification.getReceiverId()
            );

            existingNotification.setMessage(
                    updatedNotification.getMessage()
            );

            return notificationRepository.save(existingNotification);
        }

        return null;
    }
}