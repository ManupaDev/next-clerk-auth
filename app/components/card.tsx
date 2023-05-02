"use client";

import { useUser, SignIn, SignedOut } from "@clerk/nextjs";

function Card() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl">Hello, {`${user.fullName ? user.fullName : user.emailAddresses}`}</h1>
    </div>
  );
}

export default Card;
