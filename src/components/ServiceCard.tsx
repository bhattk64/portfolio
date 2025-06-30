import React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  isAvailable?: boolean;
  className?: string;
}

const ServiceCard = ({
  title = "Service Title",
  description = "Description of the service offered, including technologies and expertise.",
  isAvailable = true,
  className,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 min-h-[200px] w-[350px] transition-all duration-300 hover:border-[#a855f7] group ",
        className,
      )}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          {isAvailable && (
            <div className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-[#a855f7] mr-1"></span>
              <span className="text-xs text-gray-400">Available</span>
            </div>
          )}
        </div>

        <p className="text-sm text-gray-400 flex-grow">{description}</p>

        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-right">
          <a
            href="mailto:bhattn245@gmail.com"
            className="text-xs text-[#a855f7] hover:text-[#c77dff] inline-flex items-center"
          >
            Need this? Let’s chat →
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#a855f7] to-[#22d3ee] rounded-lg opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;
