import express, { Request, Response } from 'express';
import path from 'path';
import cors, { CorsOptions } from 'cors';
import bodyParser from 'body-parser';
import nodemailer, { Transporter, TransportOptions } from 'nodemailer';
import compression from 'compression';
import dotenv from 'dotenv';

dotenv.config();

// Allowed origins
const allowedOrigins = ['https://www.alfred18.ru', 'http://localhost:3000'];

// The cors middleware to only allow requests from the allowed origins
const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
};

const app: express.Application = express();
const port: number = 8080;

app.use(cors(corsOptions));
app.use(compression());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Handle POST requests to /api/send-email route
app.post('/api/send-email', (req: Request, res: Response) => {
    const { name, email, message } = req.body;

    console.log(req);

    const transporter: Transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    } as TransportOptions);

    transporter
        .verify()
        .then(() => {
            transporter
                .sendMail({
                    from: `"${name}" <a18alfred@yandex.ru>`, // sender address
                    to: 'a18alfred@yandex.ru', // list of receivers
                    subject: `${name} <${email}> отправлено с Alfred Portfolio`, // Subject line
                    text: `${message}` // plain text body
                })
                .then((info) => {
                    console.log({ info });
                    res.json({ message: 'success' });
                })
                .catch((e) => {
                    console.error(e);
                    res.status(500).send(e);
                });
        })
        .catch((e) => {
            console.error(e);
            res.status(500).send(e);
        });
});

// listen to app on port 8080
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
