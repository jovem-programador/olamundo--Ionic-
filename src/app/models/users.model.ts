// Formata dados do usuário
export interface User { 
    id: number;
    name: string;
    email: string;
    avatar: string;
    status: number;
    date: Date;
}

// O que esperar da response da listagem de usuários
export interface ResponseUsers {
    status: string;
    result: User[];
}

// O que esperar da response de apenas 1 usuário
export interface ResponseUser {
    status: string;
    result: User[];
}

// O'que esperar do response de delete
export interface ResponseDelUser {
    status: string;
    result: string;
}

// O'que esperar do response do post
export interface ResponsePostUser {
    status: string;
    result: string;
}

// O'que esperar do response do put
export interface ResponsePutUser {
    status: string;
    result: string;
}