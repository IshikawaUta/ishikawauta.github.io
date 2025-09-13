
"use client"

import { ProjectForm } from "../../project-form";
import { notFound } from 'next/navigation';
import { useProjects } from "../../project-context";
import { useMemo, useState, useEffect } from "react";
import type { Project } from "@/lib/data";

export default function EditProjectPage({ params }: { params: { id: string } }) {
  const { projects } = useProjects();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectId = parseInt(params.id, 10);
    const foundProject = projects.find((p) => p.id === projectId);
    setProject(foundProject);
    setLoading(false);
  }, [params, projects]);

  if (loading) {
    // You can return a loader here
    return <div className="container mx-auto py-8">Loading...</div>;
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <ProjectForm project={project} />
    </div>
  );
}
