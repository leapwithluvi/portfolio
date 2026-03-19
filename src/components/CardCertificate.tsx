import { ExternalLink, Award } from "lucide-react";
import type { Certificate } from "../utils/DataCertificates";

const categoryColors: Record<string, string> = {
  "Web Dev": "bg-blue-100 text-blue-700",
  "Frontend": "bg-cyan-100 text-cyan-700",
  "Backend": "bg-green-100 text-green-700",
  "Fullstack": "bg-indigo-100 text-indigo-700",
  "AI/ML": "bg-purple-100 text-purple-700",
  "Cloud": "bg-orange-100 text-orange-700",
  "Fundamental": "bg-pink-100 text-pink-700",
  "Default": "bg-gray-100 text-gray-700",
};

const categoryBorders: Record<string, string> = {
  "Web Dev": "border-l-blue-500",
  "Frontend": "border-l-cyan-500",
  "Backend": "border-l-green-500",
  "Fullstack": "border-l-indigo-500",
  "AI/ML": "border-l-purple-500",
  "Cloud": "border-l-orange-500",
  "Fundamental": "border-l-pink-500",
  "Default": "border-l-yellow-500",
};

interface CardCertificateProps {
  certificate: Certificate;
  index: number;
}

export const CardCertificate = ({ certificate }: CardCertificateProps) => {
  const { title, issuer, date, category, credentialUrl, skills } = certificate;
  const colorClass = categoryColors[category] ?? categoryColors["Default"];
  const borderClass = categoryBorders[category] ?? categoryBorders["Default"];

  return (
    <div
      className={`group relative bg-white rounded-xl shadow-sm border border-gray-100 border-l-4 ${borderClass} p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
    >
      {/* Top Row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-50 border border-yellow-200 flex items-center justify-center">
            <Award size={20} className="text-yellow-600" />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              {issuer}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{date}</p>
          </div>
        </div>
        <span
          className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}
        >
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-serif font-semibold text-gray-900 text-base leading-snug group-hover:text-yellow-700 transition-colors duration-200">
        {title}
      </h3>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 rounded border border-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-gray-100">
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-yellow-600 hover:text-yellow-800 transition-colors duration-200 group/link"
        >
          <ExternalLink
            size={14}
            className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
          View Credential
        </a>
      </div>
    </div>
  );
};
