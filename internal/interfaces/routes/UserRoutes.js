import express from 'express';

const router = express.Router();

const UserRegisterRoutes = (UserController) => {
    router.post('/', UserController.createUser.bind(UserController));
    return router;
}

export default UserRegisterRoutes;