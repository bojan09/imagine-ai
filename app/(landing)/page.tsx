import React from "react";
import Link from "next/link";

// ui components
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div>
      <p>LandingPage (Unprotected)</p>

      {/* Buttons */}
      <Link href="/sign-in">
        <Button>Login</Button>
      </Link>

      <Link href="/sign-up">
        <Button>Register</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
