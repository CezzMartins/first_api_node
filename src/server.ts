import express, { Request, Response } from "express";
import path from "path";
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import cors from 'cors';

dotenv.config();

const server = express();
server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));//define the static folder for images
server.use(express.urlencoded({extended: true}));

server.use(apiRoutes);

server.use((request: Request, response: Response) => {
    response.status(404);
    response.json({
        error: 'Endpoint Não Encontrato.'
    });
})


server.listen(process.env.PORT);