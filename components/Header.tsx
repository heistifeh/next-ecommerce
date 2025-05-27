"use client";
import { useUser } from "@clerk/nextjs";
import { log } from "console";
import React from "react";

function Header() {
  const { user } = useUser();
  console.log("User data:", user);

  return <div>Header</div>;
}

export default Header;
