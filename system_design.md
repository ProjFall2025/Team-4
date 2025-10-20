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
