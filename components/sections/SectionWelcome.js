import { useEffect } from "react";

const SectionWelcome = () => {
  return (
    <section>
      <div className=" bg-hero bg-cover">
        <div className="grid grid-cols-1 md:grid-cols-2 text-lg px-8 md:px-24 bg-lightGray background-overlay">
          <div className="space-y-6 p-9 bg-white">
            <h1 className="font-black text-2xl md:text-4xl font-prompt">
              REPARAMOS Y REMODELAMOS TU CASA U OFICINA
            </h1>
            <div className="h-1 w-64 bg-red mx-auto"></div>
            <p className="text-base">
              {" "}
              Somos una empresa dedicada a la reparación, construcción,
              remodelación y mantención. Realizamos trabajos para oficinas,
              empresas y para el hogar.{" "}
              <b>
                Construcción de obras menores – Eléctricos – Pintores –
                Soldadores – Albañiles – Carpinteros – Gasfitería
              </b>
            </p>
            <button className="btn">Contáctanos hoy</button>
          </div>
          <div className="hidden md:flex"></div>
        </div>
      </div>

      <style jsx>{`
        .background-overlay {
          background-image: linear-gradient(
            270deg,
            rgba(0, 0, 0, 0) 71%,
            #606879 0%
          );
          background-color: transparent;
          opacity: 1;
          transition: background 3s, border-radius 0.3s, opacity 3s;
        }
      `}</style>
    </section>
  );
};

export default SectionWelcome;
