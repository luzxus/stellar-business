import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { astronaut, rocket } from "@/public/images";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container relative">
          <SectionTitle
            title="Tjänster"
            paragraph="På StellarWeb Solutions tar vi ett fräscht och innovativt förhållningssätt till småföretagsrådgivning."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          <Image
                  src={rocket}
                  alt="about-image"
                  width={300}
                  height={0}
                  style={{height:"auto"}}
                  className="z-40 top-[-9rem] left-[19rem] md:top-[-14rem] scale-[0.6] md:scale-100 absolute flex drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
                />
        </div>
      </section>
    </>
  );
};

export default Features;
