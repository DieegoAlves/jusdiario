import User from '../../domain/entities/User.js';

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create(userDto) {
    const createdUser = await this.userRepository.create(userDto);
    const userEntity = new User(createdUser);

    return userEntity;
  }
}

export default UserService;