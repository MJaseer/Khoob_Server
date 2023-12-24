import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import cors from 'cors'

import connectDataBase from "./config/database/mongo.js";
import userRoute from "./router/user/user-router.js";
import client from "./config/database/redis.js";
import session from "express-session";

import acnierRoute from "./router/ancierroute.js"

const app = express()

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:4200','*']
    })
);



app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret:'session-secret',
}))

connectDataBase()
client.connect()

app.use("/api", userRoute)
app.use("/anc",acnierRoute)

const port = process.env.PORT

app.listen(port, () => {
    console.log(`The server start at running on port ${port}`);
});