# MINDMATE - System Design (Part 3)

## Step 1: System Architecture Overview

### Architecture style (3-tier):

- Presentation: React SPA

- Application: Node.js with Express (controllers + simple services)

- Data: MySQL 

### System Architecture Diagram: 

The following diagram illustrates how different layers of the application interact — from the user interface to backend services and data storage.

![System Architecture](system_architecture.png)

## Step 2: Technology Stack
### Front end

- React 18 with Vite for fast dev builds

- React Router for client-side navigation

- Axios for HTTP requests

- Tailwind CSS for utility-first styling

### Back end

- Node.js 20

- Express 4

- Prisma ORM for type-safe data access

### Database

- MySql

### Authentication

- JWT access and refresh tokens

- Password hashing with bcrypt

- Short-lived access tokens, longer-lived refresh tokens stored httpOnly

### Other toolings

- Testing with Jest and Supertest

- Containerization with Docker

- Deployment on AWS (ECS or Elastic Beanstalk)

- CI via GitHub Actions

## Step 3: Authentication & Role-Based Access Control

This app keeps things simple: three roles and a handful of guarded actions. Guests can browse and sign up, registered users manage their own data, and admins have full control for support and moderation.

### Roles
- *Guest*
- *Registered User*
- *Admin*

### Permissions for key actions

| Action                | Guest | Registered User     | Admin        |
|-----------------------|:-----:|:-------------------:|:------------:|
| Register account      | Allow | N/A                 | Allow        |
| Log in                | Allow | Allow               | Allow        |
| Create mood entry     | Deny  | Allow (own)         | Allow (any)  |
| Read mood entries     | Deny  | Allow (own)         | Allow (any)  |
| Update mood entry     | Deny  | Allow (own)         | Allow (any)  |
| Delete mood entry     | Deny  | Allow (own)         | Allow (any)  |

## Authentication Flow

### Registration & Login
- Users register using *email and password* through the front end.
- Credentials are verified on login via the *Node.js / Express API*.
- Passwords are *hashed with bcrypt* before being stored securely in the database.

### Session Management
- After successful login, the server issues a *JWT (JSON Web Token)*.
- Each token contains the user’s *ID and role* and is stored in *HTTP-only cookies* for added security.
- Tokens are sent automatically with each request, allowing the server to verify user identity without exposing credentials.

### Role-Based Access Enforcement
- Middleware checks the *JWT* on every protected request.
- The user’s *role* is verified before granting access to restricted routes (for example, /api/admin/*).
- Unauthorized users receive a *403 Forbidden* response, keeping sensitive endpoints protected.

## Step 4: UML & Architecture Diagrams
-UML Diagram
![UML Diagram](images/UML2.jpg)

-Sequence Diagram
![UML Diagram](images/sequence_dia.jpg)

-System Architecture Diagram
![UML Diagram](images/system_architecture.png)