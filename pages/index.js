import Header from "../components/Header";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticlesBackground";
import useSWR from "swr";
import { fetcher } from "../helpers/fetch";
import Loader from "../components/Loader";
import Errors from "../components/Errors";
import Footer from "../components/Footer";

export default function Home(props) {
  const { data, error } = useSWR("/api/staticdata", fetcher);
  if (error) return <Errors />;
  if (!data) return <Loader />;
  return (
    <div className="ease-in duration-300">
      {/*Background - particles */}
      <ParticleBackground />
      {/*Navbar - darkmode */}
      <Navbar />
      {/*Header*/}
      <Header data={data.profile} />
      {/*Body*/}
      <div className="bg-white dark:bg-opacity-0">
        {/*Main- projects & skills*/}
        <Main data={data} />
      </div>
      {/*Footer */}
      <Footer />
    </div>
  );
}
