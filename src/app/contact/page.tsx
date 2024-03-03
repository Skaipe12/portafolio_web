import Link from 'next/link';
import type { NextPage } from 'next';
import Image from 'next/image';

const Contact: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d1117] text-[#c0c0c0]">
      
      {/* Reutilizamos el mismo nav que en las otras páginas */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-[#1f2833]">
        <span className="text-xl font-bold text-[#66fcf1]">Universidad <span className="text-[#c5a3ff]">EIA</span></span>
        <div className="flex space-x-4">
          <Link href="/main"><p className="hover:text-[#66fcf1]">Home</p></Link> 
          <Link href="/about"><p className="hover:text-[#66fcf1]">About</p></Link>
          <Link href="/projects"><p className="hover:text-[#66fcf1]">Projects</p></Link>
          <Link href="/contact"><p className="hover:text-[#66fcf1]">Contact</p></Link> 
        </div>
      </nav>

      {/* Contenedor del formulario de contacto */}
      <div className="flex flex-1 items-center justify-center p-10">
        <div className="w-full max-w-2xl bg-[#1f2833] p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-[#66fcf1] mb-4">Contacto</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm font-bold text-gray-300 block">Nombre</label>
              <input type="text" id="name" className="w-full p-2 rounded bg-[#0d1117] text-white" placeholder="Tu nombre" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-bold text-gray-300 block">Email</label>
              <input type="email" id="email" className="w-full p-2 rounded bg-[#0d1117] text-white" placeholder="Tu correo electrónico" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-bold text-gray-300 block">Mensaje</label>
              <textarea id="message" className="w-full p-2 rounded bg-[#0d1117] text-white" placeholder="Tu mensaje"></textarea>
            </div>
            <button type="submit" className="w-full p-3 rounded bg-[#66fcf1] text-[#0d1117] font-bold">Enviar</button>
          </form>
        </div>
      </div>

      {/* Reutilizamos el mismo footer que en las otras páginas */}
      <footer className="p-4 bg-[#1f2833] text-center">
        Ingenieria Web - Taller 1
      </footer>
    </div>
  );
};

export default Contact;
