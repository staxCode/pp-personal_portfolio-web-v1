import Link from "next/link";
import { projects, skills } from "../data/info-portfolio";
import Projects from "./Projects";

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
      <Projects/>
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
