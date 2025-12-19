import { aboutMe } from "@/data/aboutMe";
import HighlightCard from "../common/HighlightCard/HighlightCard";

const AboutMe = () => {
  return (
    <div className="w-full">
      <h2 id="about" className="font-semibold text-5xl mb-4 text-center w-full">
        About Me
      </h2>

      <div className="w-full flex justify-center mb-8">
        <hr className="border-2 border-solid border-[#c7417b] rounded-3xl w-20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          {aboutMe.description.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-center w-full text-[#523e4d] dark:text-[#FFB8DB] mb-6"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {aboutMe.highlights.map((highlight, index) => (
            <HighlightCard
              key={index}
              title={highlight.title}
              description={highlight.description}
              iconPath={highlight.iconPath}
              iconAlt={highlight.iconAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
