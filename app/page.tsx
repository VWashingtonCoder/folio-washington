"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <Navbar open={navOpen} openNav={() => setNavOpen(!navOpen)} />
    </div>
  );
}
