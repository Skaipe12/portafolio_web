import Link from 'next/link';
import type { NextPage } from 'next';
import Image from 'next/image';


const projects = [
    {
        id: 1,
        title: "API REST Terroristas",
        description: "En este proyecto se hizo una API REST utilizando FastAPI y una base de datos MongoDB. La API permite realizar operaciones CRUD sobre terroristas.",
        imageUrl: "/images/terrorist_flag.png",
        github_link: "https://github.com/Skaipe12/terroristasAPI"
      },
      {
        id: 2,
        title: "Backend para una página de servicios de transporte",
        description: "Backend hecho en node.js para un proyecto de la materia análisis y diseño de software.",
        imageUrl: "/images/transporte.jpg", 
        github_link: "https://github.com/Skaipe12/proyecto_analisis"
      },
      {
        id: 3,
        title: "Consumo de servicios de AWS",
        description: "Este proyecto se realizó con el fin de utilizar Boto3 para consumir un API y guardar estos archivos en un bucket de S3 además de hacer uso del servicio SES (Simple Email Service).",
        imageUrl: "/images/image_aws.png",
        github_link: "https://github.com/Skaipe12/prueba-aws-ec2"
      },
      {
        id: 4,
        title: "Curso de Ciencia de Datos",
        description: "Notas de clase en donde se hace uso de diferentes modelos como SVM, Random Forest, Lineal model, etc. Además de un backend para una página similar a Amazon que utiliza un modelo de predicción para recomendar productos al usuario a partir de sus compras anteriores o productos agregados al carrito.",
        imageUrl: "/images/data_science.jpg",
        github_link: "https://github.com/Skaipe12/Data_science"
      }
];

const Projects: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d1117] text-[#c0c0c0]">
      
      {/* Reutilizamos el mismo nav que en la página About */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-[#1f2833]">
        <span className="text-xl font-bold text-[#66fcf1]">Universidad <span className="text-[#c5a3ff]">EIA</span></span>
        <div className="flex space-x-4">
            <Link href="/about"><p className="hover:text-[#66fcf1]">About</p></Link>
          <Link href="/projects"><p className="hover:text-[#66fcf1]">Projects</p></Link>
          <Link href="/contact"><p className="hover:text-[#66fcf1]">Contact</p></Link> 
        </div>
      </nav>

      {/* Contenedor principal para los proyectos */}
      <div className="flex-1 overflow-y-auto p-10">
        <div className="flex flex-col items-center">
          {/* Mapeamos los proyectos a componentes de tarjeta */}
          {projects.map((project, index) => (
            <div key={index} className="w-2/4 mb-8">
              <div className="bg-[#1f2833] p-6 rounded-lg shadow-lg">
                <Image src={project.imageUrl} alt={project.title} width={300} height={300} className="rounded-lg" />
                <h3 className="text-2xl font-bold text-[#66fcf1] mt-4">{project.title}</h3>
                <p className="text-justify">{project.description}</p>
                {/* se agrega un link a un repositorio de github */}
                <a href={project.github_link} target="_blank" rel="noreferrer" className="text-[#66fcf1] hover:text-white">Ver en GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Reutilizamos el mismo footer que en la página About */}
      <footer className="p-4 bg-[#1f2833] text-center">
        Hecho con ♥ en Next.js
      </footer>
    </div>
  );
};

export default Projects;
