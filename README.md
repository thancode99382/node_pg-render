# Express.js Product Management System

A simple product management web application built with Express.js and PostgreSQL.

## Features

- Create, read, update, and delete products
- View all products in a table format
- Form-based interface for managing products
- PostgreSQL database integration

## Technologies Used

- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL
- **Template Engine**: EJS
- **Styling**: (Add your CSS framework here)
- **Dev Tools**: Nodemon for auto-restart

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd expressPg
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file with your actual database credentials:
   ```
   DATABASE_URL=postgresql://your_username:your_password@localhost:5432/products_db
   PORT=3000
   ```

4. Create the PostgreSQL database:
   ```bash
   createdb products_db
   ```

5. Create the products table:
   ```sql
   CREATE TABLE products (
       id SERIAL PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       price DECIMAL(10, 2) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```
or
```bash
npx nodemon server.js
```

### Production Mode
```bash
npm start
```
or
```bash
node server.js
```

The application will be available at `http://localhost:3000`

## API Endpoints

- `GET /` - View all products
- `GET /create` - Show create product form
- `POST /create` - Create a new product
- `GET /edit/:id` - Show edit product form
- `POST /edit/:id` - Update a product
- `GET /delete/:id` - Delete a product

## Project Structure

```
expressPg/
├── views/
│   ├── index.ejs      # Product list page
│   ├── create.ejs     # Create product form
│   └── edit.ejs       # Edit product form
├── public/            # Static files (CSS, JS, images)
├── db.js              # Database connection
├── server.js          # Main application file
├── package.json       # Project dependencies
└── .env.example       # Environment variables template
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
