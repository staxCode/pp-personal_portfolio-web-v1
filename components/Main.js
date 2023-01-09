import Link from "next/link";
import { projects, skills } from "../data/info-portfolio";

const Main = () => (
  <div className="ease-in duration-300 px-4 pb-8 sm:px-8 flex flex-wrap flex-col content-center">
    <div className="mb-4 border-b border-neutral-200 max-w-screen-lg dark:border-neutral-700">
      <ul
        className="flex flex-wrap justify-center -mb-px text-sm font-medium"
        id="myTab"
        data-tabs-toggle="#infoTab"
        role="tablist"
      >
        <li className="mr-2" role="presentation">
          <button
            className="inline-block p-4 rounded-t-lg border-transparent hover:text-neutral-600 hover:border-neutral-300 dark:hover:text-neutral-300"
            id="project-tab"
            data-tabs-target="#project"
            type="button"
            role="tab"
            aria-controls="project"
            aria-selected="true"
          >
            <i className="ri-shield-star-line"></i> Projects
          </button>
        </li>
        <li className="mr-2" role="presentation">
          <button
            className="inline-block p-4 rounded-t-lg border-transparent hover:text-neutral-600 hover:border-neutral-300 dark:hover:text-neutral-300"
            id="skill-tab"
            data-tabs-target="#skill"
            type="button"
            role="tab"
            aria-controls="skill"
            aria-selected="false"
          >
            <i className="ri-user-smile-line"></i> Skills
          </button>
        </li>
      </ul>
    </div>
    <div id="infoTab" className="max-w-screen-lg">
      <div
        className="grid gap-4 grid-cols sm:grid-cols-3 justify-items-center"
        id="project"
        role="tabpanel"
        aria-labelledby="project-tab"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm bg-white rounded-lg border border-neutral-200 shadow-md dark:bg-neutral-800 dark:border-neutral-800"
          >
            <Link
              href={project.web}
              target="_blank"
              className="group flex justify-center text-center relative overflow-hidden rounded-t-lg cursor-pointer"
            >
              <img
                src={project.image}
                alt=""
                className="rounded-t-lg object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
              />
              <div className="absolute bg-indigo-600 w-full h-full opacity-20 transition-opacity duration-500 group-hover:opacity-30" />
            </Link>
            <div className="p-5">
              <Link href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  {project.name}
                </h5>
              </Link>
              <p className="mb-3 text-sm font-normal text-neutral-700 dark:text-neutral-400">
                {project.description}
              </p>
              <Link
                href={project.repo}
                target="_blank"
                className="ease-in-out duration-300 inline-flex items-center py-2 px-3 mr-2 text-sm font-medium text-center text-neutral-100 bg-neutral-800 rounded-lg hover:bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-neutral-200 dark:text-neutral-800 dark:hover:bg-neutral-600 dark:hover:text-neutral-100 dark:focus:ring-neutral-700"
              >
                Github<i className="ri-github-line ml-1"></i>
              </Link>
              <Link
                href={project.web}
                target="_blank"
                className="ease-in-out duration-300 inline-flex items-center py-2 px-3 mr-2 text-sm font-medium text-center  text-neutral-100 bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:focus:ring-indigo-700"
              >
                Visit<i className="ri-external-link-line ml-1"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div
        className="hidden p-4 bg-neutral-100 rounded-lg dark:bg-neutral-800 max-w-screen-lg"
        id="skill"
        role="tabpanel"
        aria-labelledby="skill-tab"
      >
        <ol className="items-center grid sm:gap-10 grid-cols sm:grid-cols-2 sm:p-4">
          {skills.map((skill, index) => (
            <li key={index} className="relative px-6 ">
              <div className="flex items-center">
                <div className="flex justify-center items-center w-8 h-8 mr-2 dark:mr-4 bg-white rounded-full dark:bg-indigo-900  dark:ring-neutral-900 shrink-0">
                  <i className="ri-stack-line text-indigo-600 dark:text-indigo-300"></i>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {skill.area}
                </h3>
              </div>
              <div className="mt-3 sm:pr-8">
                {skill.forks.map((fork, index) => (
                  <div key={index} className="mt-2 ml-4">
                    <h3 className="text-md font-semibold text-neutral-600 dark:text-white">
                      {fork.type}
                    </h3>
                    <ul className="ml-2 text-base font-normal text-neutral-600 dark:text-neutral-400 list-none list-inside pt-2">
                      {fork.languages.map((language, index) => (
                        <li
                          key={index}
                          className="font-medium flex justify-start space-x-2"
                        >
                          <i className="ri-checkbox-circle-line text-indigo-400"></i>
                          <div>
                            <p className="dark:text-neutral-400 text-md font-semibold">
                              {" "}
                              {language.name}
                            </p>
                            <span className="text-neutral-400 text-sm font-normal">
                              {language.level}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </div>
);

export default Main;
