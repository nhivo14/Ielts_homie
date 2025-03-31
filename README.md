# IELTS Homie

IELTS practice platform with AI integration for Speaking and Writing modules.

## Features

- Practice by modules (Listening, Reading, Writing, Speaking)
- AI-powered Speaking and Writing practice
- Multiple environments (dev, test, prod)
- User progress tracking
- Mock tests and real exam simulations

## Tech Stack

- MongoDB
- Express.js
- React.js
- Node.js
- Material-UI

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/nhivo14/Ielts_homie.git
cd Ielts_homie
```

2. Install Server Dependencies
```bash
cd server
npm install
```

3. Configure Environment Variables
Create `.env` file in server directory: 
```
### Running the Application

#### Backend (Server)
1. Navigate to server directory
```bash
cd server
```

2. Install dependencies (if not already installed)
```bash
npm install
```

3. Start the server
```bash
npm run dev
```
Server will run on http://localhost:5000

#### Frontend (Client)
1. Navigate to client directory
```bash
cd client
```

2. Install dependencies (if not already installed)
```bash
npm install
```

3. Start the React application
```bash
npm start
```
Frontend will run on http://localhost:3000

#### Testing the Application
After both server and client are running:
1. Open http://localhost:3000 in your browser
2. You should see the IELTS Homie homepage
3. Test registration/login functionality
4. Navigate through different modules

#### Common Issues
- If you see `Module not found` error, try reinstalling dependencies
- Make sure MongoDB is running locally
- Check if all environment variables are set correctly
- For Windows users, if you encounter script execution issues, run PowerShell as administrator and execute:
  ```powershell
  Set-ExecutionPolicy RemoteSigned
  ```

## Project Structure
cd Ielts_homie
├── client/
│ ├── public/
│ │ ├── index.html
│ │ └── manifest.json
│ └── src/
│ ├── components/ # Reusable components
│ │ └── Navbar.js
│ ├── pages/ # Page components
│ │ ├── Home.js
│ │ ├── Register.js
│ │ └── Dashboard.js
│ ├── context/ # React context
│ ├── services/ # API services
│ ├── utils/ # Utility functions
│ ├── App.js
│ ├── index.js
│ └── index.css
├── server/
│ ├── routes/ # API routes
│ │ └── auth.js
│ ├── models/ # MongoDB models
│ ├── controllers/ # Route controllers
│ ├── middleware/ # Custom middleware
│ ├── .env # Environment variables
│ ├── package.json
│ └── server.js
├── .gitignore
├── README.md
└── package.json
```

