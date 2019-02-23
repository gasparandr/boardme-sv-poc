

import { Router, Request, Response, NextFunction } from "express";



class PageController {

    router: Router;



    constructor() {
        this.router = Router();
        this.routes();
    }



    public routes() {
        this.router.get( "/", this.index );
        this.router.get( "/dashboard", this.dashboard );

    }



    public index(req: Request, res: Response, next: NextFunction) {

        res.render( "index", { title: "Onboarding" } );

    }


    public dashboard(req: Request, res: Response, next: NextFunction) {
        res.render( "dashboard", { title: "Onboarding" } );
    }


}


export default new PageController().router;