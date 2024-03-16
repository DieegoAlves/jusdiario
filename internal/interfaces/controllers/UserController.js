import { UserRequestDTO, UserResponseDTO } from '../dtos/UserDto.js';

export default class UserController {
    constructor(service) {
        this.userService = service;
    }
    
    async createUser(req, res) {
        if(!req.body.name || !req.body.email || !req.body.phone || !req.body.password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const requestUser = new UserRequestDTO(req.body);
        try {
            const user = await this.userService.create(requestUser);
            const responseUser = new UserResponseDTO(user);

            return res.status(201).json(responseUser);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}