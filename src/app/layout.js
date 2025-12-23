export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Gokulakannan - Python Full Stack Developer",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
