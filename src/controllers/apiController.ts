import { Request, Response } from 'express';

export const ping = (request: Request, response: Response) => {
    response.json({
        ping: true
    });
}

export const random =  (request: Request, response: Response) => {
    let number: number = Math.floor(Math.random() * 10);
    response.json({ radomNumber: number });
}

export const name =  (request: Request, response: Response) => {
    let userName = request.params.name;
    response.json({ userName: userName });
}