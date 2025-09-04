# Ecommerce Application

This is a simple ecommerce application built with React and Redux Toolkit. It allows users to browse products, manage their shopping cart, and place orders.

## Features

- User authentication (login/logout)
- Product browsing and searching
- Shopping cart management
- Order placement and history
- Payment processing
- Shipment tracking

## Project Structure

```
ecommerce-app
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── app
│   │   └── store.ts       # Redux store configuration
│   ├── features
│   │   ├── users
│   │   │   └── usersSlice.ts  # User state management
│   │   ├── products
│   │   │   └── productsSlice.ts  # Product state management
│   │   ├── carts
│   │   │   └── cartsSlice.ts  # Cart state management
│   │   ├── orders
│   │   │   └── ordersSlice.ts  # Order state management
│   │   ├── payments
│   │   │   └── paymentsSlice.ts  # Payment state management
│   │   └── shipments
│   │       └── shipmentsSlice.ts  # Shipment state management
│   ├── components
│   │   └── common          # Reusable components
│   ├── pages
│   │   ├── Home.tsx        # Home page component
│   │   ├── Cart.tsx        # Cart page component
│   │   ├── Checkout.tsx     # Checkout page component
│   │   └── Orders.tsx      # Orders page component
│   ├── types
│   │   └── index.ts        # TypeScript types and interfaces
│   ├── App.tsx             # Main application component
│   └── index.tsx           # Entry point for the React application
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/DarylBass/ecommerce-app.git
   ```

2. Navigate to the project directory:
   ```
   cd ecommerce-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License. See the LICENSE file for details.