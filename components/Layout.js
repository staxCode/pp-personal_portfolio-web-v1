import Navbar from './Navbar';
import Header from './Header';
import Main from './Main';

const Layout = ({ children }) => (
    <header className="bg-white px-2 sm:px-4 py-2.5">
        <Navbar />
        <Header />
        <Main/>

        {children}

    </header>
)

export default Layout