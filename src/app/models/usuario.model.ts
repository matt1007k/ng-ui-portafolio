export class Usuario {
    constructor(
        public username: string,
        public email: string,
        public password1: string,
        public password2?: string,
        public role?: string,
        public avatar?: string,
        public _id?: string,
    ){ }
}