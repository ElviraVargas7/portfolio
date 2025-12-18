import InfoCard from "../common/InfoCard/InfoCard";

const SkillsTechStack = () => {
  return (
    <div className="w-full">
      <h2 className="font-semibold text-5xl mb-4 text-center w-full">
        Skills / Tech Stack
      </h2>

      <div className="w-full flex justify-center mb-8">
        <hr className="border-2 border-solid border-[#c7417b] rounded-3xl w-20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoCard
          title="Backend & APIs"
          tech_stack={[
            "Python (FastAPI, Pydantic, Pytest)",
            "Node.js (Express, REST APIs)",
            "C# / .NET (ASP.NET Core)",
          ]}
        />
        <InfoCard
          title="Frontend"
          tech_stack={[
            "React",
            "Next.js",
            "Material UI",
            "Sass",
            "Tailwind CSS",
            "Redux",
            "Blazor",
          ]}
        />
        <InfoCard
          title="Databases & Caching"
          tech_stack={["PostgreSQL", "Redis"]}
        />
        <InfoCard
          title="AI & LLMs"
          tech_stack={[
            "OpenAI API",
            "LangChain",
            "LangServe",
            "Tool based AI agents",
            "Prompt driven workflows",
          ]}
        />
        <InfoCard
          title="Messaging & Integrations"
          tech_stack={[
            "PostgreSQL",
            "Telegram API",
            "External API integrations",
            "Real time messaging systems",
          ]}
        />
        <InfoCard
          title="Cloud & DevOps"
          tech_stack={[
            "Docker & Docker Compose",
            "Azure Functions",
            "AWS (EC2, ECS, RDS, S3)",
            "CI/CD (Azure DevOps, Bitbucket Pipelines)",
          ]}
        />
        <InfoCard
          title="Testing & Quality"
          tech_stack={["Pytest", "Jest", "Data validation & automated testing"]}
        />
      </div>
    </div>
  );
};

export default SkillsTechStack;
