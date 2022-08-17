import Navbar from './Navbar';
import Header from './Header';
import Main from './Main';

const Layout = () => (
    <header className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-800 ease-in duration-300">
        <Navbar />
        <Header />
        <Main/>
    </header>
)

export default Layout