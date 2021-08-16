import React, { useEffect, useRef } from "react";

const SectionWelcome = () => {
  let radio1 = useRef(null);
  let radio2 = useRef(null);
  let radio3 = useRef(null);
  let radio4 = useRef(null);

  useEffect(() => {
    let counter = 0;

    let radio1 = document.getElementById("radio1");
    let radio2 = document.getElementById("radio2");
    let radio3 = document.getElementById("radio3");
    let radio4 = document.getElementById("radio4");

    const arrayRadio = [radio1, radio2, radio3, radio4];

    setInterval(function () {
      arrayRadio[counter].checked = true;
      counter++;
      if (counter > 3) {
        counter = 0;
      }
    }, 4200);
  }, []);

  return (
    <section>
      {/* <div className=" bg-hero bg-cover"> */}
      <div>
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
          <div className="slider-body flex-wrap">
            <div className="slider">
              <div className="slides">
                {/* Radio buttons Start */}
                <input  type="radio" name="radio-btn" id="radio1" ref={radio1} />
                <input  type="radio" name="radio-btn" id="radio2" ref={radio2} />
                <input  type="radio" name="radio-btn" id="radio3" ref={radio3} />
                <input  type="radio" name="radio-btn" id="radio4" ref={radio4} />
                {/*Slides images Start*/}
                <div className="slide first">
                  <img src="01.png" alt="" />
                </div>
                <div className="slide">
                  <img src="02.png" alt="" />
                </div>
                <div className="slide">
                  <img src="03.png" alt="" />
                </div>
                <div className="slide">
                  <img src="04.png" alt="" />
                </div>
                {/*Automatic Navigation Start*/}
                <div className="navigation-auto hidden">
                  <div className="auto-btn-1"></div>
                  <div className="auto-btn-2"></div>
                  <div className="auto-btn-3"></div>
                  <div className="auto-btn-4"></div>
                </div>
                {/*Automatic Navigation End*/}
                {/*Manual Navigation Start*/}
                <div className="navigation-manual hidden">
                  <label htmlFor="radio1" className="manual-btn" />
                  <label htmlFor="radio2" className="manual-btn" />
                  <label htmlFor="radio3" className="manual-btn" />
                  <label htmlFor="radio4" className="manual-btn" />
                </div>
                {/*Manual Navigation End*/}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{``}</style>
    </section>
  );
};

export default SectionWelcome;
