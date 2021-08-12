import Head from "next/head";
import Layout from "../components/Layout";
import { FaTools } from "react-icons/fa";

const Servicios = () => {
  return (
    <div>
      <Head>
        <title>Servicios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          <div className="bg-hero bg-cover bg-fixed text-center py-32">
            <h1 className="text-4xl font-bold">Servicios</h1>
          </div>
          <div>
            <section className="text-black-400 body-font bg-gray-900">
              <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                  <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-black">
                    Nuestra variedad de servicios
                  </h1>
                  <p className="lg:w-1/2 w-full text-lg  leading-relaxed text-opacity-80">
                  Somos una empresa argentina. Contamos con profesionales y técnicos experimentados en el campo, lo cual nos permite entregar soluciones reales y servicios de calidad.
                  </p>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="text-center hover:bg-lowContrast hover:text-black border border-gray-700 border-opacity-75 p-6 rounded-lg">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                      <FaTools className="mx-auto text-3xl text-red"/>
                      </div>
                      <h2 className="service-h2">
                        Construcciones menores
                      </h2>
                      <p className="leading-relaxed text-base">
                        Fingerstache flexitarian street art 8-bit waist co,
                        subway tile poke farm.
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className=" text-center hover:bg-lowContrast hover:text-black border border-gray-700 border-opacity-75 p-6 rounded-lg">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                      <FaTools className="mx-auto text-3xl text-red"/>
                      </div>
                      <h2 className="service-h2">
                       Ampliaciones
                      </h2>
                      <p className="leading-relaxed text-base">
                        Fingerstache flexitarian street art 8-bit waist co,
                        subway tile poke farm.
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="text-center hover:bg-lowContrast hover:text-black border border-gray-700 border-opacity-75 p-6 rounded-lg">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                      <FaTools className="mx-auto text-3xl text-red"/>
                      </div>
                      <h2 className="service-h2">
                        Remodelaciones
                      </h2>
                      <p className="leading-relaxed text-base">
                        Fingerstache flexitarian street art 8-bit waist co,
                        subway tile poke farm.
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="text-center hover:bg-lowContrast hover:text-black border border-gray-700 border-opacity-75 p-6 rounded-lg">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                      <FaTools className="mx-auto text-3xl text-red"/>
                      </div>
                      <h2 className="service-h2">
                        Construcción en seco
                      </h2>
                      <p className="leading-relaxed text-base">
                        Fingerstache flexitarian street art 8-bit waist co,
                        subway tile poke farm.
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="text-center hover:bg-lowContrast hover:text-black border border-gray-700 border-opacity-75 p-6 rounded-lg">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                      <FaTools className="mx-auto text-3xl text-red"/>
                      </div>
                      <h2 className="service-h2">
                       Plomería y electricidad
                      </h2>
                      <p className="leading-relaxed text-base">
                        Fingerstache flexitarian street art 8-bit waist co,
                        subway tile poke farm.
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg hover:bg-lowContrast hover:text-black text-center">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                      <FaTools className="mx-0 text-3xl text-red"/>
                      </div>
                      <h2 className="service-h2">
                       Demoliciones
                      </h2>
                      <p className="leading-relaxed text-base">
                        Fingerstache flexitarian street art 8-bit waist co,
                        subway tile poke farm.
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Servicios;
