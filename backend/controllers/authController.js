import { compare } from "bcrypt";
import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken'

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;
        // validation
        if (!name) {
            return res.send({ message: "Name is requred" })
        }
        if (!email) {
            return res.send({ message: "Email is requred" })
        }
        if (!password) {
            return res.send({ message: "Password is requred" })
        }
        if (!phone) {
            return res.send({ message: "Phone is Required" })
        }
        if (!address) {
            return res.send({ message: "Address is requred" })
        }

        //check user
        const existingUser = await userModel.findOne({ email })
        //existing user check
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'Already Registered Please login'
            })
        }

        //register use
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new userModel({ name, email, phone, address, password: hashedPassword }).save();

        res.status(201).send({
            success: true,
            message: 'User Register Successfully',
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in registeration',
            error
        })
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        // validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            })
        }
        //check user
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registered'
            })
        }

        const match = await compare(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Password'
            })
        }

        //token
        const token =  JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "30d",
        });
        res.status(200).send({
            success: true,
            message: 'Logged in successfully',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error
        })
    }
}

export const testController = (req, res) => {
    res.send('Protected Route');
}

