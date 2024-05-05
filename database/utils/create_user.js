import { platforms } from "@/constants/platform";
import pb from "../connection";

export async function createUser(profile) {
  const { email, name, email: username, picture } = profile;

  let user;
  try {
    const users = await pb.collection("users").getFullList();
    if (!users.length || !users.find((element) => element.email == email)) {
      user = await pb.collection("users").create({
        email,
        name,
        username,
        avatar: picture,
        platforms: {
          [platforms.codechef]: "",
          [platforms.codeforces]: "",
          [platforms.leetcode]: "",
        },
      });
    }
  } catch (err) {
    console.log(err);
  }

  return user;
}
