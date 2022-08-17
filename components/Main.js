import Link from "next/link"
import { projects, skills } from "../data/info-portfolio"



const Main = () => (
    <div className='p-4 sm:p-8 flex flex-wrap flex-col content-center'>
        <div className="mb-4 border-b border-gray-200 max-w-screen-lg dark:border-gray-700">
            <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium" id="myTab" data-tabs-toggle="#infoTab" role="tablist">
                <li className="mr-2" role="presentation">
                    <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="project-tab" data-tabs-target="#project" type="button" role="tab" aria-controls="project" aria-selected="false">
                        <i class="ri-shield-star-line"></i> Projects
                    </button>
                </li>
                <li className="mr-2" role="presentation">
                    <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="skill-tab" data-tabs-target="#skill" type="button" role="tab" aria-controls="skill" aria-selected="true">
                        <i class="ri-user-smile-line"></i> Skills
                    </button>
                </li>
            </ul>
        </div>
        <div id="infoTab" className="max-w-screen-lg">
            <div className="grid gap-4 grid-cols sm:grid-cols-3 justify-items-center" id="project" role="tabpanel" aria-labelledby="project-tab">

                {
                    projects.map((project, index) => (
                        <div key={index} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <Link href={project.web}>
                                <a target="_blank" className="group flex justify-center text-center relative overflow-hidden rounded-t-lg cursor-pointer">
                                    <img src={project.image} alt="" className="rounded-t-lg object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125" />
                                    <div className="absolute bg-indigo-600 w-full h-full opacity-20 transition-opacity duration-500 group-hover:opacity-30" />
                                </a>
                            </Link>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                                </a>
                                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                                <Link href={project.repo}>
                                    <a target="_blank" className="ease-in-out duration-300 inline-flex items-center py-2 px-3 mr-2 text-sm font-medium text-center text-gray-100 bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-600 dark:hover:text-gray-100 dark:focus:ring-gray-700">
                                        Github<i className="ri-github-line ml-1"></i>
                                    </a>
                                </Link>
                                <Link href={project.web}>
                                    <a target="_blank" className="ease-in-out duration-300 inline-flex items-center py-2 px-3 mr-2 text-sm font-medium text-center  text-gray-100 bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:focus:ring-indigo-700">
                                        Visit<i className="ri-external-link-line ml-1"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800 max-w-screen-lg" id="skill" role="tabpanel" aria-labelledby="skill-tab">

                <ol className="items-center grid sm:gap-10 grid-cols sm:grid-cols-2 sm:p-4">
                    {
                        skills.map((skill, index) => (
                            <li key={index} className="relative px-6 ">
                                <div class="flex items-center">
                                    <div className="flex justify-center items-center w-6 h-6 mr-2 dark:mr-4 bg-indigo-200 rounded-full ring-0 ring-white dark:bg-indigo-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                         <i className="ri-stack-line text-indigo-600 dark:text-indigo-300"></i>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.area}</h3>
                                </div>
                                <div className="mt-3 sm:pr-8">
                                    {
                                        skill.forks.map((fork, index) => (
                                            <div key={index} className="mt-2 ml-4">
                                                <h3 className="text-md font-semibold text-gray-600 dark:text-white">{fork.type}</h3>
                                                <ul className="ml-2 text-base font-normal text-gray-600 dark:text-gray-400 list-none list-inside pt-2">
                                                    {
                                                        fork.languages.map((language, index) => (
                                                            <li key={index} className="font-medium flex justify-start space-x-2">
                                                                <i className="ri-checkbox-circle-line text-indigo-400"></i>
                                                                <div>
                                                                    <p className="dark:text-gray-400 text-md font-semibold"> {language.name}</p>
                                                                    <span className="text-gray-400 text-sm font-normal">{language.level}</span>
                                                                </div>

                                                            </li>
                                                        ))
                                                    }
                                                </ul>

                                            </div>
                                        ))
                                    }
                                </div>
                            </li>
                        ))
                    }

                </ol>
            </div>
        </div>

    </div>
)

export default Main