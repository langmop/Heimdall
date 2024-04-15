import { platforms } from "@/constants/platform";
import { NextResponse } from "next/server";

import getLeetcodeData from "@/helper/getLeetcodeData";
import getCodechefData from "@/helper/getCodechefData";
import getCodeforcesData from "@/helper/getCodeforcesData";

export async function GET(request, { params: { platform, username } }) {
  let data;
  switch (platform) {
    case platforms.leetcode:
      data = await getLeetcodeData(username);
      break;

    case platforms.codechef:
      data = await getCodechefData(username);
      break;

    case platforms.codeforces:
      data = await getCodeforcesData(username);
      break;
  }

  return NextResponse.json({
    data,
  });
}
