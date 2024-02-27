import Link from 'next/link';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d1117] text-[#c0c0c0]"> 
      <nav className="flex justify-between items-center p-4 shadow-md bg-[#1f2833]"> 
        <span className="text-xl font-bold text-[#66fcf1]">Universidad <span className="text-[#c5a3ff]">EIA</span></span> 
        <div className="flex space-x-4">
          <Link href="/about"><p className="hover:text-[#66fcf1]">About</p></Link>
          <Link href="/projects"><p className="hover:text-[#66fcf1]">Work</p></Link>
          <Link href="/contact"><p className="hover:text-[#66fcf1]">Contact</p></Link> 
        </div>
      </nav>
      <header className="flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-bold mb-2 text-[#ff69b4]">Portafolio</h1> 
        <p className="text-xl mb-4 text-[#c0c0c0]">Intento de web developer (sale mal)</p> 
        <div className="space-x-2">
          <Link href="/about"><p className="bg-[#2dd4bf] hover:bg-[#45a29e] text-white font-bold py-2 px-4 rounded">Acerca de</p></Link> 
          <Link href="/projects"><p className="bg-transparent hover:bg-[#22d3ee] text-[#66fcf1] hover:text-white py-2 px-4 border border-[#66fcf1] hover:border-transparent rounded">Proyectos</p></Link> 
        </div>
      </header>
      <footer className="p-4 bg-[#1f2833] text-center text-[#c0c0c0]"> 
        Hecho con ♥ en Next.js
      </footer>
    </div>
  );
};

export default Home;
