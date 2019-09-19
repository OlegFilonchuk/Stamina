import * as yup from 'yup';
import { PASSWORD_LENGTH } from './constants';

export const validationSchemas = {
    registrationValidationScheme: yup.object().shape({
        nickName: yup
            .string()
            .required('Empty nickName field!'),
        email: yup
            .string()
            .required('Empty email field!')
            .email('Invalid email structure!'),
        password: yup
            .string()
            .required('Empty password field!')
            .test('len', `Password should be more than ${PASSWORD_LENGTH} characters!`,
                (val) => {
                    if(val){
                        return val.length > PASSWORD_LENGTH;
                    }
                    return true;
                }
            )
    })
};