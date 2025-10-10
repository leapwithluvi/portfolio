interface ButtonTypes {
  buttonName: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
  pathProps?: React.SVGProps<SVGPathElement>;
  polylineProps?: React.SVGProps<SVGPolylineElement>;
  lineProps?: React.SVGProps<SVGLineElement>;
}

export const Button = ({
  buttonName,
  svgProps,
  pathProps,
  polylineProps,
  lineProps,
}: ButtonTypes) => {
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-900 
      border border-gray-800 rounded-lg w-full sm:w-auto justify-center text-center
      hover:text-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300
      dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-800 whitespace-nowrap"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5"
        {...svgProps}
      >
        <path {...pathProps}></path>
        <polyline {...polylineProps}></polyline>
        <line {...lineProps}></line>
      </svg>

      {buttonName}
    </button>
  );
};
