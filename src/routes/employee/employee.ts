import  { Request, Response } from 'express';
import * as express from 'express';


import { employeeController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    employeeController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
    employeeController.readall(req, res);
    // employeeController.readbyid1(req, res);
    // employeeController.readbyid2(req, res);
    // employeeController.readbyid3(req, res);
    // employeeController.readbyid4(req, res);
    // employeeController.readbyid5(req, res);
    // employeeController.readbyid6(req, res);
});

router.put('/', (req: Request, res: Response) => {
    employeeController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
    employeeController.delete(req, res);
});