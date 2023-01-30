import { useState } from "react";
import { Tab } from "@headlessui/react";
import Projects from "./projects/component.projects";
import Skills from "./skills/component.skills";

export default function Main({ data }) {

  let [categories] = useState({
    body: [
      { id: "cate01", name: "Projects", icon: "shield-star" },
      { id: "cate02", name: "Skills", icon: "user-smile" },
    ],
  });

  return (
    <div className="ease-in duration-300 px-4 pb-8 sm:px-8 flex flex-wrap flex-col content-center focus:outline-none">
      <Tab.Group>
        <Tab.List className="mb-4 border-b border-gray-200 max-w-screen-lg dark:border-gray-700">
          <div className="flex flex-wrap justify-center -mb-px text-sm font-medium">
            {Object.values(categories.body).map((category) => (
              <Tab
                key={category.id}
                className="inline-block p-4 rounded-t-lg border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                <i className={`ri-${category.icon}-line`}></i> {category.name}
              </Tab>
            ))}
          </div>
        </Tab.List>
        <Tab.Panels className="max-w-screen-lg focus:outline-none">
          <Tab.Panel key="cate01">
            <Projects data={data.projects} />
          </Tab.Panel>
          <Tab.Panel key="cate02">
            <Skills data={data.skills} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
