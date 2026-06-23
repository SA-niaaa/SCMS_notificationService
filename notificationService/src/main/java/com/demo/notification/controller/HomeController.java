package com.demo.notification.controller;

import com.demo.notification.dto.NotificationMessage;
import com.demo.notification.entity.Notification;
import com.demo.notification.service.NotificationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notifications")
public class HomeController {

    @Autowired
    private NotificationService notificationService;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @GetMapping
    public String home() {
        return "Spring Boot is running successfully!";
    }

    @PostMapping
    public Notification createNotification(@RequestBody Notification notification) {
        return notificationService.saveNotification(notification);
    }

    @GetMapping("/all")
    public List<Notification> getAllNotifications() {
        return notificationService.getAllNotifications();
    }

    @DeleteMapping("/{id}")
    public String deleteNotification(@PathVariable Long id) {
        notificationService.deleteNotification(id);
        return "Notification deleted successfully!";
    }

    @PutMapping("/{id}")
    public Notification updateNotification(
            @PathVariable Long id,
            @RequestBody Notification notification) {

        return notificationService.updateNotification(id, notification);
    }

    @MessageMapping("/sendMessage")
    public void sendNotification(NotificationMessage notificationMessage) {

        Notification notification = new Notification();

        notification.setSenderId(notificationMessage.getSenderId());

        notification.setReceiverId(notificationMessage.getReceiverId());

        notification.setMessage(notificationMessage.getMessage());

        notificationService.saveNotification(notification);

        messagingTemplate.convertAndSend(
                "/topic/notifications/" + notificationMessage.getReceiverId(),
                notificationMessage
        );
    }
}