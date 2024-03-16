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

    async findByEmail(email) {
        try {
            const user = await User.findOne({ where: { email } });
            return user;
        }
        catch (error) {
            throw error;
        }
    }
}

export default UserRepository;