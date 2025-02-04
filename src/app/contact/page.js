import ContactOne from "@/elements/contact/ContactOne";
import SectionTitle from "@/elements/sectionTitle/SectionTitle";

export const metadata = {
  title: "Contact GigaStudios | Reach Out for Development Solutions",
  description:
    "Have questions or inquiries? Contact GigaStudios for unparalleled development services. Our team is ready to assist you in bringing your digital ideas to life. Get in touch with us today.",
  alternates: {
    canonical: "https://www.gigastudios.co.uk/contact",
  },
};

const ContactPage = () => {
  return (
    <div className="main-content">
      {/* Start Contact Area  */}
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
      {/* End Contact Area  */}
    </div>
  );
};

export default ContactPage;
