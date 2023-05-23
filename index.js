import express from 'express';
import cors from 'cors';

// Routers API
import files from './routes/files.route.js';

const app = express();
const port = 3003;

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

// Routing
app.use('/v1/files', files);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

export default app;
