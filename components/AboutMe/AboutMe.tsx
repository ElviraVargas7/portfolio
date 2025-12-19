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
          <p className="text-lg text-center w-full text-[#523e4d] dark:text-[#FFB8DB] mb-6">
            I am a full stack software engineer with a strong focus on backend
            development, API design, and real time systems. I have experience
            building production ready platforms that integrate messaging
            services, AI powered agents, and business critical workflows,
            working across Node.js, FastAPI, .NET, and PostgreSQL.
          </p>
          <p className="text-lg text-center w-full text-[#523e4d] dark:text-[#FFB8DB] mb-6">
            My professional background includes developing AI driven backends
            connected to WhatsApp and Telegram, designing systems that process
            real time messages, files, and structured data at scale. I have
            worked extensively with LLM based solutions using LangChain and
            OpenAI APIs, implementing tool based retrieval, conversation
            summarization, and controlled AI behavior to ensure reliable and
            verifiable responses.
          </p>
          <p className="text-lg text-center w-full text-[#523e4d] dark:text-[#FFB8DB] mb-6">
            I am comfortable working across the stack when needed, building
            clean and accessible user interfaces with React and Next.js, and
            integrating them with robust backend services. I value clean
            architecture, clear separation of concerns, and backend driven
            business logic to ensure systems are maintainable, scalable, and
            easy to reason about.
          </p>
          <p className="text-lg text-center w-full text-[#523e4d] dark:text-[#FFB8DB] mb-6">
            I bring a problem solving mindset and strong engineering discipline,
            with hands on experience in cloud environments, containerized
            deployments, and CI/CD workflows. My goal is to build software that
            solves real business problems through thoughtful system design and
            reliable execution.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <HighlightCard
            title="Design aware engineering"
            description="Collaborating comfortably with UI concerns to build clean, accessible, and user friendly interfaces."
            iconPath={"/icons/design-pink.svg"}
            iconAlt={"Design Icon"}
          />

          <HighlightCard
            title="Clean code"
            description="Writing maintainable, scalable, and efficient code."
            iconPath={"/icons/code-pink.svg"}
            iconAlt={"Code Icon"}
          />

          <HighlightCard
            title="Production mindset"
            description="Building software with deployment, scalability, and long term maintenance."
            iconPath={"/icons/deploy-pink.svg"}
            iconAlt={"Deply Icon"}
          />

          <HighlightCard
            title="Thoughtful problem solver"
            description="Turning complex requirements into clear, reliable systems through careful design and execution."
            iconPath={"/icons/think-pink.svg"}
            iconAlt={"Think Icon"}
          />

          <HighlightCard
            title="Detail oriented"
            description="Meticulous attention to every pixel and interaction."
            iconPath={"/icons/detail-pink.svg"}
            iconAlt={"Detail Icon"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
