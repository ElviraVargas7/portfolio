"use client";

import Image from "next/image";
import TechChip from "../common/TechChip/TechChip";
import { ProjectProps } from "@/interfaces/ProjectProps";

const ProjectCard = ({
  project,
  openDetailsModal,
}: {
  project: ProjectProps;
  openDetailsModal: (project: ProjectProps) => void;
}) => {
  return (
    <div className="w-full bg-white dark:bg-[#400827] p-4 rounded-xl flex flex-col gap-4">
      <div className="w-full h-48 relative overflow-hidden rounded-xl mb-5">
        <Image
          src="/whatsapp-delete.jpeg"
          alt="WhatsApp integration project screenshot"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-1">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>

          <p className="text-[#7a5e73] dark:text-[#FFB8DB]">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2 w-fit flex-wrap">
            {project.tech_stack &&
              Object.values(project.tech_stack).map((item) => (
                <TechChip key={item} tech={item} />
              ))}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => openDetailsModal(project)}
              className="col-span-2 flex flex-row gap-2 bg-[#c7417b] text-white px-2 py-2 rounded-lg text-sm font-semibold justify-center"
            >
              <Image
                src="/icons/view-pink.svg"
                alt="View icon"
                width={20}
                height={5}
                loading="lazy"
              />
              View Details
            </button>

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
    </div>
  );
};

export default ProjectCard;
