"use client";
import React from "react";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <>
      Not signed in <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default SignOut;
