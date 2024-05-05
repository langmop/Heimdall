"use client";
import React from "react";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default SignIn;
