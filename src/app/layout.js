export const metadata = {
  title: "To-Do List App using Next.js and Material UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
