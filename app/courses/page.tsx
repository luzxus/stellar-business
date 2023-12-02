import SectionTitle from "@/components/Common/SectionTitle";
import OfferList from "@/components/Pricing/OfferList";
import PricingBox from "@/components/Pricing/PricingBox";

const Courses = () => {
    return (
        <section id="courses" className="mt-[10rem] relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container flex justify-center items-center flex-col">
          <SectionTitle
            title="Öka dina färdigheter med våra expertkurser inom webbutveckling"
            paragraph="Lås upp kraften inom webbutveckling med våra specialiserade kurser"
            center
            width="665px"
          />
          <div className="">
            <PricingBox
              packageName="Bas"
              price={ "500" }
              duration={"per timme"}
              subtitle="Skräddarsydd inlärning: Designa ditt läroplan baserat på dina preferenser"
            >
              <OfferList
                text="Behärska React"
                status="active"
              />
          <OfferList
            text="Allt du behöver veta inom CSS för att klara dig"
            status="active"
          />{" "}
          <OfferList
            text="Behärska Javascript"
            status="active"
          />{" "}
          <OfferList
            text="Kontakta oss gärna om du är intresserad av något specifikt inom webbutveckling"
            status="active"
          />{" "}
      
        </PricingBox>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 z-[-1]">
      <svg
        width="239"
        height="601"
        viewBox="0 0 239 601"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.3"
          x="-184.451"
          y="600.973"
          width="196"
          height="541.607"
          rx="2"
          transform="rotate(-128.7 -184.451 600.973)"
          fill="url(#paint0_linear_93:235)"
        />
        <rect
          opacity="0.3"
          x="-188.201"
          y="385.272"
          width="59.7544"
          height="541.607"
          rx="2"
          transform="rotate(-128.7 -188.201 385.272)"
          fill="url(#paint1_linear_93:235)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_93:235"
            x1="-90.1184"
            y1="420.414"
            x2="-90.1184"
            y2="1131.65"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_93:235"
            x1="-159.441"
            y1="204.714"
            x2="-159.441"
            y2="915.952"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </section>
    )
}
  export default Courses;