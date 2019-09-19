import { Request, Response, NextFunction } from 'express';
import { validationSchemas } from '../utils/validationScheme';
import { ApplicationError } from '../utils/errorHelper';

export const validateRegistration = async(req: Request, res: Response, next: NextFunction) => {
    try {
        await validationSchemas.registrationValidationScheme.validate(req.body);
        next();
    } catch (err) {
        next(new ApplicationError(err));
    }
};