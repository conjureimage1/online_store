export default class UserDto {
    id;
    email;
    role;
    constructor(id, email, roles) {
        this.id = id
        this.email = email
        this.roles = roles
    }
}

