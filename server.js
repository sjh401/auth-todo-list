// old syntax - const express = require('express') -- new "type: module" in package json under name, main, version
import express from 'express'
// cross origin, allows external endpoints access and requests - heroku or api wouldn't be allowed access
import cors from 'cors'
// for log output - clg and such for development.
import morgan from 'morgan'
import db from "./db/connection.js";

const app = express()
const PORT = process.env.PORT || 4567

// gives access to req.body
app.use(express.json())
app.use(cors())
// change after deploy and we are sure everything is working
app.use(morgan("dev"))

app.get("/", (req, res) => res.send("<h1>Hello, world!<h1>"));

db.on("connected", () => {
    console.log("Connected to MongoDB")
    app.listen(PORT, console.log(`Connected to port: ${PORT}`));
})
