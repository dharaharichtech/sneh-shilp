import "./globals.css";
import Header from "@/Layouts/Header/header";
import Footer from "@/Layouts/Footer/footer";

export const metadata = {
  title: "Snehal Shilp Foundation",
  description: "Official website of Snehal Shilp Foundation",
  icons: {
    icon: "/Svg/snehshilp.svg", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Extra Favicon Safety */}
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>

      <body className="antialiased">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
