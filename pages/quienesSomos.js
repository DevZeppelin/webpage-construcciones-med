import Head from "next/head";
import Layout from "../components/Layout";
import { BiCheckShield } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

const QuienesSomos = () => {
  return (
    <div>
      <Head>
        <title>Quienes Somos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section>
          <div className="bg-hero bg-cover bg-fixed text-center py-32">
            <h1 className="text-4xl font-bold">Quienes Somos</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            <div className="text-center space-y-4 p-8 md:p-16">
              <h2 className="text-2xl font-extrabold">Nuestra empresa</h2>
              <div className="bg-red w-32 h-1 mx-auto"></div>
              <p>
                <b>Contrucciones MED</b> es una empresa dedicada a la
                construcción de obras menores, reparación, remodelación y
                mantención. Realizamos trabajos tanto para empresas y comercios
                como para el hogar. Brindamos ideas, profesionalismo y servicios
                de calidad. Estas son nuestras principales armas de trabajo, lo
                que nos permite desarrollar ventajas comparativas y generar
                valor agregado en beneficio de nuestros clientes.
              </p>
            </div>
            <div>
              <img
                src="01-sm.png"
                alt="building icon logo construcciones med"
                className=" border-2 border-gray"
              />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-32 pb-16 text-center">
          <div className="space-y-4">
            <BiCheckShield className="mx-auto text-4xl text-red" />
            <h2 className="text-2xl">Nuestra Misión</h2>
            <p>
              Realizar trabajos con alto nivel de compromiso, seguridad y
              transparencia. Nuestro desafío es atender de manera responsable
              los requerimientos y en lo posible superar las expectativas.
              Avanzar para buscar los mejores acuerdos y ser la alternativa que
              da tranquilidad frente a una inversión.
            </p>
          </div>
          <div className="space-y-4">
            <FaEye className="mx-auto text-4xl text-red " />
            <h2 className="text-2xl">Nuestra Visión</h2>
            <p>
            Estar al alcance de todos en la Región Metropolitana. Avanzar con liderazgo para ser una de las mejores opciones también en regiones. Transmitir valores como el respeto, responsabilidad, honestidad, calidad y eficiencia necesaria para lograr confianza.
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default QuienesSomos;
