import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error | any, req: Request, res: Response, next: NextFunction) => {
    if(!err.status) {
        next(err.message);
        res.status(500).send(err.message);
    }
    else {
        res.status(err.status).send(err.message);
    }
};

export class ApplicationError extends Error {

    public status: number;

    constructor(message, status?) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message || 'Something went wrong. Please try again.';
        this.status = status || 500;
    }
}