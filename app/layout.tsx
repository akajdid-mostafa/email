import "./globals.css";


export const metadata = {
  title: 'Ocean connecting Nettoyage',
  description: "Nous sommes spécialisés dans le nettoyage et l'entretien",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  
  return (
    <html lang={locale} >
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        
          <div>
            <h1>All this for Email</h1>
          </div>
        
      </body>
    </html>
  );
}
