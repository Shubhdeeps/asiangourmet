# Asian Gourmet

Asian Gourmet is an online grocery shopping application powered by React.js in the frontend and Firebase Firestore DB in the backend. The application allows users to explore various product categories, add products to a shopping cart, place orders, and make online payments.

## Technologies Used

- **Frontend:** React.js, React-Router, MUI (Material-UI)
- **Backend:** Firebase, Firestore DB, Firebase storage

## Features

1. Product Listing: Displays a list of available products from the Asian Gourmet grocery shop.
2. Category Exploration: Allows users to explore products by category.
3. Shopping Cart: Users can add products to a shopping cart.
4. Order Placement: Users can place orders directly from the application.
5. Online Payment: Supports online payment for orders.

## Getting Started

Follow the instructions below to set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (>= 14.0.0)
- NPM (>= 6.0.0)
- Firebase sdk (10.7.0)
- Firebase account

### Installation

1. Clone the repository.

```bash
git clone https://github.com/Shubhdeeps/asiangourmet.git
```

2. Navigate to the project directory.

```bash
cd asian-gourmet
```

3. Install the dependencies.

```bash
npm install
```

4. Create a `.env` file in the root directory of the project. Add your Firebase configuration details.

```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

5. Start the development server.

```bash
npm run dev
```

## Running Tests

To run the tests, execute the following command:

```bash
npm test
```

## Project Structure

```
├── README.md
├── package.json
├── public
│   ├── index.html
│   └── favicon.ico
└── src
    ├── App.tsx
    ├── main.tsx
    ├── components
    │   ├── dashboard
    │   |── header
    │   |── loader
    │   |── products
    │   |── singleProduct
    │   └── wrapper
    ├── pages
    │   ├── cart
    │   ├── dashboard
    │   ├── products
    │   ├── ProtectedRoutes.tsx
    │   └── routes.tsx
    ├── firebase
    │   └── firebaseConfig.ts
    ├── assets
    │   ├── images
    │   │   ├── logo.png
    │   │   └── background.jpg
    │   |── animationData
    │   |── styles
    │   |── svg
    |── layout
    |   └── layout.tsx
    └── services
        |── cartServices.ts
        |── db.model.ts
        |── indexedDB.ts
        └── productServices.ts
```

Project Link: [https://github.com/Shubhdeeps/asiangourmet](https://github.com/Shubhdeeps/asiangourmet)

## Acknowledgments

- [React.js](https://reactjs.org/)
- [React-Router](https://reactrouter.com/)
- [Material-UI](https://mui.com/)
- [Firebase](https://firebase.google.com/)
- [Firestore DB](https://firebase.google.com/products/firestore)
