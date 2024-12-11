# Delivery Address Management System

This project is a web application that allows users to manage delivery addresses. It features a responsive frontend built with **React** and styled using **TailwindCSS**, and a backend built with **Node.js** and **Express.js**. The project integrates with Google Maps for location selection and uses **MongoDB** for database storage.

---

## Features

### Frontend
- **Responsive and modern UI** built with React and TailwindCSS.
- Form to add delivery addresses with fields for:
  - House number
  - Road/Area
  - Category (e.g., Home, Office)
- Map integration using **Google Maps API** for selecting and viewing locations.
- Modal for enabling location permissions or searching manually.
- Address management features, including:
  - Updating addresses
  - Deleting addresses
  - Marking addresses as favorite

### Backend
- **RESTful API** built with Node.js and Express.js.
- MongoDB database integration for storing and managing addresses.
- API endpoints for CRUD operations:
  - Create
  - Read
  - Update
  - Delete

---

## Prerequisites

Before running this project, ensure you have the following installed:
- **MongoDB**: A local or cloud MongoDB instance.
- **Google Maps API Key**: For map functionality.

---

---

## 1. Backend Setup

### Step 1: Navigate to the Backend Directory
```bash
cd backend
```

### Step 2: Install Dependencies
Run the following command to install required Node.js packages:
```bash
npm install
```

### Step 3: Create a `.env` File
Create a `.env` file in the `backend` directory and add the following configurations:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
- Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

### Step 4: Start the Backend Server
Start the server using the following command:
```bash
npm start
```

The backend server will be running at: [http://localhost:5000](http://localhost:5000).

---

## 2. Frontend Setup

### Step 1: Navigate to the Frontend Directory
Navigate to the `frontend` directory from the project root:
```bash
cd ../frontend
```

### Step 2: Install Dependencies
Install the necessary Node.js packages by running:
```bash
npm install
```

### Step 3: Create a `.env` File
Create a `.env` file in the `frontend` directory and add the following configuration:

```env
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```
- Replace `your_google_maps_api_key` with your actual Google Maps API key.

### Step 4: Create a `.env` File

- Replace `baseURL` with your actual backend url in the services/api.js.
- 
### Step 5: Start the Frontend Development Server
Start the development server using:
```bash
npm start
```

The frontend will be accessible at: [http://localhost:3000](http://localhost:3000).

---

