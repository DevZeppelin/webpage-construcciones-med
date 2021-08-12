import Link from "next/dist/client/link"
import { GiHamburgerMenu } from "react-icons/gi"

const NavBar = ({toggleNav}) => {
    return (
        
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
          Videos
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
    )
}

export default NavBar
