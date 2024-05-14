import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

// to handle form data
app.use(express.json({ limit: '20kb' }));
// to handle url data
app.use(express.urlencoded({ extended: true, limit: '20kb' }));
// to serve static files
app.use(express.static('public'));

app.use(cookieParser());
