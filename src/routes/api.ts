import { Router } from 'express';
import * as apiController from '../controllers/apiController';

const router = Router();

router.get('/ping', apiController.ping);

router.get('/radomnumber', apiController.random);

router.get('/nameuser/:name', apiController.name);

router.get('/phrases', apiController.phrases);

router.get('/phrase/:id', apiController.getPhraseById)

router.get('/random', apiController.randomPhrase);

router.post('/create', apiController.create);

router.put('/update/:id', apiController.updatePhrase);

router.delete('/delete/:id', apiController.deletePhrase);













export default router;