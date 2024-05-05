import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const UserData = async () => {
  const session = await getServerSession(options);
  const {
    user: { email, image },
  } = session;
  return (
    <div className="flex relative gap-2 items-center flex-row-reverse m-4">
      <span>{email}</span>
      <Image src={image} height="40" width="40" alt="profile-image" className="rounded-full" />
    </div>
  );
};

export default UserData;
