import userModel from "../models/userModel.js";

export const create = async (req, res) => {
    try {
        const userData = new userModel(req.body);
        const { email } = userData;
        const userExists = await userModel.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        const savedUser = await userData.save();
        res.status(201).json(savedUser);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const fetch = async (req, res) => {
    try {
        const users = await userModel.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
