import { Metadata } from "next";
import Card from "./../components/card";

export const metadata: Metadata = {
  title: "Next13 App + Tailwind + Clerk | Admin",
  description: "A minimalist NextJS13 Auth Project",
};

export default function Page() {
  return (
    <div className="font-sans">
      <Card />
    </div>
  );
}

