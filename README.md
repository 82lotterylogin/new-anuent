# Anuent - Premium Leather Bags E-commerce Platform

![Anuent Logo](https://www.anuent.com/cdn/shop/files/anuent_logo.png)

> A modern, full-stack e-commerce platform built with **React**, **Node.js**, **Tailwind CSS**, and **MongoDB**. Featuring complete admin panel, SEO optimization, and AI citation eligibility.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6+-green.svg)](https://mongodb.com/)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Admin Panel](#admin-panel)
- [SEO Optimization](#seo-optimization)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Features

### Customer Features
- Product browsing with advanced filtering and sorting
- Product search with autocomplete
- Shopping cart with persistent state
- Wishlist functionality
- User authentication (JWT)
- Order tracking
- Product reviews and ratings
- Recently viewed products
- Mobile-first responsive design

### Admin Features
- Comprehensive dashboard with analytics
- Product CRUD operations
- Category and subcategory management
- Order management and tracking
- Customer management
- Coupon/discount management
- Popup manager (scheduled popups)
- Blog/content management
- SEO meta management
- Image gallery management
- Settings configuration

### Technical Features
- Server-Side Rendering (SSR) for SEO
- Static Site Generation (SSG) for blogs
- Full schema.org structured data
- Payment integration (Stripe + PayPal)
- Image optimization with Cloudinary
- Redis caching
- Rate limiting
- Security best practices

---

## Tech Stack

### Frontend
- **React 18+** with Vite/Next.js
- **Tailwind CSS 3+** for styling
- **React Query** for server state
- **Zustand** for client state
- **Framer Motion** for animations
- **React Hook Form** for forms

### Backend
- **Node.js 18+** with Express.js
- **MongoDB** with Mongoose ODM
- **Redis** for caching
- **JWT** for authentication
- **Multer + Sharp** for image processing

### Infrastructure
- **Vercel** (Frontend hosting)
- **Railway/Render** (Backend hosting)
- **MongoDB Atlas** (Database)
- **Cloudinary** (Image CDN)
- **GitHub Actions** (CI/CD)

---

## Project Structure

```
new-anuent/
|-- backend/
|   |-- src/
|   |   |-- config/
|   |   |   |-- database.js
|   |   |   |-- cloudinary.js
|   |   |   |-- stripe.js
|   |   |   |-- paypal.js
|   |   |-- models/
|   |   |   |-- User.js
|   |   |   |-- Product.js
|   |   |   |-- Category.js
|   |   |   |-- Order.js
|   |   |   |-- BlogPost.js
|   |   |   |-- Coupon.js
|   |   |   |-- Popup.js
|   |   |   |-- Page.js
|   |   |   |-- Settings.js
|   |   |-- controllers/
|   |   |-- routes/
|   |   |-- middleware/
|   |   |-- services/
|   |   |-- utils/
|   |   |-- app.js
|   |   |-- server.js
|   |-- package.json
|   |-- .env.example
|-- frontend/
|   |-- src/
|   |   |-- components/
|   |   |   |-- common/
|   |   |   |-- layout/
|   |   |   |-- product/
|   |   |   |-- cart/
|   |   |   |-- admin/
|   |   |-- pages/
|   |   |-- hooks/
|   |   |-- store/
|   |   |-- services/
|   |   |-- utils/
|   |   |-- App.jsx
|   |   |-- main.jsx
|   |-- public/
|   |-- tailwind.config.js
|   |-- package.json
|-- docs/
|-- README.md
```

---

## Installation

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- Redis (optional, for caching)
- Cloudinary account
- Stripe account
- PayPal developer account

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/82lotterylogin/new-anuent.git
cd new-anuent/backend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your credentials
nano .env

# Run development server
npm run dev
```

### Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your API URL
nano .env.local

# Run development server
npm run dev
```

---

## Environment Variables

### Backend (.env)

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/anuent

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
JWT_REFRESH_SECRET=your_refresh_secret
JWT_REFRESH_EXPIRES_IN=30d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# PayPal
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET=your_paypal_secret
PAYPAL_MODE=sandbox

# Email (Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Redis (optional)
REDIS_URL=redis://localhost:6379

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_xxx
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=your_pixel_id
```

---

## API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/logout` | User logout |
| POST | `/api/auth/refresh-token` | Refresh access token |
| POST | `/api/auth/forgot-password` | Request password reset |
| POST | `/api/auth/reset-password` | Reset password |

### Product Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products (with filters) |
| GET | `/api/products/:slug` | Get single product |
| GET | `/api/products/category/:slug` | Get products by category |
| POST | `/api/admin/products` | Create product (Admin) |
| PUT | `/api/admin/products/:id` | Update product (Admin) |
| DELETE | `/api/admin/products/:id` | Delete product (Admin) |

### Order Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Create new order |
| GET | `/api/orders/:id` | Get order details |
| GET | `/api/orders/user/:userId` | Get user's orders |
| GET | `/api/admin/orders` | Get all orders (Admin) |
| PUT | `/api/admin/orders/:id/status` | Update order status (Admin) |

### Payment Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payment/stripe/create-intent` | Create Stripe payment intent |
| POST | `/api/payment/paypal/create-order` | Create PayPal order |
| POST | `/api/payment/paypal/capture-order` | Capture PayPal payment |

---

## Database Schema

### User Model
```javascript
{
  email: String (unique),
  password: String (hashed),
  firstName: String,
  lastName: String,
  phone: String,
  role: ['customer', 'admin', 'super_admin'],
  addresses: [{ type, street, city, state, zipCode, country }],
  wishlist: [ObjectId],
  createdAt: Date,
  updatedAt: Date
}
```

### Product Model
```javascript
{
  name: String,
  slug: String (unique),
  sku: String (unique),
  description: String,
  category: ObjectId,
  price: { regular: Number, sale: Number },
  images: [{ url, alt, caption, isPrimary }],
  variants: [{ name, options }],
  inventory: { quantity, lowStockThreshold },
  seo: { title, metaDescription, keywords },
  reviews: [{ user, rating, title, comment }],
  avgRating: Number,
  isActive: Boolean,
  isFeatured: Boolean
}
```

### Order Model
```javascript
{
  orderNumber: String,
  user: ObjectId,
  items: [{ product, name, sku, price, quantity }],
  shippingAddress: Object,
  payment: { method, transactionId, status, amount },
  coupon: { code, discountAmount },
  subtotal: Number,
  tax: Number,
  total: Number,
  status: ['pending', 'processing', 'shipped', 'delivered', 'cancelled']
}
```

---

## Admin Panel

The admin panel provides complete control over your e-commerce store:

### Dashboard
- Real-time sales analytics
- Revenue charts (daily/weekly/monthly)
- Recent orders overview
- Low stock alerts
- Top selling products

### Product Management
- Add/edit/delete products
- Bulk import/export (CSV)
- Image gallery management
- Variant management
- SEO meta editor

### Order Management
- View all orders with filters
- Update order status
- Send tracking emails
- Process refunds
- Generate invoices (PDF)

### Content Management
- Blog post editor (WYSIWYG)
- Category management
- Static page editor
- Popup manager
- Banner management

### Settings
- Site configuration
- Payment gateway setup
- Shipping zones & rates
- Email templates
- Analytics IDs

---

## SEO Optimization

This platform is built with SEO as a priority:

### Implemented Features
- Server-Side Rendering (SSR) for all pages
- Static Site Generation (SSG) for blogs
- Dynamic sitemap.xml generation
- Optimized robots.txt
- Canonical URLs
- Mobile-first responsive design

### Schema.org Structured Data
- Product schema (price, availability, reviews)
- Organization schema
- BreadcrumbList schema
- Article schema (for blog posts)
- FAQ schema
- Review/AggregateRating schema

### Meta Tags
- Dynamic title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### AI Citation Eligibility
Optimized for AI chatbot citations (ChatGPT, Gemini, Perplexity, Grok):
- Comprehensive, authoritative content
- E-E-A-T signals
- Full structured data
- Regular content updates

---

## Deployment

### Frontend (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel

# Set environment variables in Vercel dashboard
```

### Backend (Railway/Render)

1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Database (MongoDB Atlas)

1. Create a free cluster
2. Get connection string
3. Add to backend .env

---

## Scripts

### Backend

```bash
npm run dev      # Development server
npm run start    # Production server
npm run test     # Run tests
npm run lint     # Lint code
npm run seed     # Seed database
```

### Frontend

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Lint code
npm run test     # Run tests
```

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Support

For support, email hello@anuent.com or create an issue in this repository.

---

Built with love for Anuent Leather Goods
