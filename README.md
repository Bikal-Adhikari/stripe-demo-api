# Stripe Demo API

This is a demonstration project for integrating the Stripe API with a web application. The purpose of this project is to showcase how to implement key features of Stripe, such as creating and managing customers, processing payments, and handling webhooks.

## Features

- Create and manage customers
- Process one-time payments
- Handle webhooks for various Stripe events
- Securely store and manage API keys

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm (Node Package Manager)
- Stripe account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/stripe-demo-api.git
   cd stripe-demo-api
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Stripe API keys:

   ```bash
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The API server should now be running on `http://localhost:3000`.

## Usage

You can use tools like Postman or cURL to interact with the API. Below are some example requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
