# 🌟 User & Post Management API

A RESTful API for managing users, posts, and categories, built with **Node.js**, **Express**, and **Prisma** connected to a **PostgreSQL** database. This project uses **Prisma Client** for database operations and demonstrates CRUD operations along with relationships between models. 🚀

If you want to **learn and use Prisma ORM with PostgreSQL**, take a look at this project! It demonstrates **CRUD operations, relationships between models, and real-world API patterns**, making it a great reference for beginners and intermediate developers. 🚀

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠 Technologies](#-technologies)
- [🗄 Database Schema](#-database-schema)
- [💻 Installation](#-installation)
- [🔑 Environment Variables](#-environment-variables)
- [▶️ Running the Server](#-running-the-server)

---

## ✨ Features

- 👤 User CRUD operations (Create, Read, Update, Delete)  
- 📝 Post CRUD operations  
- 🗂 Category and ProfileImage management  
- ⚡ Prisma ORM with PostgreSQL  
- 📦 JSON data handling for posts  
- 🔗 REST API structure for easy integration  

---

## 🛠 Technologies

- Node.js 🟢  
- Express.js 🚂  
- Prisma ORM 📊  
- PostgreSQL 🐘  
- dotenv for environment variables 🌱  

---

## 🗄 Database Schema

**Models:**

- **User** 👤  
  - `id`, `firstName`, `lastName`, `age`, `role`, `email`, `profileImage`  
  - Relationships: `posts`, `profileImage`  

- **Post** 📝  
  - `id`, `title`, `data` (JSON), `active`, `user_id`  
  - Relationships: `categories`, `user`  

- **Category** 🗂  
  - `id`, `title`  
  - Relationships: `posts`  

- **ProfileImage** 🖼  
  - `id`, `url`, `user_id`  
  - Relationships: `user`  

**Enums:**  

- `Role` 🎭: `user`, `admin`, `superadmin`, `supervisor`  

---

## 💻 Installation

1. Clone the repository:

```bash
git clone <repository-url> 📥
cd <repository-folder> 📂
npm install ⚙️
npm i prisma@7
npm i @prisma/client@7
```


## 🔑 Environment Variables

Create a .env file in the root directory:

DATABASE_URL="postgresql://username:password@localhost:5432/database_name" 🔐

## ▶️ Running the Server
npm run start 🏃‍♂️
