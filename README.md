# FEEDBACK-FORM(SIMPLE FULL STACK APP)
A clean and simple full-stack project that allows users to submit feedback through a beautiful HTML form.  
The backend stores all feedback entries in a JSON file using Node.js and Express.

Perfect for beginners learning:
- APIs  
- JSON handling  
- File system operations  
- Frontend → Backend communication  

---

## 🚀 Features

### 🧑‍💻 Frontend
- Modern, responsive UI  
- Form validation  
- Radio button rating system  
- Success message display  
- Smooth user experience  

### 🛠️ Backend (Node.js + Express)
- REST API architecture  
- POST API to save feedback  
- GET API to retrieve feedback  
- JSON file acts as a mini-database  
- Clean file-utility helpers  
- CORS enabled for frontend communication  

---

## ⚙️ Backend Setup (Local)

Open terminal:

```bash
cd backend
npm install
node server.js
The backend will run at:
http://localhost:3000
🌐 API Endpoints
📌 POST /feedback
Submit new feedback data.
Request Body:
{
  "name": "John Doe",
  "email": "john@mail.com",
  "category": "support",
  "rating": 5,
  "message": "Amazing service!"
}
Response:
{
  "success": true,
  "message": "Feedback saved!"
}
📌 GET /feedback
Returns all stored feedback.
Example Response:
{
  "success": true,
  "data": [
    {
      "id": 17339912345,
      "name": "test",
      "email": "test@mail.com",
      "category": "support",
      "rating": 5,
      "message": "Amazing service!",
      "createdAt": "2025-12-12T10:30:00Z"
    }
  ]
}
🧠 Technologies Used
Frontend:
HTML
CSS
 JavaScript
Backend:
Node.js
Express.js
File System (fs module)
JSON storage
📌 How It Works (Architecture Overview)
The user fills out the HTML feedback form.
JavaScript collects the form data.
A fetch() POST request sends the data to the backend.
Express receives it, validates it, and appends it to feedback.json.
Backend returns a JSON response.
Frontend shows a success message.
This project teaches the full cycle of frontend → backend → storage → response.

✨ Author
Made with ❤️
 by Anafa
