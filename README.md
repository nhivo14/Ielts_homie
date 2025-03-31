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