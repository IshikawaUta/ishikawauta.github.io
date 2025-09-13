
"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData as initialProjects } from "@/lib/data";
import type { Project } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProjectDialog } from "./project-dialog";
import { DeleteDialog } from "./delete-dialog";
import { useToast } from "@/hooks/use-toast";


export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);
  const [projectToDelete, setProjectToDelete] = useState<Project | undefined>(undefined);
  const { toast } = useToast();

  const handleAddProject = () => {
    setSelectedProject(undefined);
    setIsDialogOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleDeleteProject = (project: Project) => {
    setProjectToDelete(project);
    setIsDeleteDialogOpen(true);
  }

  const confirmDelete = () => {
    if (projectToDelete) {
      setProjects(projects.filter((p) => p.id !== projectToDelete.id));
      toast({
        title: "Project Deleted",
        description: `"${projectToDelete.title}" has been successfully deleted.`,
      });
    }
    setIsDeleteDialogOpen(false);
    setProjectToDelete(undefined);
  };

  const handleSaveProject = (project: Project) => {
    if (selectedProject) {
      // Edit
      setProjects(projects.map((p) => (p.id === project.id ? project : p)));
      toast({
        title: "Project Updated",
        description: `"${project.title}" has been successfully updated.`,
      });
    } else {
      // Add
      const newProject = { ...project, id: projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1 };
      setProjects([newProject, ...projects]);
      toast({
        title: "Project Added",
        description: `"${project.title}" has been successfully added.`,
      });
    }
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Project CMS</h1>
            <p className="text-muted-foreground">
              Manage your portfolio projects here.
            </p>
          </div>
          <Button onClick={handleAddProject}>
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Project
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>
              A list of all the projects in your portfolio.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Technologies
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="hidden sm:table-cell">
                      <Image
                        alt={project.title}
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={project.imageUrl}
                        width="64"
                        data-ai-hint={project.imageHint}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{project.title}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{project.category}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                       <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                              <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                          {project.technologies.length > 3 && (
                              <Badge variant="secondary">...</Badge>
                          )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleEditProject(project)}>Edit</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeleteProject(project)} className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <ProjectDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        project={selectedProject}
        onSave={handleSaveProject}
      />

      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={confirmDelete}
        projectName={projectToDelete?.title}
      />
    </>
  );
}
