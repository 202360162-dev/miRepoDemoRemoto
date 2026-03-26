import Stripe from "stripe";
import {STRIPE_KEY} from "../config.js";
const stripe = new Stripe(STRIPE_KEY);

const crearSesion = async () => {
    return stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: "laptop",
                        description: "Gamer laptop",
                    },
                    currency: "mxn",
                    unit_amount: 10000000,
                },
                quantity: 3,
            },
            {
                price_data: {
                    product_data: {
                        name: "lavadora",
                        description: "Lavadora Whirlpool",
                    },
                    currency: "mxn",
                    unit_amount: 100000,
                },
                quantity: 2,
            },
        ],
        mode: "payment",
        success_url: "http://localhost:5000/exitoso",
        cancel_url: "http://localhost:5000/cancelado",
    });
};

export const procesarPago = async (req, res) => {
    try {
        const session = await crearSesion();
        res.json({ url: session.url });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const redirigirPago = async (req, res) => {
    try {
        const session = await crearSesion();
        res.redirect(303, session.url);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
