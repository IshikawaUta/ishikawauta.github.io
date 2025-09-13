
"use client";

import type { Project } from "@/lib/data";
import { createContext, useContext } from "react";

type ProjectFormValues = Omit<Project, 'id'>;

interface ProjectContextType {
    projects: Project[];
    addProject: (project: ProjectFormValues) => void;
    editProject: (project: Project) => void;
    deleteProject: (id: number) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children, value }: { children: React.ReactNode, value: ProjectContextType }) {
    return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}

export function useProjects() {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error("useProjects must be used within a ProjectProvider");
    }
    return context;
}
