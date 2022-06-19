import { Router } from 'express';
import * as apiController from '../controllers/apiController';

const router = Router();

router.get('/ping', apiController.ping);

router.get('/radomnumber', apiController.random);

router.get('/nameuser/:name', apiController.name);

router.post('/create', apiController.create)














export default router;