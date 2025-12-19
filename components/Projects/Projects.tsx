"use client";

import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "@/data/projects/projectsDetails";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import { useState } from "react";
import BasicModal from "../common/BasicModal/BasicModal";
import { ProjectProps } from "@/interfaces/ProjectProps";

const Projects = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null
  );

  const openDetailsModal = (project: ProjectProps) => {
    setSelectedProject(project);
    setIsOpenModal(true);
  };

  return (
    <div className="w-full">
      <h2
        id="projects"
        className="font-semibold text-5xl mb-4 text-center w-full"
      >
        Projects
      </h2>

      <div className="w-full flex justify-center mb-8">
        <hr className="border-2 border-solid border-[#c7417b] rounded-3xl w-20" />
      </div>

      <p className="text-lg text-center w-full text-[#7a5e73] dark:text-[#FFB8DB] mb-12">
        A selection of projects that showcase my skills and passion for
        development
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            openDetailsModal={openDetailsModal}
          />
        ))}
      </div>

      <BasicModal open={isOpenModal} setOpen={setIsOpenModal}>
        <ProjectDetail selectedProject={selectedProject} />
      </BasicModal>
    </div>
  );
};

export default Projects;
