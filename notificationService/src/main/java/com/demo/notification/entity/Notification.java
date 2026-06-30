// package com.demo.notification.entity;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import java.time.LocalDateTime;

// @Entity
// public class Notification {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String title;

//     private String message;

//     private LocalDateTime createdAt;

//     public Notification() {
//     }

//     public Notification(String title, String message) {
//     this.title = title;
//     this.message = message;
//     this.createdAt = LocalDateTime.now();
// }

//     public Long getId() {
//         return id;
//     }

//     public String getTitle() {
//         return title;
//     }

//     public String getMessage() {
//         return message;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public void setTitle(String title) {
//         this.title = title;
//     }

//     public void setMessage(String message) {
//         this.message = message;
//     }

//     public LocalDateTime getCreatedAt() {
//     return createdAt;
// }

// public void setCreatedAt(LocalDateTime createdAt) {
//     this.createdAt = createdAt;
// }




// }

package com.demo.notification.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long senderId;

    private Long receiverId;

    private String message;

    public Notification() {
    }

    public Notification(Long senderId, Long receiverId, String message) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public Long getSenderId() {
        return senderId;
    }

    public void setSenderId(Long senderId) {
        this.senderId = senderId;
    }

    public Long getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(Long receiverId) {
        this.receiverId = receiverId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}