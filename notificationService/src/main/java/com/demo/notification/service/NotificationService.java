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