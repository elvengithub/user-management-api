import { Router } from "express"
import  {deleteUser}  from "../controllers/user.controllers"
import { getAllUsers, getUserById, } from "../controllers/user.controllers";
import {createUser} from "../controllers/user.controllers";

export const userRouter = Router()

//DELETE ONE USER
userRouter.delete('/:id', deleteUser)

// GET ALL USERS
userRouter.get("/", getAllUsers);

// GET ONE USER BY ID
userRouter.get("/:id", getUserById);

// CREATE ONE USER
userRouter.post('/', createUser);