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

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await userModel.findOne({_id: id})

        if(!userExist){
            return res.status(404).json({message: "User not Found"});
        }
        const updateUser = await userModel.findByIdAndUpdate(id, req.body, {new: true});
        res.status(201).json({message: "Data updated Successfully", updateUser})
        // updateUser.save();
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const deleteUser = async (req, res) => {
    try {

        const id = req.params.id;
        const userExist = await userModel.findOne({_id: id});

        if(!userExist){
            return res.status(404).json({message: "User not Found"});
        }

        const deleteUser = await userModel.findByIdAndDelete(id);
        res.status(201).json({message: "User deleted Successfuly"}, deleteUser);
        
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
}
