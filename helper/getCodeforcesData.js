import axios from "axios";

export default async function getCodeforcesData(username) {
  const data = await axios.get(process.env.API_CODEFORCES, {
    params: {
      handles: username,
    },
  });
  return data?.data;
}
