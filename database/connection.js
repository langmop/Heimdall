// import PocketBase from 'pocketbase';

// const pb = new PocketBase('http://127.0.0.1:8090');

// export default pb;

import PocketBase from "pocketbase";

const url = process.env.POCKETBASE_API;
const pb = new PocketBase(url);
await pb.admins.authWithPassword(
  process.env.POCKETBASE_ADMIN_NAME,
  process.env.POCKETBASE_ADMIN_PASSWORD
);
export default pb;
