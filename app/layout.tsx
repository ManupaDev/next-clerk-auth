import Navigation from "./components/navigation";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs/app-beta";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navigation />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
