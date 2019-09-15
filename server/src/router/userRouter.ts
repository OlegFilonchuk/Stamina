import { Router } from 'express';
import { User } from '../models/User';

export const userRouter = Router();

userRouter.post('/', async () => {
    console.log('user post');
    try {
        const newUser = await User.create({
            name: 'Johnny'
        });
        console.log(newUser);
    } catch(err) {
        console.log(err);
    }
});
userRouter.get('/', () => {
    console.log('user get');
});
userRouter.put('/', () => {
    console.log('user put');
});
