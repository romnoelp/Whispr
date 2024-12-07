"use client";

import React from "react";
import { Button } from "../ui/button";
import { sign } from "crypto";
import signInWithGoogle from "@/app/login/actions";

const GoogleButton = () => {
  return (
    <Button
      className="w-full"
      onClick={() => {
        signInWithGoogle();
      }}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleButton;
