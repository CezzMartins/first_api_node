import { Response } from 'express';
import { Request, Router } from 'express';

const router = Router();

router.get('/ping',(request: Request, response: Response) => {
    response.json({ pong: true });
})
router.get('/radomnumber', (request: Request, response: Response) => {
    let number: number = Math.floor(Math.random() * 10);
    response.json({ radomNumber: number });
})

router.get('/nameuser/:name', (request: Request, response: Response) => {
    let userName = request.params.name;
    response.json({ userName: userName });
})














export default router;