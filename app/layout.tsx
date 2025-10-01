import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Footer from "./component/Footer";
import { AUTHOR_NAME } from "./constant";
import Navbar from "./component/Navbar";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Site d'Auteur Moderne",
  description:
    "Un site web moderne et responsive pour un auteur, présentant sa biographie, ses livres et ses actualités.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} font-sans`}
      >
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
          <Navbar authorName={AUTHOR_NAME} />
          <main className="flex-grow">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
