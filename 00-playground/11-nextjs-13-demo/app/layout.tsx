import "./globals.css";
import MainNavigation from "../components/ui/MainNavigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>NextJS 13 - Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <header>
          <MainNavigation />
        </header>
        {children}
      </body>
    </html>
  );
}
