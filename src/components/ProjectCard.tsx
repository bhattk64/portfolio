import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  stack?: string[];
  image?: string;
  githubLink?: string;
  demoLink?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project and its key features. Explains what the project does and its main functionality.",
  stack = ["React", "Node.js", "MongoDB"],
  image = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
  githubLink = "#",
  demoLink = "#",
}: ProjectCardProps) => {
  return (
    <Card className="bg-[#1a1a1a] border-[#2a2a2a] overflow-hidden flex flex-col h-full">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {stack.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-[#2a2a2a] text-[#a855f7] border-[#3a3a3a] text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="text-gray-400 text-sm flex-grow">
        <CardDescription className="text-gray-400">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t border-[#2a2a2a]">
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-[#3a3a3a] hover:bg-[#2a2a2a] hover:text-[#a855f7] transition-colors"
          asChild
        >
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-[#3a3a3a] hover:bg-[#2a2a2a] hover:text-[#22d3ee] transition-colors"
          asChild
        >
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
