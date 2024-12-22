"use server"

import users from "@/models/users.model"
import connectToDatabase from "../dbConnection"

//this is going to be triggered by clerk through webhook
export async function  createUser(user){
    try {
        await connectToDatabase()
        const newUser= await users.create(user)
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        console.log(error)
    }
}