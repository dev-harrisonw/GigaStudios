import FooterThree from "@/common/footer/FooterThree";
import HeaderOne from "@/common/header/HeaderOne";
import HeaderTopBar from "@/common/header/HeaderTopBar";
import Script from "next/script"; // Import Script for adding external scripts
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname for tracking page changes
import { pageview } from "@/lib/gtag"; // Import the pageview function you created earlier
import "../assets/scss/style.scss";

export const metadata = {
  title: "GigaStudios - Development Studio",
  description: "GigaStudios – Development Studio",
  authors: [{ name: "Harrison Warburton" }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    if (window.gtag) {
      pageview(pathname); // Call the pageview function on pathname change
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-RQ96RJ4M5S`} // Your GA tracking ID
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RQ96RJ4M5S', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>
        <HeaderTopBar />
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-not-transparent"
        />
        {children} {/* Render child components here */}
        <FooterThree />
      </body>
    </html>
  );
}
