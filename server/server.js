const express = require('express');
const connectDB =require('./DB/connectDB')
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
require('dotenv').config()
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);



// DB connection
connectDB();
// Sample route
app.get('/', (req, res) => {
  res.send('API Running');
});

app.listen(process.env.PORT, () => console.log(`Server running on port http://localhost:${process.env.PORT}/`));