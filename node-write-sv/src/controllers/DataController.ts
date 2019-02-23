

import { Router, Request, Response, NextFunction } from "express";

import GuideConfig from "../models/GuideConfig";



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

        res.send( "Hello from write server!" );

        // GuideConfig.findOne()
        //     .then( config => res.status( 200 ).json( config ) )
        //     .catch( next );
    }



    public populate(req: Request, res: Response, next: NextFunction) {

        const guideConfig = new GuideConfig({
            name: "Awesome Guide",
            user: "Mr Jones",
            text: "Lorem ipsum",
            image: "https://googleimages.com/some-image.png",
            positionX: 200,
            positionY: 250,
            borderRadius: 3,
            backgroundColor: "#565669",
            color: "#533556",
            margin: 15,
            link: "https://www.google.com",
            width: "250px",
            height: "550px"
        });

        guideConfig.save()
            .then( () => res.status( 200 ).json( guideConfig ) )
            .catch( next );
    }


}


export default new DataController().router;