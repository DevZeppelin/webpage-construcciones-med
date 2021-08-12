import Head from "next/head";
import Layout from "../components/Layout";
import MainBarButton from "../components/MainBarButton";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contacto = () => {
  return (
    <div>
      <Head>
        <title>Contacto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="bg-hero bg-cover bg-fixed text-center py-24">
          <h1 className="text-4xl font-bold">Contactanos</h1>
        </div>
        <div className="text-center space-y-6 pt-8">
          <h2 className="text-2xl font-bold">Trabajá con profesionales</h2>
          <p className="text-lg">
            ¿Necesita trabajos en su hogar o empresa? Construcciones MED, es la
            alternativa a tu alcance. Contáctenos hoy!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-16 md:pl-40 ">
            <div>
              <MainBarButton
                logo={
                  <FaWhatsapp className="text-red text-4xl flex my-auto m-2" />
                }
                text="Whatsapp Chat"
                description="+5492616502121"
                classType="text-red text-2xl"
              />
            </div>
            <div>
              <MainBarButton
                logo={<FiMail className="text-red text-4xl flex my-auto m-2" />}
                text="Correo electrónico"
                description="construccionesmed@gmail.com"
                classType="text-red text-2xl"
              />
            </div>
          </div>
        </div>
        <section className="text-gray-400 bg-gray-900 body-font relative">
          <div className="absolute inset-0 bg-gray-900">
            <iframe
              title="map"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=mendoza, lavalle,la+pega+(construcciones med)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
              <h2 className="text-black text-xl mb-1 font-extrabold title-font">
                Contactanos!
              </h2>
              <p className="leading-relaxed mb-5 font-bold">
                Envíanos tu consulta y nos pondremos en contacto con vos en
                breve!
              </p>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400 font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400 font-bold"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="btn">Enviar</button>
              <p className="text-xs text-gray-400 text-opacity-90 mt-3">
                Contrucciones MED
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

/* style="" */

export default Contacto;
