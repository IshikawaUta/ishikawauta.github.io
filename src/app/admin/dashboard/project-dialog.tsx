"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ProjectForm } from "./project-form";
import type { Project } from "@/lib/data";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  project?: Project;
  onSave: (project: Project) => void;
}

export function ProjectDialog({ isOpen, onOpenChange, project, onSave }: ProjectDialogProps) {
  const handleDialogSave = (formData: Project) => {
    onSave(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px] max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{project ? "Edit Project" : "Add New Project"}</DialogTitle>
          <DialogDescription>
            {project ? "Make changes to your project here." : "Fill in the details for your new project."} Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-grow pr-6">
            <ProjectForm
            project={project}
            onSave={handleDialogSave}
            onCancel={() => onOpenChange(false)}
            />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
