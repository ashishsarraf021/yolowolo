const express = require ('express');
const app = express();
const cors = require('cors')
const route = require('./route/route');
const port = 8000
app.use(express.json())
app.use(cors())
require('./db/connectDB')
app.use('/api/v1',route);

app.listen(port,()=>{
    console.log("backend is running on", port)
});
