# 🎮 E-Sports Tournament Management System

## 📌 Project Overview

The **E-Sports Tournament Management System** is a full-stack web application designed to manage competitive gaming tournaments efficiently. The platform automatically generates tournament brackets, allows team captains to report match results with screenshot verification, and maintains a dynamic leaderboard based on match outcomes.

This project streamlines tournament organization and provides a centralized platform for teams, players, and tournament administrators.

---

## 🚀 Features

### 👥 User Authentication

* User Registration
* User Login
* JWT Authentication
* Role-Based Access (Captain / Player)

### 🏆 Tournament Management

* Automatic Tournament Bracket Generation
* Single Elimination Tournament Structure
* Double Elimination Tournament Layout Support
* Match Scheduling and Display

### 📊 Match Reporting

* Report Match Results
* Score Submission
* Screenshot Upload Verification
* Automatic Winner Detection

### 📈 Dynamic Leaderboard

* Live Team Rankings
* Automatic Win/Loss Tracking
* Dynamic Sorting Based on Performance

### 🎨 Modern UI

* Responsive Design
* Dark E-Sports Theme
* Mobile-Friendly Layout
* Interactive Dashboard

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcrypt.js

### File Upload

* Multer

---

## 📂 Project Structure

```bash
E-Sports/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/esports-tournament-management-system.git
```

---

### 2️⃣ Backend Setup

Navigate to server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm start
```

Server runs at:

```text
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 🗄️ Database Collections

### Users

```json
{
  "username": "Anvesh",
  "email": "user@gmail.com",
  "password": "encrypted_password",
  "role": "captain",
  "team": "Alpha"
}
```

### Teams

```json
{
  "teamName": "Alpha"
}
```

### Matches

```json
{
  "teamA": "Alpha",
  "teamB": "Beta",
  "scoreA": 2,
  "scoreB": 1,
  "winner": "Alpha",
  "screenshot": "match-proof.png"
}
```

---

## 📸 Screenshots

### Login Page

* Secure authentication system

### Dashboard

* Tournament statistics
* Team information
* Match overview

### Tournament Bracket

* Winners Bracket
* Losers Bracket
* Match Tracking

### Match Reporting

* Score Submission
* Screenshot Verification

### Leaderboard

* Dynamic Rankings
* Win/Loss Statistics

---

## 🔒 Security Features

* JWT Authentication
* Password Hashing using bcrypt.js
* Protected Routes
* Captain-Based Match Reporting
* Input Validation

---

## 🎯 Future Enhancements

* Complete Double Elimination Logic
* Player-Based Leaderboard
* Tournament Admin Panel
* Match Notifications
* Live Match Tracking
* Discord Integration
* Tournament Analytics Dashboard

---

## 📚 Learning Outcomes

This project demonstrates:

* Full Stack Development
* REST API Design
* MongoDB Database Management
* Authentication & Authorization
* File Upload Handling
* React State Management
* Tournament Bracket Logic
* Dynamic Leaderboard Generation


This project is developed for educational and academic purposes.
