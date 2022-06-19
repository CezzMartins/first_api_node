import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import { Phrases } from '../models/Phrase.model';


export const ping = (request: Request, response: Response) => {
    response.json({
        ping: true
    });
    return;
}


export const random =  (request: Request, response: Response) => {
    let number: number = Math.floor(Math.random() * 10);
    response.json({ radomNumber: number });
    return;
}


export const name =  (request: Request, response: Response) => {
    let userName = request.params.name;
    response.json({ userName: userName });
    return;
}


export const phrases = async ( request: Request, response: Response) => {
    const allPhrases = await Phrases.findAll();
    response.status(200);
    response.json(allPhrases);
    return;
}


export const getPhraseById = async ( request: Request, response: Response) => {
    const id = request.params.id;
    const phrase = await Phrases.findByPk(id);

    if(phrase){
        response.json({phrase});
        return;   
    }

    response.json({ result: "this sentence doesn't exist."})
    response.json(404);
    return;
       
}


export const updatePhrase = async (request: Request, response: Response) => {
    const id = request.params.id;
    const { text, author } = request.body;
    const phrase = await Phrases.findByPk(id);
    
    if(phrase){
        phrase.author = author;
        phrase.text = text;
        await phrase.save();

        response.json({ phrase });
    }

    response.json({ result: "this sentence doesn't exist."})
    response.json(404);
    return;
}


export const create = async (request: Request, response: Response) => {
    let {text, author } = await request.body;
    
    let newPhrase = await Phrases.create({ author, text });
    response.status(201);
    response.json({ id: newPhrase.id,  author: newPhrase.author, text: newPhrase.text });
    return;
}


export const randomPhrase = async (request: Request , response: Response) => {
    // const phrases =  await Phrases.findAll();
    // const randomNumber = Math.floor(Math.random() * phrases.length)
    // const chooseOne = phrases[randomNumber];
    
     const chooseOne = await Phrases.findOne({
        order: [ Sequelize.fn('RAND') ]
     })
    response.json({chooseOne});
}


export const deletePhrase = async (request: Request, response: Response) => {
    const id = request.params.id;
    const phrase = await Phrases.findByPk(id);
    if(phrase) {
        await Phrases.destroy({ where: {id: id}});
        response.json({ success: "The prhase was Deleted!"})
    }
    response.json({ result: "this sentence doesn't exist."})
    response.json(404);
    return;
    
}
