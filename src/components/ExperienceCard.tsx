import React from "react";
import { type Experience } from "../types/Experience";
import rivolta from "../../public/img/rivolta.png";

interface ExperienceCardProps {
  data: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="flex flex-row items-center gap-4 mb-6 relative">
        <img src={rivolta} className="w-12 h-auto" />
        <h2 className="text-2xl font-serif font-bold text-gray-800">
          {data.company} - {data.location}
        </h2>
      </div>

      <div className="flex flex-col ml-6 pl-4 border-l-2 border-gray-300">
        <div className="flex items-center">
          <span className="mr-2 text-xl font-bold text-gray-600 leading-none mt-[-2px]">
            {">"}
          </span>

          <p className="text-lg font-serif text-gray-700">
            <span className="font-extrabold">{data.role}</span>
            <span className="font-normal"> ({data.duration})</span>
          </p>
        </div>

        <ul className="list-disc list-outside ml-10 space-y-1 mb-2">
          {data.details.map((detail) => (
            <li
              key={detail.id}
              className="text-gray-600 text-base leading-relaxed"
            >
              {detail.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Summary */}
      <p className="pt-4 mt-6 border-t border-gray-200 text-sm text-gray-500 italic">
        {data.summary}
      </p>
    </div>
  );
};
