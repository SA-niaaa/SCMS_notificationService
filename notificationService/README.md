Realtime Notification System 🚀

A realtime user-specific notification system built using:

Spring Boot
PostgreSQL
WebSocket
STOMP
SockJS
HTML/CSS/JavaScript

This project allows users to send realtime notifications to specific users instantly without refreshing the page.

📌 Features

✅ Realtime notifications using WebSocket
✅ User-specific messaging
✅ PostgreSQL database integration
✅ REST APIs using Spring Boot
✅ STOMP + SockJS communication
✅ Dynamic frontend using HTML/CSS/JavaScript
✅ Multi-user browser testing
✅ Instant UI updates without refresh

🏗️ Project Architecture
Frontend (Browser)
        ↓
REST API (Spring Boot)
        ↓
Service Layer
        ↓
WebSocket Topic
        ↓
Specific User Receives Notification
⚙️ Technologies Used
Technology	Purpose
Spring Boot	Backend Framework
PostgreSQL	Database
WebSocket	Realtime Communication
STOMP	Messaging Protocol
SockJS	WebSocket Fallback
HTML/CSS/JS	Frontend
Maven	Dependency Management
📂 Project Structure
## 📁 Project Structure

```bash
notification_system/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── demo/
│   │   │           └── notification/
│   │   │
│   │   │               ├── config/
│   │   │               │   └── WebSocketConfig.java
│   │   │               │
│   │   │               ├── controller/
│   │   │               │   └── HomeController.java
│   │   │               │
│   │   │               ├── dto/
│   │   │               │   └── NotificationMessage.java
│   │   │               │
│   │   │               ├── entity/
│   │   │               │   └── Notification.java
│   │   │               │
│   │   │               ├── repository/
│   │   │               │   └── NotificationRepository.java
│   │   │               │
│   │   │               ├── service/
│   │   │               │   └── NotificationService.java
│   │   │               │
│   │   │               └── NotificationApplication.java
│   │
│   │   └── resources/
│   │       │
│   │       ├── static/
│   │       │   ├── index.html
│   │       │   ├── style.css
│   │       │   └── script.js
│   │       │
│   │       └── application.properties
│
├── pom.xml
│
└── README.md
🚀 How To Run The Project
1️⃣ Clone Repository

Open terminal and run:

git clone https://github.com/riteshkumar800/notification_system.git
2️⃣ Open Project
cd notification_system

Open in VS Code:

code .
3️⃣ Install PostgreSQL

Download PostgreSQL:

Windows / Mac / Linux

👉 https://www.postgresql.org/download/

4️⃣ Create Database

Open PostgreSQL terminal and run:

CREATE DATABASE notification_db;
5️⃣ Configure Database

Open:

src/main/resources/application.properties

Update:

spring.datasource.url=jdbc:postgresql://localhost:5432/notification_db

spring.datasource.username=postgres

spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update

spring.jpa.show-sql=true

Replace:

YOUR_PASSWORD

with your PostgreSQL password.

6️⃣ Install Java 17

Check Java version:

java -version

If Java is not installed:

👉 https://www.oracle.com/java/technologies/downloads/

OR

👉 https://jdk.java.net/17/

7️⃣ Run The Project
Mac/Linux
./mvnw spring-boot:run
Windows
mvnw.cmd spring-boot:run
8️⃣ Open Browser

Open:

http://localhost:8081
🧪 Realtime Testing

Open TWO browser tabs/windows.

Window 1

Current User:

1

Click:

Connect
Window 2

Current User:

2

Click:

Connect
Send Notification

From User 1:

Target User ID:

2

Message:

Hello User 2

Click:

Send Notification
✅ Expected Result

ONLY User 2 receives the notification instantly without page refresh.

📡 WebSocket Topics

Each user subscribes to:

/topic/notifications/{userId}

Example:

/topic/notifications/2

Only User 2 receives messages from that topic.

🔥 REST APIs
Method	Endpoint	Description
GET	/notifications	Home Page
GET	/notifications/all	Get All Notifications
POST	/notifications	Create Notification
PUT	/notifications/{id}	Update Notification
DELETE	/notifications/{id}	Delete Notification
POST	/notifications/send	Send Realtime Notification
📸 Demo
User Specific Realtime Messaging
User 1 sends message to User 2
Only User 2 receives notification
No page refresh required
🔮 Future Improvements
Store realtime messages in database
Full realtime chat application
Online/offline user tracking
Authentication system
PostgreSQL LISTEN / NOTIFY
Popup toast notifications
Typing indicators
Message history
💡 Learning Concepts Covered
Spring Boot REST APIs
JPA & Hibernate
PostgreSQL Integration
WebSocket Communication
STOMP Messaging
Realtime Frontend Updates
User-specific subscriptions
Full-stack integration
