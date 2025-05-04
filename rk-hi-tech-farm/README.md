# R.K. Hi-Tech Farm

Welcome to the R.K. Hi-Tech Farm project! This is a full-stack web application designed for managing and selling white button mushrooms produced by R.K. Hi-Tech Farm, located in Varanasi, Uttar Pradesh, India.

## Project Overview

The application is built using the MEARN stack, which includes:

- **MongoDB**: NoSQL database for storing user, product, and order data.
- **Express.js**: Web framework for Node.js to build the backend API.
- **Angular**: Frontend framework for building the user interface.
- **React**: Library for building user interfaces, particularly for the frontend components.
- **Node.js**: JavaScript runtime for executing server-side code.

## Features

### User Roles

- **Admin Panel**: 
  - Full CRUD permissions for managing products, orders, and users.

- **User Panel**: 
  - Browse all products from the home page without logging in.
  - Add products to the cart without login.
  - Login/signup required only at the time of checkout/payment.
  - Signup form collects complete delivery information (name, phone, address, city, pincode, etc.).

### Application Features

- Product listing with images, descriptions, and prices.
- Shopping cart functionality.
- Secure user authentication using JWT.
- Responsive design for all device sizes: mobile, tablet, and desktop.
- Clean, modern, and stylish UI/UX for better user experience.
- Optional: Payment gateway integration (Razorpay, Stripe, etc.).

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Set up the MongoDB database and configure the connection in `backend/config/db.js`.

4. Start the backend server:
   ```
   npm start
   ```

5. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

6. Start the frontend application:
   ```
   npm start
   ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact us at [email@example.com].