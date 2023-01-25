import Link from "next/link";
import swr from "swr";
import { fetcher } from "../helpers/fetch";
import Errors from "./Errors";
import Loader from "./Loader";

const Projects = () => {
  const { data: response, error } = swr(
    "https://api-portfolio-stxcd.up.railway.app/api/v1/projects",
    fetcher
  );

  if (error) return <Errors />;
  if (!response) return <Loader />;
  if (!response.success) return <div>Empty data</div>;
  console.log(response.data);
  return (
    <div
      className="grid gap-4 grid-cols sm:grid-cols-3 justify-items-center"
      id="project"
      role="tabpanel"
      aria-labelledby="project-tab"
    >
      {response.data.map((project, index) => (
        <div
          key={index}
          className="max-w-sm bg-white rounded-lg border border-neutral-200 shadow-md dark:bg-neutral-800 dark:border-neutral-800"
        >
          <Link
            href={project.link_Web}
            target="_blank"
            className="group flex justify-center text-center relative overflow-hidden rounded-t-lg cursor-pointer"
          >
            {/* <img
              src={project.link_Image}
              alt=""
              className="rounded-t-lg object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
            /> */}
            <div className="absolute bg-indigo-600 w-full h-full opacity-20 transition-opacity duration-500 group-hover:opacity-30" />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {project.title}
              </h5>
            </Link>
            <p className="mb-3 text-sm font-normal text-neutral-700 dark:text-neutral-400">
              {project.description}
            </p>
            <Link
              href={project.link_Repository}
              target="_blank"
              className="ease-in-out duration-300 inline-flex items-center py-2 px-3 mr-2 text-sm font-medium text-center text-neutral-100 bg-neutral-800 rounded-lg hover:bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-neutral-200 dark:text-neutral-800 dark:hover:bg-neutral-600 dark:hover:text-neutral-100 dark:focus:ring-neutral-700"
            >
              Github<i className="ri-github-line ml-1"></i>
            </Link>
            <Link
              href={project.link_Web}
              target="_blank"
              className="ease-in-out duration-300 inline-flex items-center py-2 px-3 mr-2 text-sm font-medium text-center  text-neutral-100 bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:focus:ring-indigo-700"
            >
              Visit<i className="ri-external-link-line ml-1"></i>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
