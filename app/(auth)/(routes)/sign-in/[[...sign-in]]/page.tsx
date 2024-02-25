import React from "react";
import Link from "next/link";

// ui components
import { Button } from "@/components/ui/button";

// clerk
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div>
      <SignIn />

      <div className="mt-7 grid place-items-center">
        <Link href="/">
          <Button variant="secondary">Homepage</Button>
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
