import express from "express";
import bodyParser from "body-parser";

import UserRepository from "./internal/domain/repositories/UserRepository.js";
import UserService from "./internal/application/services/UserService.js";
import UserController from "./internal/interfaces/controllers/UserController.js";
import UserRegisterRoutes from "./internal/interfaces/routes/UserRoutes.js";

import User from "./internal/domain/entities/User.js";

import { Sequelize } from "sequelize";

const PORT = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(bodyParser.json());

// Database
const sequelize = new Sequelize('jusdiario', 'jusdiario', '88224466Jd', {
    host: 'jusdiario-database.cdky68syo45y.us-east-1.rds.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

try {
    await sequelize.authenticate();
    console.log('[+] Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


// Models
User.initialize(sequelize);
User.sync({ force: true });

// Repositories
const userRepository = new UserRepository(sequelize);

// Services
const userService = new UserService(userRepository);

// Controllers
const userController = new UserController(userService);

// Routes
const userRoutes = UserRegisterRoutes(userController);

// Register routes
app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
    console.log(`[+] Server is running on port ${PORT}`);
});