import axios from "axios";

export default async function getCodechefData(username) {
  const data = await axios.get(`${process.env.API_CODECHEF}/${username}`);
  return data?.data;
}
