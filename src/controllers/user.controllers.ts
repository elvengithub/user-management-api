import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Request, Response } from "express";

const userRepository = AppDataSource.getRepository(User);
export const deleteUser = (req: Request, res: Response) => {

    userRepository.delete(req.params.id)
    res.json({ message: "User deleted" });
}