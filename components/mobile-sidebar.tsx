"use client";
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";

// ui components
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";

// components
import Sidebar from "./sidebar";

const MobileSidebar = () => {
  const [isMounted, setIsMountet] = useState(false);

  useEffect(() => {
    setIsMountet(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
