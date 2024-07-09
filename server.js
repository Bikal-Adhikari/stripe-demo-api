import "dotenv";
import express from "express";
import Stripe from "stripe";
import cors from "cors";
const app = express();

const port = 3000;

const stripe = new Stripe(process.env.stripe_SecretKey);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.post("/create-stripe-payments", async (req, res) => {
  try {
    const { amount, currency, paymentMethod } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: currency,
      payment_method_types: [paymentMethod],
    });
    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    return res.json({
      success: "false",
      error: "something went wrong",
    });
  }
});

app.post("/confirm-order", (req, res) => {
  try {
    console.log(req.body);
    if (req.body.id) {
      return res.json({
        success: "true",
        message: "Order Saved",
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      success: "false",
      message: "something went wrong",
    });
  }
});

app.get("/", (req, res) => {
  res.json({
    status: "True",
    message: "Stripe API is running",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port:http://localhost:${port}`);
});
