const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

const hostname = '127.0.0.1';
const port = 3000;

const allowedOrigins = ['https://aidanhonan.com', 'https://test.aidanhonan.com', 'http://localhost:4200'];

app.use(cors({
  origin: allowedOrigins,
}));

app.get('/', (req, res) => {
  res.json('Hello, world! NodeJS -- autodeployed3');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
