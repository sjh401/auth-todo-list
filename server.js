// old syntax
// const express = require('express')
// "type: module" in package json under name, main, version
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT || 4567

// gives access to req.body
app.use(express.json())
app.use(cors())
// change after deploy and we are sure everything is working
app.use(morgan("dev"))

app.get("/", (req, res) => res.send("<h1>Hello, world!<h1>"));

app.listen(PORT, console.log(`Connected to port: ${PORT}`));
