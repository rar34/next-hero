import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Heading from "@/components/Heading";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight:['400', '500', '700', '900'] ,subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'Next Hero',
    template: '%s | Next Hero'
  },
  description: "Super powerful next website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Heading></Heading>
        <div className="container min-h-screen mx-auto mt-6">
          {children}
        </div>
        <footer className="bg-orange-500">
          <p className="text-center p-4 text-white">This is my footer</p>
        </footer>
      </body>
    </html>
  );
}
