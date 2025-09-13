
"use client";

import type { Project } from "@/lib/data";
import { projectsData } from "@/lib/data";
import { useState } from "react";
import { ProjectProvider } from "./project-context";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [projects, setProjects] = useState<Project[]>(projectsData);

  const addProject = (project: Omit<Project, 'id'>) => {
    setProjects((prev) => [
      ...prev,
      { ...project, id: prev.length > 0 ? Math.max(...prev.map(p => p.id)) + 1 : 1 },
    ]);
  };

  const editProject = (updatedProject: Project) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === updatedProject.id ? updatedProject : p))
    );
  };

  const deleteProject = (projectId: number) => {
    setProjects((prev) => prev.filter((p) => p.id !== projectId));
  };
  

  return (
    <ProjectProvider value={{ projects, addProject, editProject, deleteProject }}>
        {children}
    </ProjectProvider>
    );
}
