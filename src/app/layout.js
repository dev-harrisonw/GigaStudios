import FooterThree from "@/common/footer/FooterThree";
import HeaderOne from "@/common/header/HeaderOne";
import HeaderTopBar from "@/common/header/HeaderTopBar";
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
  return (
    <html lang="en">
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-RQ96RJ4M5S"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-RQ96RJ4M5S');
      </script>
      </head>
      <body>
        <HeaderTopBar />
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-not-transparent"
        />
        {children}
        <FooterThree />
      </body>
    </html>
  );
}
