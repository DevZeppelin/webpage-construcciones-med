import Head from "next/head";
import Layout from "../components/Layout";

export default function Home({ blogs }) {
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
      <Layout>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 m-16 gap-6 px-16 text-lg">
            <div className="space-y-8 text-justify">
              <h1 className="font-bold">
                REPARAMOS Y REMODELAMOS TU CASA U OFICINA
              </h1>
              <p>
                {" "}
                Somos una empresa dedicada a la reparación, construcción,
                remodelación y mantención. Realizamos trabajos para oficinas,
                empresas y para el hogar. Construcción de obras menores –
                Eléctricos – Pintores – Soldadores – Albañiles – Carpinteros –
                Gasfitería
              </p>
              <button className="bg-lightRed p-6 text-white font-bold">
                Contáctanos hoy
              </button>
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
        <section>
          <div className="p-16 space-y-8 px-32 text-center">
            <h1 className="font-bold  text-2xl">
              NO ESPERE A QUE LOS PRECIOS SUBAN O EL PROBLEMA SEA MAYOR
            </h1>
            <p className="text-lg">
              Contamos con personal calificado para construir proyectos que den
              valor agregado a su patrimonio, mejorar una imagen, solución
              rápida de un problema. Atendemos a empresas, locales comerciales,
              colegios, departamentos, casas particulares, en general a quien
              necesite de nuestros servicios.
            </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-24">
            <div className="my-auto font-bold">
              <p>
                REPARAMOS O REMODELAMOS TU CASA PARA QUE VIVAS TRANQUILO EN EL
                ENTORNO QUE DESEAS
              </p>
            </div>
            <div>
              <img
                src="01-sm.png"
                alt="building icon logo construcciones med"
                className=" border-2 border-gray"
              />
            </div>
            <div>
              <img
                src="01-sm.png"
                alt="building icon logo construcciones med"
                className=" border-2 border-gray"
              />
            </div>
            <div>
              <img
                src="01-sm.png"
                alt="building icon logo construcciones med"
                className=" border-2 border-gray"
              />
            </div>
            <div>
              <img
                src="01-sm.png"
                alt="building icon logo construcciones med"
                className=" border-2 border-gray"
              />
            </div>
            <div>
              <img
                src="01-sm.png"
                alt="building icon logo construcciones med"
                className=" border-2 border-gray"
              />
            </div>
            <div>
              <img
                src="01-sm.png"
                alt="building icon logo construcciones med"
                className=" border-2 border-gray"
              />
            </div>
            <div>
              <img
                src="01-sm.png"
                alt="building icon logo construcciones med"
                className=" border-2 border-gray"
              />
            </div>
            <div className="m-6 space-y-8 text-center">
              <h2 className="font-bold">Nosotros te llamamos</h2>
              <p>
                Déjanos tu nombre, teléfono o correo electrónico y nos
                comunicaremos contigo a la brevedad
              </p>
              <button className="bg-lightRed p-6 text-white font-bold">
                Te Llamamos
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="m-32 font-bold text-center text-2xl">
            Empresa de construcción de Lavalle
          </div>
        </section>
        <section>
          <div className="text-center">
            <h2 className="text-2xl font-bold pb-12">¿Por qué elegirnos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-32 pb-16 ">
              <div className="space-y-8 pb-6">
                <img
                  src="whatsapp.png"
                  alt="building icon logo construcciones med"
                  height="60"
                  width="60"
                  className="mx-auto"
                 
                />
                <h3 className="font-bold">Valoración de los recursos humanos</h3>
                <p>
                  Queremos, buscamos y promovemos las buenas relaciones humanas,
                  tanto sociales como laborales y familiares. Entendemos el
                  valor de una persona y su historia.
                </p>
              </div>
              <div className="space-y-8 pb-6">
                <img
                  src="whatsapp.png"
                  alt="building icon logo construcciones med"
                  height="60"
                  width="60"
                  className="mx-auto"
                  
                />
                <h3 className="font-bold">Valoración de los recursos humanos</h3>
                <p>
                  Queremos, buscamos y promovemos las buenas relaciones humanas,
                  tanto sociales como laborales y familiares. Entendemos el
                  valor de una persona y su historia.
                </p>
              </div>
              <div className="space-y-8 pb-6">
                <img
                  src="whatsapp.png"
                  alt="building icon logo construcciones med"
                  height="60"
                  width="60"   
                  className="mx-auto"               
                />
                <h3 className="font-bold">Valoración de los recursos humanos</h3>
                <p>
                  Queremos, buscamos y promovemos las buenas relaciones humanas,
                  tanto sociales como laborales y familiares. Entendemos el
                  valor de una persona y su historia.
                </p>
              </div>
              <div className="space-y-8 pb-6">
                <img
                  src="whatsapp.png"
                  alt="building icon logo construcciones med"
                  height="60"
                  width="60" 
                  className="mx-auto"                 
                />
                <h3 className="font-bold">Valoración de los recursos humanos</h3>
                <p>
                  Queremos, buscamos y promovemos las buenas relaciones humanas,
                  tanto sociales como laborales y familiares. Entendemos el
                  valor de una persona y su historia.
                </p>
              </div>
              
            </div>
          </div>
        </section>

        {/* CSS Puro */}
        <style jsx>{``}</style>
      </Layout>
    </div>
  );
}
