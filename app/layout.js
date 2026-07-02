import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "PrepWise",
  description: "An AI-powered platform for preparing for mock interviews",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
