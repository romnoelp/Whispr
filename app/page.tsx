"use client";

import { LogoutButton } from "@/components/server-components/logout-button";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Home = () => {
  const [catData, setCatData] = useState("");

  const fetchCatData = async () => {
    try {
      const response = await fetch("/api/fetch-cat-fact"); 
      const data = await response.json();
      console.log("Cat Fact:", data.message); 
      setCatData(data.message); 
    } catch (error) {
      console.error("Error fetching cat data:", error);
    }
  };

  return (
    <div>
      <LogoutButton />
      <Button onClick={fetchCatData}>Fetch cat data</Button>
      {catData && <p>{catData}</p>} 
    </div>
  );
};

export default Home;
