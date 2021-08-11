import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import TopLeyend from "./TopLeyend";
import TopMainScreen from "./TopMainScreen";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div>
      <TopLeyend />
      <TopMainScreen />

      {/* MOBILE */}

      <div
        className="absolute z-20 right-0 font-bold bg-secundary text-background w-1/2 rounded-b-3xl"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="flex text-right flex-col text-base p-2 text-background mb-5">
          <Link href="/">
            <a className="mr-2  mt-2 px-3 hover:border-black">Home 🏠</a>
          </Link>
          <Link href="/quienesSomos">
            <a className="mr-2 mt-5 px-3 hover:border-black">
              Quienes somos 🙋‍♂️
            </a>
          </Link>
          <Link href="/servicios">
            <a className="mr-2 mt-5 px-3 hover:border-black">Servicios 🛠</a>
          </Link>

          <a
            className="mr-2 mt-5 px-3 hover:border-black"
            href="https://www.youtube.com/cosntruccionesMED"
            target="_blank"
            rel="noopener"
          >
            Videos 📽
          </a>

          <Link href="/contacto">
            <a className="mr-2 mt-5 px-3 hover:border-black">Contactanos 📞</a>
          </Link>
        </div>
      </div>

      {/* NAV BAR */}

      <div className="flex py-2 md:py-0 justify-between px-4 md:px-0 bg-secundary text-white text-2xl">
        <div className="hidden md:flex">
          <div className="w-32"></div>
          <Link href="/">
            <a className="bg-red px-3 py-6">Home</a>
          </Link>
          <Link href="/quienesSomos">
            <a className="px-3 hover:bg-red py-6">Quienes somos</a>
          </Link>
          <Link href="/servicios">
            <a className="px-3 hover:bg-red py-6">Servicios</a>
          </Link>

          <a
            className="px-3 hover:bg-red py-6"
            href="https://www.youtube.com/cosntruccionesMED"
            target="_blank"
            rel="noopener"
          >
            Videos 📽
          </a>

          <Link href="/contacto">
            <a className="px-3 hover:bg-red py-6">Contactanos</a>
          </Link>
        </div>
        <div className="p-2 md:hidden flex justify-start w-10 text-4xl">
          <button
            onClick={toggleNav}
            aria-label="Hamburguer Button of Main Content"
          >
            <GiHamburgerMenu />
          </button>
        </div>

        <div className="bg-red md:w-64 transform skew-x-12 translate-x-4"></div>
      </div>

      {children}

      <Footer />
      <a
        href="https://api.whatsapp.com/send?phone=5492616708100"
        target="_blank"
        rel="noopener"
      >
        <img
          src="whatsapp.png"
          alt="building icon logo construcciones med"
          height="60"
          width="60"
          className="fixed bottom-10 right-10 cursor-pointer"
        />
      </a>
    </div>
  );
}
