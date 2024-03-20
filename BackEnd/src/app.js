const express = require('express')
const morgan = require('morgan')
const cors = require('cors') 


const app = express()
app.use(cors());

app.set("port", process.env.PORT || 4000);

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use("/api/items",require('./routes/items.routes'));

module.exports = app;
