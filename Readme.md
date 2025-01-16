# Invoice Management System

This project is a Node.js backend service for an invoice management system. It provides APIs for managing invoices and related data, designed to work seamlessly with a React frontend.

---

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- A terminal or command-line interface

### Installation

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd invoice-management-system
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   
   Create a `.env` file in the root directory and add the following configuration:

   ```env
   PORT=3001
   MONGO_URL=mongodb://localhost:27017/invoice-management-system
   ```

   Replace the `MONGO_URL` value with your MongoDB connection string if needed.

4. **Run MongoDB:**
   
   Ensure MongoDB is running on your system. If you are using a local instance, you can start MongoDB with:

   ```bash
   mongod
   ```

5. **Start the Server:**

   ```bash
   npm run start
   ```

   The backend service will start at `http://localhost:3001` by default.

---