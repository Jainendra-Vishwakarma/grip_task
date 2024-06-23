require('dotenv').config()    
                                                                                                                                                                                                                                                                                                                                                               const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const customerRoute = require('./routes/customer');
const transactionRoute=require('./routes/TransactionHistory');
const url=process.env.MONGODB_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Data sync successful');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(err => {
        console.error('Database sync error:', err);
    });
app.use(cors());
app.use(express.json());
app.use(customerRoute);
app.use(transactionRoute);

