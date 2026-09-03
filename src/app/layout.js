import { Cormorant_Garamond, Montserrat } from "next/font/google";

import Navbar from "@/components/layout/nav/navbar";
import "./globals.css";
import styles from "./page.module.css";

export const metadata = {
  title: "UK Facilities",
  description:
    "UK Facilities is a platform for managing facilities in Ahmedabad.",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        <div className={styles.rootLayout}>
          <Navbar />
          <div className={styles.mainLayout}>{children}</div>
        </div>
      </body>
    </html>
  );
}
