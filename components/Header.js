import Link from 'next/link';

import { infoPortfolio } from '../data/info-portfolio';

const Header = () => {
    const user = infoPortfolio

    return (
        <div className="w-full bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center">
                <div className='w-36 h-36 mb-4'>
                    <img className="rounded-full shadow-lg" src={user.image} alt="Bonnie image" />
                </div>
                <h5 className="mb-1 text-2xl font-medium text-gray-800 dark:text-white">{user.name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{user.carrer}</span>
                <div className="flex mt-4 mb-5 space-x-3 md:mt-6">
                    {
                        user.social.map((social) =>
                            <Link href={social.url}>
                                <a target="_blank" className="inline-flex items-center p-1 ease-in duration-300 text-gray-800 bg-white hover:text-indigo-700  dark:text-gray-100 dark:hover:bg-indigo-700">
                                    <i className={`ri-${social.name}-line ri-1x`}></i>
                                </a>
                            </Link>
                        )
                    }
                </div>
            </div>
            <div className="flex flex-col items-center w-full">
                <div className="mb-3 p-2">
                    <dl className="text-center grid grid-cols-3 gap-6 sm:gap-8 mx-auto max-w-screen-xl text-gray-800 sm:grid-cols-3dark:text-white sm:p-4">
                        {
                            user.progress.map((data) =>
                                <div className="flex flex-col justify-center items-center w-[4rem] sm:w-[5rem]">
                                    <dt className="mb-2 text-md font-extrabold">{data.amount}</dt>
                                    <dd className="font-medium text-sm text-gray-500 dark:text-gray-400">{data.title}</dd>
                                </div>
                            )
                        }
                    </dl>
                </div>
            </div>
            <div className="flex flex-col items-center w-full">
                <div className="p-2 grid grid-cols gap-2 place-content-center h-full sm:grid-cols-2">
                    <a download="" href='cv.pdf' className="ease-in duration-300 inline-flex items-center py-4 px-5 font-normal shadow-mdtext-center text-gray-100 bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-gray-200 dark:hover:bg-gray-300 dark:focus:ring-indigo-300">
                        Download CV <i className="px-2 ri-download-line ri-lg"></i>
                    </a>
                    <div className="flex flex-row place-content-center space-x-3 p-1">
                        {user.links.map(link =>
                        <Link href={link.url}>
                            <a className="ease-in duration-300 inline-flex items-center px-3 py-4 font-light text-center text-gray-800bg-gray-200 rounded-lg bg-gray-100 shadow-md hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-gray-200 dark:hover:bg-gray-300 dark:focus:ring-indigo-300">
                                <i className={`ri-${link.icon}-line ri-lg`}></i>
                            </a>
                        </Link>)}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header


