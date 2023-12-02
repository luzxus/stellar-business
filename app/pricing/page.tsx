"use client"
import SectionTitle from '@/components/Common/SectionTitle'
import OfferList from '@/components/Pricing/OfferList'
import PricingBox from '@/components/Pricing/PricingBox'
import React, { useState } from 'react'
import Courses from '../courses/page'

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="mt-[10rem] relative z-10 py-16 md:py-20 lg:py-28">
    <div className="container">
      <SectionTitle
        title="Enkel och tydlig prissättning"
        paragraph="Välj att betala av i månaden eller allt på en gång med ett fast pris"
        center
        width="665px"
      />

      <div className="w-full">
        <div
          className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
          data-wow-delay=".1s"
        >
          <span
            onClick={() => setIsMonthly(true)}
            className={`${
              isMonthly
                ? "pointer-events-none text-primary"
                : "text-dark dark:text-white"
            } mr-4 cursor-pointer text-base font-semibold`}
          >
            Månadspris
          </span>
          <div
            onClick={() => setIsMonthly(!isMonthly)}
            className="flex cursor-pointer items-center"
          >
            <div className="relative">
              <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
              <div
                className={`${
                  isMonthly ? "" : "translate-x-full"
                } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
              >
                <span className="active h-4 w-4 rounded-full bg-white"></span>
              </div>
            </div>
          </div>
          <span
            onClick={() => setIsMonthly(false)}
            className={`${
              isMonthly
                ? "text-dark dark:text-white"
                : "pointer-events-none text-primary"
            } ml-4 cursor-pointer text-base font-semibold`}
          >
            Fast pris
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {" "}
        <PricingBox
          packageName="Bas"
          price={isMonthly ? "500" : "5 000"}
          duration={isMonthly ? "mån" : "fast"}
          subtitle="En enkel och statisk hemsida med upp till 5 sidor, anpassad design, responsiv layout, grundläggande SEO och kontaktformulär."
        >
          {" "}
          <OfferList
            text="En enkel och statisk hemsida med 1-5 sidor"
            status="active"
          />{" "}
          <OfferList
            text="Anpassad design efter dina önskemål och målgrupp"
            status="active"
          />{" "}
          <OfferList
            text="Responsiv layout som fungerar bra på olika enheter och skärmstorlekar"
            status="active"
          />{" "}
          <OfferList
            text="Grundläggande SEO för att optimera din hemsida för sökmotorer"
            status="active"
          />{" "}
          <OfferList
            text="Kontaktformulär för att kommunicera med dina besökare och potentiella kunder"
            status="active"
          />{" "}
        </PricingBox>{" "}
        <PricingBox
          packageName="Premium"
          price={isMonthly ? "1 500" : "15 000"}
          duration={isMonthly ? "mån" : "fast"}
          subtitle="En mer avancerad och dynamisk hemsida med upp till 50 sidor, skräddarsydd design, responsiv layout, avancerad SEO, blogg, innehållshanteringssystem, sociala medier integration och analysverktyg."
        >
          {" "}
          <OfferList
            text="En mer avancerad och dynamisk hemsida med 1-10 sidor"
            status="active"
          />{" "}
          <OfferList
            text="Skräddarsydd design som är unik och professionell"
            status="active"
          />{" "}
          <OfferList
            text="Responsiv layout som anpassar sig till olika enheter och skärmstorlekar"
            status="active"
          />{" "}
          <OfferList
            text="Avancerad SEO för att förbättra din hemsidas ranking och synlighet på nätet"
            status="active"
          />{" "}
          <OfferList
            text="Blogg för att dela nyheter, tips, och information med dina besökare och kunder"
            status="active"
          />{" "}
          <OfferList
            text="Innehållshanteringssystem för att enkelt uppdatera och redigera din hemsida"
            status="active"
          />{" "}
          <OfferList
            text="Sociala medier integration för att koppla din hemsida till dina sociala nätverk och öka din räckvidd"
            status="active"
          />{" "}
          <OfferList
            text="Analysverktyg för att mäta och analysera din hemsidas trafik och prestanda"
            status="active"
          />{" "}
        </PricingBox>{" "}
        <PricingBox
          packageName="Ecommerce"
          price={isMonthly ? "2 500" : "25 000"}
          duration={isMonthly ? "mån" : "fast"}
          subtitle="En fullfjädrad e-handelsplattform med obegränsat antal sidor, unik design, responsiv layout, expert SEO, blogg, innehållshanteringssystem, sociala medier integration, analysverktyg, betalningslösningar, produktkatalog,kundvagn och kundservice."
        >
          {" "}
          <OfferList
            text="En fullfjädrad e-handelsplattform med upp till 10 undersidor"
            status="active"
          />{" "}
          <OfferList
            text="Unik design som är attraktiv och användarvänlig"
            status="active"
          />{" "}
          <OfferList
            text="Responsiv layout som ger en smidig och säker köpupplevelse på olika enheter och skärmstorlekar"
            status="active"
          />{" "}
          <OfferList
            text="Expert SEO för att maximera din hemsidas konvertering och försäljning"
            status="active"
          />{" "}
          <OfferList
            text="Blogg för att marknadsföra och informera om dina produkter och tjänster"
            status="active"
          />{" "}
          <OfferList
            text="Innehållshanteringssystem (CMS) för att enkelt lägga till, ta bort, och ändra dina produkter och sidor"
            status="active"
          />{" "}
          <OfferList
            text="Sociala medier integration för att sprida ditt varumärke och få fler kunder"
            status="active"
          />{" "}
          <OfferList
            text="Analysverktyg för att spåra och utvärdera din försäljning"
            status="active"
          />{" "}
          <OfferList
            text="Betalningslösningar för att erbjuda olika betalningsalternativ och valutor till dina kunder"
            status="active"
          />{" "}
          <OfferList
            text="Produktkatalog för att visa upp dina produkter på ett snyggt och organiserat sätt"
            status="active"
          />{" "}
          <OfferList
            text="Kundvagn för att låta dina kunder lägga till, ändra, och ta bort produkter från sin beställning"
            status="active"
          />{" "}
          <OfferList
            text="Kundservice för att ge dina kunder support och svara på deras frågor och feedback"
            status="active"
          />{" "}
        </PricingBox>{" "}
      </div>
      <Courses/>
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

export default Pricing