import { Request, Response } from "express";
import User from "../models/userModel";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        console.log('inside get all users')
        // const newUser = {
        //     name: 'rutuj',
        //     age: 21
        // }
        // await User.insertMany([newUser])
        const users = await User.find({})
        console.log(users)
        res.json(users);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};