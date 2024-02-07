export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>PIPPO LAYOUT</div>
      {children}
    </div>
  );
}
