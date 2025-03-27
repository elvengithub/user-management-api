import { Router } from "express"
import {createUser} from "../controllers/user.controllers";
import {deleteUser} from "../controllers/user.controllers"
export const userRouter = Router();

//CREATE ONE USER
userRouter.post('/', createUser);

//delete one user
userRouter.delete('/:id', deleteUser)

