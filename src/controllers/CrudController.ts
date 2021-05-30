import { Request, Response } from 'express';

export abstract class CrudController {
    public abstract create(req: Request, res: Response): void;
    public abstract readall(req: Request, res: Response): void;
    public abstract update(req: Request, res: Response): void;
    public abstract delete(req: Request, res: Response): void;
    public abstract readbyid1(req: Request, res: Response):void;
    public abstract readbyid2(req: Request, res: Response):void;
    public abstract readbyid3(req: Request, res: Response):void;
    public abstract readbyid4(req: Request, res: Response):void;
    public abstract readbyid5(req: Request, res: Response):void;
    public abstract readbyid6(req: Request, res: Response):void;



}