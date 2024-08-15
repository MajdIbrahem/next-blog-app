"use server";

import { revalidatePath } from "next/cache";
import { Post,User} from "./modals"
import { connectToDb } from "./utils";


export const addPost = async (formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { title, desc, slug, userId,img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
        title,
        desc,
        slug,
        userId,
        img
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
export const addUser = async (formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
    username,
    email,
    password,
    
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};






