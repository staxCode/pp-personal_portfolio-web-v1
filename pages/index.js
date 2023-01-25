import Header from "../components/Header";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticlesBackground";

export default function Home() {
  return (
    <div className="ease-in duration-300">
      {/*Background - particles */}
      <ParticleBackground />
      {/*Navbar - darkmode */}
      <Navbar />
      {/*Header*/}
      <Header />
      {/*Body*/}
      <div className="bg-white dark:bg-opacity-0">
        {/*Main- projects & skills*/}
        <Main />
        {/*Footer */}
      </div>
    </div>
  );
}
