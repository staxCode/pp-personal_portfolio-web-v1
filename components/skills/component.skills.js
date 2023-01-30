const Skills = ({ data }) => {
  return (
    // <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800 max-w-screen-lg">
    <div className="bg-gray-100 rounded-lg dark:bg-gray-800">
      {/* className="max-w-sm bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-800" */}
      <ol className="grid sm:gap-10 gap-5 grid-cols-2 sm:p-4">
        {data.map((skill, index) => (
          <li key={index} className="p-4">
            <div className="flex items-center">
              <div className="flex justify-center items-center w-6 h-6 mr-2 bg-white rounded-full dark:bg-indigo-900 dark:ring-gray-900 shrink-0">
                <i className="ri-stack-line text-indigo-600 dark:text-indigo-300"></i>
              </div>
              <h3 className="text-md sm:text-lg font-semibold text-gray-900 dark:text-white">
                {skill.area}
              </h3>
            </div>
            <div className="mt-3 sm:pr-8">
              {skill.forks.map((fork, index) => (
                <div key={index} className="mt-2 ml-4">
                  <h3 className="text-sm font-normal text-gray-600 dark:text-gray-300">
                    {fork.label}
                  </h3>
                  <ul className="ml-2 text-base font-normal text-gray-600 dark:text-gray-400 list-none list-inside pt-2">
                    {fork.list.map((e, index) => (
                      <li
                        key={index}
                        className="font-medium flex justify-start space-x-2"
                      >
                        <i className="ri-checkbox-circle-line text-indigo-400"></i>
                        <div className="pb-2">
                          <p className="dark:text-gray-400 text-md font-medium">
                            {e.name}
                          </p>
                          <span className="text-indigo-500 text-sm font-light dark:text-gray-400">
                            {e.level}
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
  );
};

export default Skills;
