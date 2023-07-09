const express = require('express');
const router = require('./routes/userRoute')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})