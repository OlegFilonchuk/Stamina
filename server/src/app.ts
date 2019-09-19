import * as express from 'express';
import * as cors from 'cors';
import { router } from './router';
import { errorHandler } from './utils/errorHelper';

export class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config() {
        this.app.use('/public', express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use('/api', router);
        this.app.use(errorHandler);
    }

}