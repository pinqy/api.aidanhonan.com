import express from 'express';
import cors from 'cors';

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

const allowedOrigins = ['https://aidanhonan.com', 'https://test.aidanhonan.com', 'http://localhost:4200'];

app.use(express.json());
app.use(cors({
  origin: allowedOrigins,
}));

app.get('/', (req, res) => {
  res.json('Hello, TypeScript + Express!');
});

app.post('/test', (req, res) => {
  res.json('Hello, world! NodeJS -- /test POST 2');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
