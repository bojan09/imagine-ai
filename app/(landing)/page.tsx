import React from "react";
import Link from "next/link";

// ui components
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="grid gap-5 ml-4">
      <p>LandingPage (Unprotected)</p>

      <Link href="/sign-in">
        <Button>Login</Button>
      </Link>

      <Link href="/sign-up">
        <Button>Register</Button>
      </Link>

      <Link href="/dashboard">
        <Button>Dashboard</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
