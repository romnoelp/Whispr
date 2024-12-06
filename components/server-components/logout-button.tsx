import { logout } from "@/app/logout/actions";
import React from "react";
import { Button } from "../ui/button";

export const LogoutButton = () => {
  return (
    <form action={logout}>
      <Button type="submit">Logout</Button>
    </form>
  );
};
 