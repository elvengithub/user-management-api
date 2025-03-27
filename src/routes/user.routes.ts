import { Router } from "express"
import { getAllUsers, getUserById, } from "../controllers/user.controllers";
import {createUser} from "../controllers/user.controllers";

export const userRouter = Router()



// GET ALL USERS
userRouter.get("/", getAllUsers);

// GET ONE USER BY ID
userRouter.get("/:id", getUserById);

// CREATE ONE USER
userRouter.post('/', createUser);
