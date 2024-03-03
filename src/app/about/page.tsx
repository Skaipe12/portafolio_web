import Link from 'next/link';
import type { NextPage } from 'next';
import Image from 'next/image';

const logos = [
  { src: '/images/aws_logo.png', alt: 'Logo 1', width: 100, height: 100 },
  { src: '/images/openai_logo.png', alt: 'Logo 2', width: 100, height: 100 },
  { src: '/images/python_logo.png', alt: 'Logo 3', width: 100, height: 100 },
];

const About: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d1117] text-[#c0c0c0]">
      
      <nav className="flex justify-between items-center p-4 shadow-md bg-[#1f2833]">
        <span className="text-xl font-bold text-[#66fcf1]">Universidad <span className="text-[#c5a3ff]">EIA</span></span>
        <div className="flex space-x-4">
          <Link href="/main"><p className="hover:text-[#66fcf1]">Home</p></Link> 
          <Link href="/about"><p className="hover:text-[#66fcf1]">About</p></Link>
          <Link href="/projects"><p className="hover:text-[#66fcf1]">Work</p></Link>
          <Link href="/contact"><p className="hover:text-[#66fcf1]">Contact</p></Link> 
          
        </div>
      </nav>
      
      
      <div className="flex flex-1 items-center justify-center p-10">
        <div className="flex flex-col md:flex-row max-w-4xl w-full bg-[#1f2833] p-6 rounded-lg shadow-lg">
          
          {/* Contenedor de la imagen */}
          <div className="flex flex-col justify-center items-center md:w-1/2">
            <Image src="/images/oda.jpg" alt="Imagen de About" width={300} height={300} className="rounded-lg" />
          </div>
          
          {/* Contenedor del texto y logos */}
          <div className="md:w-1/2 text-left md:ml-10">
            <h2 className="text-3xl font-bold text-[#66fcf1] mb-4">About Me</h2>
            <p className="mb-4 text-justify">
              Hola! 😄. Mi nombre es Brayan Estrada, estudiante de Ingeniería de Sistemas en la Universidad EIA.
              Me gusta todo lo relacionado a datos, disfruto programando en python y temas cloud específicamente AWS.
              Sin embargo, aquí estoy, intentando hacer una página web. 💀💀
            </p>
            
            {/* Contenedor para los logos */}
            <div className="flex justify-center items-center mt-4">
              {logos.map((logo, index) => (
                <div key={index} className="px-4"> {/* px-4 para dar espacio horizontal entre logos */}
                  <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
                </div>
              ))}
            </div>
          </div>
          </div>
      </div>
      
      <footer className="p-4 bg-[#1f2833] text-center">
        Ingenieria Web - Taller 1
      </footer>
    </div>
  );
};

export default About;
