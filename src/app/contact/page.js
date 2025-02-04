import ContactOne from "@/elements/contact/ContactOne";
import SectionTitle from "@/elements/sectionTitle/SectionTitle";
import Head from "next/head"; // Import Head for modifying the document head
import { useEffect } from "react"; // Import useEffect for tracking page views

export const metadata = {
  title: "Contact GigaStudios | Reach Out for Development Solutions",
  description:
    "Have questions or inquiries? Contact GigaStudios for unparalleled development services. Our team is ready to assist you in bringing your digital ideas to life. Get in touch with us today.",
  alternates: {
    canonical: "https://www.gigastudios.co.uk/contact",
  },
};

const ContactPage = () => {
  useEffect(() => {
    // Tracking page view for Google Analytics
    if (window.gtag) {
      window.gtag('config', 'G-RQ96RJ4M5S', {
        page_path: '/contact', // Update this to the current page path
      });
    }
  }, []);

  return (
    <>
      <Head>
        {/* Google Tag Manager script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RQ96RJ4M5S"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RQ96RJ4M5S', {
              page_path: '/contact', // Ensure this matches the page path
            });
          `}
        </script>
      </Head>
      <div className="main-content">
        {/* Start Contact Area */}
        <div className="rwt-contact-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb--40">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Contact Us"
                  title="Here's how you can get in touch."
                  description="No matter the project size, big or small, we're here to help!"
                />
              </div>
            </div>
            <ContactOne />
          </div>
        </div>
        {/* End Contact Area */}
      </div>
    </>
  );
};

export default ContactPage;
