import { Router } from 'express';
import { createUser, getUserById, updateUser } from '../controllers/userController';
import { validateRegistration } from '../middlewares/validationMiddleware';

export const userRouter = Router();

userRouter.post('/',
    validateRegistration,
    createUser
);

userRouter.get('/:id',
    getUserById
);

userRouter.put('/',
    updateUser
);
