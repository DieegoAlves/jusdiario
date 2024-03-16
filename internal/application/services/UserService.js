import User from '../../domain/entities/User.js';

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create(userDto) {
    const userExists = await this.userRepository.findByEmail(userDto.email);
    if (userExists) {
      throw new Error('User already exists');
    }
    
    const createdUser = await this.userRepository.create(userDto);
    const userEntity = new User(createdUser);

    return userEntity;
  }
}

export default UserService;