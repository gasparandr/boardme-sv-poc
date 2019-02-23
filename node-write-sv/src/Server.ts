
import DataController from "./controllers/DataController";

require( "dotenv" ).config();

import * as compression from "compression";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as express from "express";
import * as cors from "cors";









class Server {

    public app: express.Application;





    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.errors();
        this.error404();
    }



    public config() {

        const MONGO_URI = "mongodb://mongo:27017/boardme";

        mongoose.set( "useCreateIndex", true );
        mongoose.connect( MONGO_URI || process.env.MONGODB_URI, { useNewUrlParser: true } );


        this.app.use( bodyParser.urlencoded( { extended: true } ) );
        this.app.use( bodyParser.json() );
        this.app.use( compression() );
        this.app.use( cors() );


    }



    public routes() {
        this.app.use( '/data', DataController );

    }



    public errors() {
        this.app.use( (err, req, res, next) => {
            res.status( 422 ).json( { success: false, message: err.message, code: err.statusCode } );
        });
    }



    public error404() {
        this.app.use( '*', (req, res, next) => {
            res.status( 404 ).json( { success: false, message: "Route not found." } );
        });
    }

}



export default new Server().app;