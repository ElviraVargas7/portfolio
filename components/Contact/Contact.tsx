import Image from "next/image";
import HighlightCard from "../common/HighlightCard/HighlightCard";

const Contact = () => {
  return (
    <div className="w-full">
      <h2
        id="contact"
        className="font-semibold text-5xl mb-4 text-center w-full scroll-mt-24"
      >
        Let's connect!
      </h2>

      <div className="w-full flex justify-center mb-8">
        <hr className="border-2 border-solid border-[#c7417b] rounded-3xl w-20" />
      </div>

      <p className="text-lg text-center w-full text-[#7a5e73] dark:text-[#FFB8DB] mb-12">
        If you’d like to discuss a project, collaboration, or role, feel free to
        reach out. You can also view my complete CV with detailed experience,
        skills, and downloadable PDF.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <HighlightCard
          title="Email"
          description="elviravarber@gmail.com"
          iconPath={"/icons/email-pink.svg"}
          iconAlt={"Email Icon"}
        />

        <HighlightCard
          title="LinkedIn"
          description="Elvira Vargas"
          iconPath={"/icons/linkedin-pink.svg"}
          iconAlt={"LinkedIn Icon"}
        />

        <HighlightCard
          title="Location"
          description="León, Guanajuato. México"
          iconPath={"/icons/location-pink.svg"}
          iconAlt={"Location Icon"}
        />

        <HighlightCard
          title="Availability"
          description="Open to remote opportunities"
          iconPath={"/icons/remote-pink.svg"}
          iconAlt={"Remote Icon"}
        />

        <div className="flex justify-center col-span-1 md:col-span-2 mt-4">
          <button className="flex w-full justify-center items-center gap-2 bg-[#c7417b] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#a53060] transition duration-300">
            <Image
              src="/icons/external-link-white.svg"
              alt="External Link Icon"
              width={25}
              height={10}
            />
            View Full CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
