

import { Router, Request, Response, NextFunction } from "express";



class DataController {

    router: Router;



    constructor() {
        this.router = Router();
        this.routes();
    }



    public routes() {
        this.router.get( "/", this.data );
        this.router.get( "/populate", this.populate );

    }



    public data(req: Request, res: Response, next: NextFunction) {
        res.send( "Enjoy yo data bro" );
    }



    public populate(req: Request, res: Response, next: NextFunction) {
        res.send( "Populating... No I'm not... Stop telling me what to do _)_" );
    }


}


export default new DataController().router;