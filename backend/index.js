const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config({path : "./config/.env"});

const appRouter = require('./routes/app.route')

app.use(express.json());


app.use('/api/v1/allList' , appRouter )





app.listen(process.env.PORT , () => {
    console.log(`Server is running at PORT ${process.env.PORT}`)
})