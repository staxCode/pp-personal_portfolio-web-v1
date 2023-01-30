const Footer = () => {
  return (
    <footer className="p-4 bg-white md:px-6 md:py-8 dark:bg-gray-900">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="flex justify-center items-strech text-sm text-gray-500 dark:text-gray-400">
        Developed by
        <a href="https://github.com/staxCode" className="mx-1 hover:underline font-semibold">
          @staxCode.
        </a>
         <i className="ri-ghost-smile-line ri-lg self-center"></i>
      </span>
    </footer>
  );
};

export default Footer;
