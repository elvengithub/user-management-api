import { Router } from "express"
import {deleteUser} from "../controllers/user.controllers"

export const userRouter = Router();

//delete one user
userRouter.delete('/:id', deleteUser)