import React from "react";
import { Menu } from "lucide-react";

// clerk
import { UserButton } from "@clerk/nextjs";

// ui components
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
