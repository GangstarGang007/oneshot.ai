const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDb Connection
const uri =
  process.env.MONGODB_URI ||
  'mongodb+srv://rahul123:rahul123@cluster0.lhz9e.mongodb.net/Cluster0?retryWrites=true&w=majority';
// 'mongodb+srv://rahul123:rahul123@cluster0.lhz9e.mongodb.net/Cluster0?retryWrites=true&w=majority';
mongoose.connect(uri || 'mongodb://localhost/5000', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

//routes
app.use('/college', require('./routes/college'));
app.use('/student', require('./routes/student'));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
