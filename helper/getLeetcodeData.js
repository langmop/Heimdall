import { LeetCode } from "leetcode-query";

export default async function (username) {
  const leetcode = new LeetCode();
  const user = await leetcode.user(username);

  return user?.matchedUser?.profile;
}
