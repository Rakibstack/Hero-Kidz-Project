import { dbConnect } from "@/app/lib/connectDB";

export const getProducts = async () => {
  const data = await dbConnect("products").find().toArray();
  return data;
};
