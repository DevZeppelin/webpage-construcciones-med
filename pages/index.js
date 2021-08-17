import Head from "next/head";
import Layout from "../components/Layout";
import SectionWelcome from "../components/sections/SectionWelcome";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaRecycle, FaUserCog } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export default function Home({ }) {
  return (
    <div>
      <Head>
        <title>Construcciones MED</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="construcciones med, med, lavalle, cosntruccion, casas, edificios, ladrillos, cosntruccion de casa, argentina, mendoza"
        />
        <meta
          name="keywords"
          content="construcciones med, med, lavalle, cosntruccion, casas, edificios, ladrillos, cosntruccion de casa, argentina, mendoza"
        />
        <meta name="author" content="Gino Pietrobon" />
      </Head>
      <Layout classHome={"bg-red"}>
        <SectionWelcome />
        <section>
          <div className="space-y-2 text-center p-12 px-8 md:px-32 pt-8 bg-lowContrast">
            <h1 className="font-bold text-2xl tracking-wider text-gray">
              NO ESPERE A QUE LOS PRECIOS SUBAN O EL PROBLEMA SEA MAYOR
            </h1>
            <p className="">
              Contamos con personal calificado para construir proyectos que den
              valor agregado a su patrimonio, mejorar una imagen, solución
              rápida de un problema. Atendemos a empresas, locales comerciales,
              colegios, departamentos, casas particulares, en general a quien
              necesite de nuestros servicios.
            </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-8 md:m-24 text-center">
            <div className="my-auto font-bold flex">
              <div className="w-3 h-32 bg-red my-auto"></div>
              <p className="text-lg m-6">
                REPARAMOS O REMODELAMOS TU CASA PARA QUE VIVAS TRANQUILO EN EL
                ENTORNO QUE DESEAS
              </p>
            </div>
            <div className="relative">
              <div className="indexGridContainer">
                <div className="indexGridImageText">Construcción en general</div>
                <img
                  src="01-sm.png"
                  alt="building icon logo construcciones med"
                  className="gridImage imagen-filtro"
                />
              </div>
            </div>
            <div className="relative">
              <div className="indexGridImageText">Servicio de albañilería</div>
              <img
                src="01-sm.png"
                alt="building icon logo construcciones med"
                className="gridImage imagen-filtro"
              />
            </div>
            <div className="relative">
              <div className="indexGridImageText">
                Remodelaciones y ampliaciones
              </div>
              <img
                src="01-sm.png"
                alt="building icon logo construcciones med"
                className="gridImage imagen-filtro"
              />
            </div>
            <div className="relative">
              <div className="indexGridImageText">Servicio de Pintura</div>
              <img
                src="01-sm.png"
                alt="building icon logo construcciones med"
                className="gridImage imagen-filtro"
              />
            </div>
            <div className="relative">
              <div className="indexGridImageText">Servicio de Soldadura</div>
              <img
                src="01-sm.png"
                alt="building icon logo construcciones med"
                className="gridImage imagen-filtro"
              />
            </div>
            <div className="relative">
              <div className="indexGridImageText">Servicios Eléctricos</div>
              <img
                src="01-sm.png"
                alt="building icon logo construcciones med"
                className="gridImage imagen-filtro"
              />
            </div>
            <div className="relative">
              <div className="indexGridImageText">Servicios de Plomería</div>
              <img
                src="01-sm.png"
                alt="building icon logo construcciones med"
                className="gridImage imagen-filtro"
              />
            </div>
            <div className="m-6 space-y-4 md:space-y-4 text-center my-auto">
              <h2 className="font-bold text-xl font-prompt">Nosotros te llamamos!</h2>
              <p>
                Déjanos tu nombre, teléfono o correo electrónico y nos
                comunicaremos contigo a la brevedad
              </p>
              <button className="btn">Te Llamamos</button>
            </div>
          </div>
        </section>
        <section>
          <div className="p-8 md:p-32 py-32  font-bold text-black text-center bg-cover bg-hero bg-fixed grid grid-cols-1 md:grid-cols-2">
            <div></div>
            <div className="space-y-6">
              <h2 className="text-3xl font-prompt">
                Empresa de Servicios Generales en Mendoza
              </h2>
              <p className="text-lg">
                Somos especialistas en servicios de reparación, construcción,
                ampliación y remodelación para la empresa y el hogar
              </p>
              <button className="btn uppercase">Reservá una visita con nosotros</button>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center pt-16">
            <h2 className="text-3xl font-bold pb-12 font-prompt">¿Por qué elegirnos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 md:px-32 pb-16 ">
              <div className="space-y-8 pb-6">
                <BsFillPersonCheckFill className="text-4xl text-red mx-auto" />
                <h3 className="font-bold">
                  Valoración de los recursos humanos
                </h3>
                <p>
                  Queremos, buscamos y promovemos las buenas relaciones humanas,
                  tanto sociales como laborales y familiares. Entendemos el
                  valor de una persona y su historia.
                </p>
              </div>
              <div className="space-y-8 pb-6">
                <FaRecycle className="text-4xl text-red mx-auto" />
                <h3 className="font-bold">Cuidado del medio ambiente</h3>
                <p>
                  Nuestras actividades cumplen con la legislación aplicable y
                  pertinente en materia de calidad, medio ambiente, seguridad y
                  salud.
                </p>
              </div>
              <div className="space-y-8 pb-6">
                <AiOutlineStar className="text-4xl text-red mx-auto" />
                <h3 className="font-bold">Excelencia de nuestros servicios</h3>
                <p>
                  Buscamos y perseguimos la excelencia del servicio prestado a
                  través de los principios de transparencia, honestidad y
                  responsabilidad.
                </p>
              </div>
              <div className="space-y-8 pb-6">
                <FaUserCog className="text-4xl text-red mx-auto" />
                <h3 className="font-bold">Profesionales capacitados</h3>
                <p>
                  Brindamos la eficiencia y calidad exigida por el cliente,
                  demostrando la capacidad de llevar de manera idónea los
                  proyectos asignados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CSS Puro */}
        <style jsx>{`
          .imagen-filtro {
            transition: all 0.4s ease;
          }
          .imagen-filtro:hover {
            -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
            filter: grayscale(100%);
          }
        `}</style>
      </Layout>
    </div>
  );
}
