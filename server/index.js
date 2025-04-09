const express = require('express');

const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const storeRoutes = require("./routes/Routes");
require('dotenv').config();

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173', // your frontend port
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(" MongoDB connected");
    })
    .catch((err) => {
        console.error(" MongoDB connection error:", err.message);
    });


app.use('/api/store', storeRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}
);