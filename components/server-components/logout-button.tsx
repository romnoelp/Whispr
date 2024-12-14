import { logout } from "@/app/logout/actions";
import React from "react";
import { Button } from "../ui/button";

export const LogoutButton = () => {
  return (
    <form action={logout}>
      <Button variant={"link"} type="submit">
        <span>Logout</span>
      </Button>
    </form>
  );
};
