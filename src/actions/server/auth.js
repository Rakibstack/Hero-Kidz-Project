"use server";
import { collectionName, dbConnect } from "@/app/lib/connectDB";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { name, email, password } = payload;

  //   check payload
  if (!name || !email || !password) return null;

  //   check if user already exists
  const isExists = await dbConnect(collectionName.USERS).findOne({ email });
  if (isExists) return null;

  //   create user object

  const newUser = {
    providerID: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 15),
    role: "user",
    createAt: new Date(),
  };

  const result = await dbConnect(collectionName.USERS).insertOne(newUser);
  if (!result.acknowledged) return null;
  return {
    ...result,
    insertedId: result.insertedId.toString(),
  };
};
