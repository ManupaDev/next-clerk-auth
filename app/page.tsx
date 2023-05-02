import { Metadata } from "next";
import Card from "./components/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next13 App + Tailwind + Clerk | Home",
  description: "A minimalist NextJS13 Auth Project",
};

export default function Page() {
  return (
    <div className="font-sans">
      <h1 className="text-2xl">Home</h1>
      <Link  href="/admin" className="text-2xl text-sky-700 underline">
        Go To Admin
      </Link>
    </div>
  );
}
