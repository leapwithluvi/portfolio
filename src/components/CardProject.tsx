interface cardProjectTypes {
  nameProject: string;
  deskProject: string;
  status: string;
  srcImg?: string;
  imgAlt: string;
  linkRepo: string;
  typeProject: string;
  //   svgIcon: string;
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
    // svgIcon,
  } = data;
  return (
    //  <!-- CARD TEMPLATE BY: https://tailwindflex.com/@mr-robot/card-grid-section -->
    <div
      className="rounded overflow-hidden shadow-lg flex flex-col"
      data-aos="flip-left"
    >
      <div className="relative">
        <img className="w-full" src={srcImg} alt={imgAlt} />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        <div className="text-xs absolute top-0 right-0 bg-yellow-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-black transition duration-500 ease-in-out">
          {typeProject}
        </div>
      </div>
      <div className="px-6 py-4 mb-auto">
        <h1 className="font-medium text-lg mb-2">{nameProject}</h1>
        <p className="text-sm text-gray-600 font-serif min-h-[120px]">
          {deskProject}
        </p>
      </div>
      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        <span className="flex flex-col items-center">
          {/* <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200">
            {svgIcon}
          </span> */}
          <span className="mt-1 py-1 rounded-lg bg-yellow-600 text-white w-auto px-2 text-xs sm:text-sm text-center">
            {status}
          </span>
        </span>

        <a href={linkRepo}>
          <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span className="ml-1 text-base">Repository</span>
          </span>
        </a>
      </div>
    </div>
  );
};
