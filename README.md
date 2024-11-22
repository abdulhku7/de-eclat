# De Eclat - Luxury E-Commerce Website

A modern luxury e-commerce platform built with React, Node.js, and MongoDB.

## Project Structure

```
de-eclat/
├── frontend/          # React frontend
├── backend/           # Node.js backend
└── README.md         # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/de-eclat
   JWT_SECRET=your-secret-key-here
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The backend API will be available at `http://localhost:5000`

## Features (In Development)

- [ ] User authentication
- [ ] Product catalog
- [ ] Shopping cart
- [ ] AR-based virtual try-ons
- [ ] Product customization
- [ ] Exclusive membership system
- [ ] Admin dashboard

## Tech Stack

- **Frontend:**
  - React.js with TypeScript
  - React Router for navigation
  - Styled Components for styling
  - Redux for state management

- **Backend:**
  - Node.js with Express
  - TypeScript
  - MongoDB with Mongoose
  - JWT for authentication

## Development Timeline

Please refer to `roadmap.md` for detailed development phases and timeline.
