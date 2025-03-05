require("dotenv").config();
const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const helmet = require("helmet");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({ origin: "https://mymc-web.vercel.app/" }));
const JWT_SECRET = process.env.JWT_SECRET
// **Connect to MySQL**
const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    logging: false,
});

// **Test MySQL Connection**
sequelize.authenticate()
    .then(() => console.log(" Connected to MySQL on VPS"))
    .catch(err => console.error(" MySQL connection error:", err));

// **Define Purchase Model**
const Purchase = sequelize.define("Purchase", {
    username: { type: DataTypes.STRING, allowNull: false },
    itemName: { type: DataTypes.STRING, allowNull: false },
    quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
    delivered: { type: DataTypes.BOOLEAN, defaultValue: false },
    hash: { type: DataTypes.STRING, unique: true }
});

// **Sync Database**
sequelize.sync();



// Razorpay
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.post("/api/login", async (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ status: "error", message: "Username  required" });
    }

    try {
        const [user] = await sequelize.query(`SELECT * FROM Users WHERE username = ?`, {
            replacements: [username],
            type: Sequelize.QueryTypes.SELECT,
        });

        if (!user) {
            return res.status(401).json({ status: "error", message: "Invalid credentials" });
        }


        const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: "1h" });


        res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "strict" });

        res.json({ status: "success", message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Login failed" });
    }
});

// payment verification
app.post("/api/verify_payment", async (req, res) => {
    const { username, paymentId, cartItems } = req.body;

    try {
        const payment = await razorpay.payments.fetch(paymentId);

        if (payment.status !== "captured") {
            return res.status(400).json({ status: "failed", message: "Payment not captured" });
        }

        const hash = crypto.createHash("sha256").update(paymentId).digest("hex");

        const existingPurchase = await Purchase.findOne({ where: { username, hash } });
        if (existingPurchase) {
            return res.status(400).json({ status: "failed", message: "Duplicate purchase detected" });
        }

        await Purchase.bulkCreate(cartItems.map(item => ({
            username,
            itemName: item.name,
            quantity: 1,
            hash,
            delivered: false,
        })));

        res.json({ status: "success", message: "Purchase recorded" });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Payment verification failed" });
    }
});


// **API to Fetch Undelivered Purchases**
app.get("/api/pending_purchases", async (req, res) => {
    const { username } = req.query;
    if (!username) return res.status(400).json({ status: "error", message: "No username provided" });

    const purchases = await Purchase.findAll({ where: { username, delivered: false } });

    if (!purchases.length) return res.json({ status: "no_items" });

    await Purchase.update({ delivered: true }, { where: { username, delivered: false } });

    res.json({ status: "success", items: purchases });
});


app.listen(5000, () => console.log("Server running on port 5000"));
