import React from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  duration: string;
  title: string;
  organization: string;
  description: string;
  isActive?: boolean;
  className?: string;
}

const TimelineItem = ({
  duration = "2023 - Present",
  title = "Position Title",
  organization = "Organization Name",
  description = "Description of responsibilities and achievements during this position.",
  isActive = false,
  className,
}: TimelineItemProps) => {
  return (
    <div className={cn("relative pl-8 mb-8 group", className)}>
      {/* Timeline connector line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-700 group-last:bg-transparent"></div>

      {/* Timeline dot */}
      <div
        className={cn(
          "absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full border-2",
          isActive
            ? "border-purple-500 bg-purple-500"
            : "border-gray-500 bg-gray-800",
        )}
      ></div>

      {/* Content */}
      <div className="space-y-2">
        <span className="text-xs font-medium text-gray-400">{duration}</span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <h4 className="text-sm font-medium text-purple-500">{organization}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
