import {z} from 'zod';

export const loginValidationSchema = z.object({
    emailOrUsername: z.string().min(1, {message: 'Email or Username is required'}),
    password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
})