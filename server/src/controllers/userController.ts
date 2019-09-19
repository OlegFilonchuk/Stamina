import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';
import { ApplicationError } from '../utils/errorHelper';

export const createUser = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {nickName, password, email} = req.body;
        const newUser = await User.create({
            nickName,
            email,
            password
        });
        res.send(newUser);
    } catch(err) {
        next(new ApplicationError(err));
    }
};

export const getUserById = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const user = await User.findOne({where: {id}});
        res.send(user);
    } catch(err) {
        next(new ApplicationError(err));
    }
};

export const updateUser = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const [, [user]] = await User.update({
            ...req.body
        }, {
            where: {id: 1},
            returning: true
        });
        res.send(user);
    } catch(err) {
        next(new ApplicationError(err));
    }
};
