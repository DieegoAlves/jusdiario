import crypto from 'crypto';

class UserRequestDTO {
    constructor(user) {
        this.name = user.name;
        this.email = user.email;
        this.phone = user.phone;
        this.password = this.hashPassword(user.password);
    }

    hashPassword(password) {
        return crypto.createHash('sha256').update(password).digest('hex');
    }
}

class UserResponseDTO {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.phone = user.phone;
    }
}


export { UserRequestDTO, UserResponseDTO };