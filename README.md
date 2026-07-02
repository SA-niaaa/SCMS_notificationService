# 📦 Notification Service in Supply Chain Management System (SCMS)

A full-stack web application for managing supply chain operations across multiple stores. The system centralizes inventory, employee records, suppliers, manufacturers, and material requests while providing real-time communication using WebSockets.

Built with **React**, **TypeScript**, **Spring Boot**, **PostgreSQL**, and **STOMP WebSocket**, the application offers both traditional REST APIs for CRUD operations and event-driven communication for instant notifications and live updates.

---

# ✨ Key Features

## 🔐 Authentication

* Secure user login
* CAPTCHA verification
* Role-based access control
* Local storage-based session management

---

## 🏪 Store Management

Manage store information from a single dashboard.

Features include:

* Create new stores
* Update existing records
* Delete stores
* View complete store list
* Search and filter stores

---

## 👨‍💼 Employee Management

Maintain employee information and assign employees to stores.

Capabilities:

* Add employees
* Edit employee details
* Delete employee records
* Store-wise employee mapping
* Employee profile management

---

## 📦 Material Management

Track inventory and maintain material details.

Functions:

* Add materials
* Update stock information
* Delete materials
* Monitor inventory levels

---

## 🚚 Supplier Management

Maintain supplier records for procurement activities.

Includes:

* Supplier registration
* Edit supplier information
* Delete suppliers
* View supplier directory

---

## 🏭 Manufacturer Management

Store manufacturer details used throughout the supply chain.

Functions:

* Register manufacturers
* Update manufacturer details
* Delete manufacturers
* Manage contact information

---

## 🔔 Notification System

Provides instant communication between users.

Features:

* Real-time notifications
* User-specific delivery
* Read/Unread notification tracking

---

## 📋 Indent Management

Supports digital material request workflows.

Users can:

* Create indent requests
* Approve or reject requests
* Track request status
* Receive live updates without refreshing the page

---

## 🟢 Online User Status

Displays currently active users using WebSocket communication.

---

# 🛠 Technology Stack

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* SockJS
* STOMP Client

## Backend

* Spring Boot
* Spring Web
* Spring Data JPA
* Hibernate
* Spring WebSocket

## Database

* PostgreSQL

## Communication

* REST API
* WebSocket
* STOMP Messaging Protocol

---

# 🏗 Project Architecture

```text
React + TypeScript (Frontend)
             │
             │ REST API / WebSocket
             ▼
Spring Boot Application
 ├── Controller Layer
 ├── Service Layer
 ├── Repository Layer
 └── WebSocket Handlers
             │
             ▼
PostgreSQL Database
```

---

# 📂 Project Modules

| Module       | Description                           |
| ------------ | ------------------------------------- |
| User         | Authentication and user management    |
| Store        | Store information management          |
| Employee     | Employee records and store mapping    |
| Material     | Material and stock management         |
| Supplier     | Supplier registration and maintenance |
| Manufacturer | Manufacturer information management   |
| Notification | Real-time user notifications          |
| Indent       | Material request workflow             |

---

# 🔄 Application Workflow

### User Login

```text
User Login
      │
      ▼
Authentication
      │
      ▼
Session Created
      │
      ▼
Dashboard Access
```

---

### Online User Tracking

```text
User Connects
      │
      ▼
WebSocket Connection
      │
      ▼
Spring Boot Server
      │
      ▼
Broadcast Online Status
      │
      ▼
Connected Users Updated
```

---

### Material Indent Workflow

```text
Create Indent
      │
      ▼
WebSocket Publish
      │
      ▼
Backend Processing
      │
      ▼
Save to Database
      │
      ▼
Notify Receiver
      │
      ▼
Receiver Approves / Rejects
      │
      ▼
Sender Receives Status Update
```

---

# 🗄 Database

The project uses **PostgreSQL** as the primary database.

Main entities include:

* Users
* Stores
* Employees
* Materials
* Suppliers
* Manufacturers
* Indents
* Notifications

Entity relationships are managed using Spring Data JPA and Hibernate.

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone <repository-url>
```

---

## Backend Setup

```bash
cd backend
./mvnw spring-boot:run
```

Backend runs at:

```text
http://localhost:8081
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## PostgreSQL Configuration

Create a database:

```sql
CREATE DATABASE scms;
```

Update your `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/scms
spring.datasource.username=postgres
spring.datasource.password=your_password
```

---

# 📌 Design Principles

The application follows common enterprise development practices:

* Layered Architecture
* Repository Pattern
* Service Layer Pattern
* Dependency Injection
* RESTful API Design
* Event-Driven Communication
* Separation of Concerns

---

# 📈 Future Scope

Potential improvements include:

* JWT Authentication
* Fine-grained Role & Permission Management
* Email Notifications
* Redis Cache Integration
* RabbitMQ Message Queue
* Docker Containerization
* Kubernetes Deployment
* Analytics Dashboard
* Audit Logging
* Report Generation

---

# 🎯 Learning Outcomes

This project provided hands-on experience with:

* Full-Stack Application Development
* React & TypeScript
* Spring Boot REST APIs
* JPA & Hibernate
* PostgreSQL Database Design
* WebSocket Communication
* STOMP Messaging
* CRUD Operations
* Authentication & Authorization
* Real-Time Event Processing
* Enterprise Application Architecture

---

# 👨‍💻 Developer

**Sania Reang**

Notification Service in Supply Chain Management System (SCMS)

A full-stack enterprise application developed to streamline supply chain operations through centralized management, real-time communication, and efficient inventory workflows.
