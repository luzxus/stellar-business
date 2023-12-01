import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt sida",
  description: "En kontakt sida för stellarWeb solutions",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Kontakt"
        description="Hör av dig till oss och berätta vad du behöver hjälp med så återkommer vi så snart vi kan."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
