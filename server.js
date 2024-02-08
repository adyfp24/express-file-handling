const express = require('express');
const cors = require('cors')
const app = express();
const fileRoute = require('./routes/fileRoutes')
const PORT = 4000;

app.use(cors());
app.use(express.json())
app.use('/api', fileRoute);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})