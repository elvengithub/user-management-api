import { Router } from "express"
<<<<<<< HEAD
import { getAllUsers, getUserById } from "../controllers/user.controllers";

export const userRouter = Router();

=======
import  {deleteUser}  from "../controllers/user.controllers"
import { getAllUsers, getUserById, } from "../controllers/user.controllers";
import {createUser} from "../controllers/user.controllers";

export const userRouter = Router()

//DELETE ONE USER
userRouter.delete('/:id', deleteUser)

>>>>>>> a305a1bfe267a5dcfa2c49e6df74dae9a59bc7bc
// GET ALL USERS
userRouter.get("/", getAllUsers);

// GET ONE USER BY ID
<<<<<<< HEAD
userRouter.get("/:id", getUserById);
=======
userRouter.get("/:id", getUserById);

// CREATE ONE USER
userRouter.post('/', createUser);
>>>>>>> a305a1bfe267a5dcfa2c49e6df74dae9a59bc7bc
