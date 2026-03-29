import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface cardProjectTypes {
  nameProject: string;
  deskProject: string;
  status: string;
  srcImg?: string;
  imgAlt: string;
  linkRepo: string;
  typeProject: string;
  stacks?: string[];
}

export const CardProject = (data: cardProjectTypes) => {
  const {
    nameProject,
    typeProject,
    deskProject,
    status,
    srcImg,
    imgAlt,
    linkRepo,
    stacks = [],
  } = data;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={srcImg}
          alt={imgAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
        
        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-background/90 backdrop-blur-md text-foreground rounded-full border border-border shadow-sm">
            {typeProject}
          </span>
        </div>

        {/* Status indicator */}
        <div className="absolute top-3 right-3">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-background/90 backdrop-blur-md rounded-full border border-border">
            <div className={`w-1.5 h-1.5 rounded-full ${status === 'Complete' ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`} />
            <span className="text-[10px] font-medium text-foreground">{status}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-xl font-serif font-bold text-foreground mb-2 transition-colors duration-300">
          {nameProject}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
          {deskProject}
        </p>

        {/* Tech Stack */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-6">
            {stacks.map((stack) => (
              <span
                key={stack}
                className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground rounded-md border border-border font-medium"
              >
                {stack}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <a
              href={linkRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-yellow-600 transition-colors"
            >
              <Github size={18} />
              <span>Repository</span>
            </a>
            <a
              href={linkRepo}
              className="p-2 text-muted-foreground hover:text-yellow-600 transition-colors"
              title="View Live"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
