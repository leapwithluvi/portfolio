import type React from "react";

interface ButtonTypes {
  icon?: React.ElementType;
  svg?: React.ReactNode;
  buttonName: string;
  iconSize?: number;
  iconClassName?: string;
}

export const Button = ({
  icon: Icon,
  svg,
  buttonName,
  iconSize = 18,
  iconClassName,
}: ButtonTypes) => {
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-900
      border border-gray-800 rounded-lg w-full sm:w-auto justify-center text-center
      hover:text-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300
      dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-800 whitespace-nowrap"
    >
      {Icon && <Icon size={iconSize} className={iconClassName} />}
      {svg}
      {buttonName}
    </button>
  );
};
