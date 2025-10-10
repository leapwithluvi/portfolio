import { DataSkills } from "../utils/DataSkills";

export const CardSkills = () => {
  return (
    <>
      {DataSkills.map((stack, idx) => (
        <a
          key={idx}
          href={stack.url}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-right"
          data-aos-delay={idx * 100}
          className="
            flex flex-col items-center justify-center
            sm:flex-row sm:justify-start sm:space-x-4
            p-3 sm:p-5
            bg-white rounded-lg shadow-md hover:shadow-xl
            transition-shadow duration-300 cursor-pointer
          "
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={stack.logo}
              alt={stack.name}
              className="h-10 w-10 sm:h-10 sm:w-10 object-contain"
            />
          </div>

          <div className="hidden sm:flex flex-col">
            <h3 className="text-base font-semibold text-gray-900">
              {stack.name}
            </h3>
            <p className="text-sm text-gray-500">{stack.type}</p>
          </div>
        </a>
      ))}
    </>
  );
};
