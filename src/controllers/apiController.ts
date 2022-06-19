import { Request, Response } from 'express';
import { Phrases } from '../models/Phrase.model';


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

export const phrases = async ( request: Request, response: Response) => {
    const allPhrases = await Phrases.findAll();
    response.status(200);
    response.json(allPhrases);
}


export const create = async (request: Request, response: Response) => {
    let {text, author } = await request.body;
    
    let newPhrase = await Phrases.create({ author, text });
    response.status(201);
    response.json({ id: newPhrase.id,  author: newPhrase.author, text: newPhrase.text });
}