"use client";

import { LogoutButton } from "@/components/server-components/logout-button";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const supabase = await createClient();
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        console.error(error);
      } else {
        setUser(data.user);
      }
    };

    getUser();
  }, []);

  console.log({ user });

  return (
    <div>
      <h1>{user?.email}</h1>
      <h1>test</h1>
      <LogoutButton />
    </div>
  );
};

export default Home;
