import { ProjectProps } from "@/interfaces/ProjectProps";
import Image from "next/image";
import SkillsTechChip from "../SkillsTechStack/SkillsTechChip/SkillsTechChip";
import TechChip from "../common/TechChip/TechChip";
import DetailItem from "../common/DetailItem/DetailItem";
import TechStackItem from "./TechStackItem/TechStackItem";

const ProjectDetail = ({
  selectedProject,
}: {
  selectedProject: ProjectProps | null;
}) => {
  return (
    <div className="flex flex-col max-h-[80vh] flex-1 rounded-2xl overflow-y-auto min-h-0">
      <div className="w-full h-52 shrink-0 relative overflow-hidden rounded-xl rounded-b-none rounded-tr-none">
        <Image
          src="/whatsapp-delete.jpeg"
          alt="WhatsApp integration project screenshot"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col gap-6 bg-[#fce7f3] p-8 rounded-lg rounded-t-none text-[#7a5e73]">
        <h2 className="font-bold text-black text-2xl">
          {selectedProject?.title}
        </h2>

        <div>
          <p>{selectedProject?.summary}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg text-[#7a5e73] gap-4">
          <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-row gap-3">
              <Image
                src="/icons/problem-red.svg"
                alt="Problem icon"
                width={20}
                height={5}
                loading="lazy"
              />
              <h3 className="font-bold text-black">Problem</h3>
            </div>
            <p className="text-sm"> {selectedProject?.problem}</p>
          </div>

          <div className="flex flex-col gap-3 bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-row gap-3">
              <Image
                src="/icons/check-circle-pink.svg"
                alt="Goal icon"
                width={20}
                height={5}
                loading="lazy"
              />
              <h3 className="font-bold text-black">Goal</h3>
            </div>
            <p className="text-sm">{selectedProject?.goal}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[#f0aac8]">
            <hr />
          </div>

          <div className="flex flex-row justify-center gap-4 flex-wrap">
            {selectedProject?.tech_stack &&
              Object.entries(selectedProject.tech_stack).map(([key, value]) => (
                <TechStackItem
                  key={key}
                  tech={key.toUpperCase().replace(/_/g, " ")}
                  description={value}
                />
              ))}
          </div>

          <div className="text-[#f0aac8]">
            <hr />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-black">Target Users</h3>
          <div className="flex flex-row gap-2 w-fit flex-wrap">
            {selectedProject?.target_users &&
              Object.values(selectedProject.target_users).map((item) => (
                <TechChip key={item} tech={item} />
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-black">System Overview</h3>
          <div className="border-solid border-l-2 border-[#c7417b] pl-4">
            <p>{selectedProject?.system_overview}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-black">Core Features</h3>
          {selectedProject?.core_features.map((feature, index) => (
            <DetailItem key={index} description={feature} dotColor="#c7417b" />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-black">Technical Challenges</h3>
          {selectedProject?.technical_challenges.map((feature, index) => (
            <DetailItem key={index} description={feature} dotColor="#ff8605" />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-black">
            Architecture & Design Decisions
          </h3>
          {selectedProject?.architecture_design_decisions.map(
            (feature, index) => (
              <DetailItem
                key={index}
                description={feature}
                dotColor="#21bcff"
              />
            )
          )}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-black">Screenshots/Diagrams</h3>
          {selectedProject?.screenshots_diagrams.map((feature, index) => (
            <DetailItem key={index} description={feature} dotColor="#ff2056" />
          ))}
        </div>

        <div className="flex flex-col gap-4 bg-[#F5D6E1] p-4 rounded-lg border border-solid border-[#ecb0ca]">
          <div className="flex flex-row gap-3">
            <Image
              src="/icons/check-circle-pink.svg"
              alt="Goal icon"
              width={20}
              height={5}
              loading="lazy"
            />
            <h3 className="font-bold text-black">Outcome</h3>
          </div>
          <p>{selectedProject?.outcome}</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button className="flex flex-row gap-2 border border-solid border-[#c7417b] text-[#c7417b] px-2 py-2 rounded-lg text-sm font-semibold justify-center">
            <Image
              src="/icons/github-pink.svg"
              alt="Github icon"
              width={20}
              height={5}
              loading="lazy"
            />
            Code
          </button>

          <button className="flex flex-row gap-2 bg-[#c7417b] text-white px-2 py-2 rounded-lg text-sm font-semibold justify-center">
            <Image
              src="/icons/external-link-white.svg"
              alt="External link icon"
              width={20}
              height={5}
              loading="lazy"
            />
            Live
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
