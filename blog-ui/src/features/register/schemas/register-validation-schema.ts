import {z} from 'zod';

export const registerValidationSchema = z.object({
    email: z.string().min(1, {message: 'Email is required'}).email({message: 'Invalid email format'}), 
    password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
    fullName: z.string().min(6, {message: 'Full name is required'}), 
    username: z.string().min(6, {message: 'Username is required'}).max(20, {message: 'Username have maximum 20 characters'})
})