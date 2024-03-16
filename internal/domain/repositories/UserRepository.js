import User from "../entities/User.js";

class UserRepository {
    async create(user) {
        try {
            const createdUser = await User.create(user);
            return createdUser.dataValues;
        } catch (error) {
            throw error;
        }
    }
}

export default UserRepository;