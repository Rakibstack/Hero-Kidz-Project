import { collectionName, dbConnect } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const data = await dbConnect(collectionName.PRODUCTS).find().toArray();
  return data;
};

export const getSingleProduct = async (id) => {
  if (id.length !== 24) {
    return {};
  }
  const query = { _id: new ObjectId(id) };
  const data = await dbConnect(collectionName.PRODUCTS).findOne(query);

  return {
    ...data,
    _id: data._id.toString(),
  };
};
