"use client";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Navigation() {
  return (
    <nav className="flex items-center justify-between mb-4 border-black p-4 shadow-md">
      <h1 className="text-4xl font-semibold">Auth</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </nav>
  );
}

export default Navigation;
