import { profile1 } from "@/public/images";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Behöver du hjälp? Kontakta oss
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              Om du har några funderingar kring våra tjänster, priser eller övrigt så tveka inte att kontakta oss så återkommer vi så snart vi kan!
              </p>
              <form data-netlify="true" name="contact-form" method="POST">
  <input type="hidden" name="form-name" value="contact-form" />
  <div className="-mx-4 flex flex-wrap">
    <div className="w-full px-4 md:w-1/2">
      <div className="mb-8">
        <label
          htmlFor="name"
          className="mb-3 block text-sm font-medium text-dark dark:text-white"
        >
          Namn
        </label>
        <input
          type="text"
          name="name" // Add the name attribute
          placeholder="Ange ditt namn"
          className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
      </div>
    </div>
    <div className="w-full px-4 md:w-1/2">
      <div className="mb-8">
        <label
          htmlFor="email"
          className="mb-3 block text-sm font-medium text-dark dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          name="email" // Add the name attribute
          placeholder="Email"
          className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
      </div>
    </div>
    <div className="w-full px-4">
      <div className="mb-8">
        <label
          htmlFor="message"
          className="mb-3 block text-sm font-medium text-dark dark:text-white"
        >
          Meddelande
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Skriv ditt meddelande"
          className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        ></textarea>
      </div>
    </div>
    <div className="w-full px-4">
      <button
        type="submit" // Add type attribute to make it a submit button
        className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
      >
        Skicka
      </button>
    </div>
  </div>
</form>

            </div>
          </div>
          <div className="Image-text flex flex-col mb-[10rem]">
          <Image className="rounded-full" width={300} height={300} alt="" src={profile1}/>
          <p className="text-center m-2 text-sm">Richard Grönroos</p>
          <p className="text-center m-2 text-xs">Ägare och ansvarig utvecklare</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
