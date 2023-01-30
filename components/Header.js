import Image from "next/image";
import Link from "next/link";

const Header = ({ data }) => {
  /* ... */

  return (
    <div className="w-full ease-in duration-300 mb-4">
      <div className="flex flex-col items-center">
        <div className="w-36 h-36 mb-4">
          <Image
            className="rounded-full shadow-lg"
            src={data.image}
            alt="Bonnie image"
            width={200}
            height={100}
          />
        </div>
        <h5 className="mb-1 text-2xl font-medium text-gray-50">{data.name}</h5>
        <span className="text-md text-gray-400">{data.area}</span>
        <div className="flex mt-4 mb-5 space-x-3 md:mt-6">
          <Link
            href={data.social.linkedin}
            target="_blank"
            className="inline-flex items-center p-1 ease-in duration-300 text-indigo-500 hover:text-indigo-300"
          >
            <i className={`ri-linkedin-line ri-lg`}></i>
          </Link>
          <Link
            href={data.social.github}
            target="_blank"
            className="inline-flex items-center p-1 ease-in duration-300 text-indigo-500 hover:text-indigo-300"
          >
            <i className={`ri-github-line ri-lg`}></i>
          </Link>
          <Link
            href={data.social.hackerrank}
            target="_blank"
            className="inline-flex items-center p-1 ease-in duration-300 text-indigo-500 hover:text-indigo-300"
          >
            <i className={`ri-brackets-line ri-lg`}></i>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        {/* <div className="mb-3 p-2">
          <dl className="text-center grid grid-cols-3 gap-6 sm:gap-8 mx-auto max-w-screen-xl text-gray-800 sm:grid-cols-3dark:text-white sm:p-4">
            {user.progress.map((data, index) => (
              <div
                className="flex flex-col justify-center items-center w-[4rem] sm:w-[5rem]"
                key={index}
              >
                <dt className="mb-2 text-md font-bold text-gray-100">
                  {data.amount}
                </dt>
                <dd className="font-normal text-sm text-gray-300">
                  {data.title}
                </dd>
              </div>
            ))}
          </dl>
        </div> */}
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="p-2 grid grid-cols gap-2 place-content-center h-full sm:grid-cols-2">
          <a
            download
            href={data.cv}
            className="ease-in duration-300 inline-flex items-center py-4 px-5 font-normal shadow-mdtext-center text-gray-100 bg-indigo-700 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300"
          >
            Download CV <i className="px-2 ri-download-line ri-lg"></i>
          </a>
          <div className="flex flex-row place-content-center space-x-3 p-1">
            <Link
              href={data.social.email}
              className="ease-in duration-300 inline-flex items-center px-3 py-4 font-light text-center text-gray-800 rounded-lg bg-gray-200 shadow-md hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-indigo-500"
            >
              <i className={`ri-mail-line ri-lg`}></i>
            </Link>
            <Link
              href={data.social.extra}
              className="ease-in duration-300 inline-flex items-center px-3 py-4 font-light text-center text-gray-800 rounded-lg bg-gray-200 shadow-md hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-indigo-500"
            >
              <i className={`ri-code-line ri-lg`}></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
