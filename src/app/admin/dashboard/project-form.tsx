
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Project } from "@/lib/data";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useProjects } from "./project-context";


const projectSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  technologies: z.string().min(1, "Technologies are required").transform(val => val.split(',').map(s => s.trim())),
  imageUrl: z.string().url("Must be a valid URL"),
  imageHint: z.string().min(1, "Image hint is required"),
  category: z.enum(["Web", "Mobile", "Design"]),
  liveUrl: z.string().url().optional().or(z.literal('')),
});

// Create a new type for the form values that includes the transformed 'technologies' as a string array
type ProjectFormValues = Omit<z.infer<typeof projectSchema>, 'technologies'> & {
  technologies: string[];
};

interface ProjectFormProps {
  project?: Project;
}

export function ProjectForm({ project }: ProjectFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const { addProject, editProject } = useProjects();

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: project ? {
      ...project,
      technologies: project.technologies.join(", "),
    } : {
      title: "",
      description: "",
      technologies: "",
      imageUrl: "",
      imageHint: "",
      category: "Web",
      liveUrl: "",
    },
  });

  const onSubmit = (values: z.infer<typeof projectSchema>) => {
    const projectData: ProjectFormValues = {
        ...values,
        technologies: Array.isArray(values.technologies) ? values.technologies : values.technologies.split(',').map(s => s.trim()),
    };

    if (project) {
        // Ensure the original project ID is preserved
        editProject({ ...projectData, id: project.id });
    } else {
        addProject(projectData);
    }

    toast({
      title: project ? "Project Updated" : "Project Added",
      description: `"${values.title}" has been successfully saved.`,
    });
    
    router.push("/admin/dashboard");
  };
  
  const isLoading = form.formState.isSubmitting;

  return (
    <Card>
        <CardHeader>
            <CardTitle>{project ? "Edit Project" : "Add New Project"}</CardTitle>
            <CardDescription>
                {project ? "Make changes to your project here." : "Fill in the details for your new project."} Click save when you're done.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                        <Input placeholder="Project Title" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Project description..." {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="Web">Web</SelectItem>
                        <SelectItem value="Mobile">Mobile</SelectItem>
                        <SelectItem value="Design">Design</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="technologies"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Technologies</FormLabel>
                    <FormControl>
                        <Input placeholder="React, Next.js, Tailwind..." {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                        <Input placeholder="https://example.com/image.png" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="imageHint"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Image Hint</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., 'dashboard analytics'" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="liveUrl"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Live URL (Optional)</FormLabel>
                    <FormControl>
                        <Input placeholder="https://project.example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => router.push('/admin/dashboard')}>
                    Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save changes
                </Button>
                </div>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
