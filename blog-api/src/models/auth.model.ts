export type AuthRegisterRequest = {
    username: string; 
    email: string; 
    password: string; 
    fullName: string; 
}

export type AuthLoginRequest = {
    usernameOrEmail: string; 
    password: string;
}