import { FiMail } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHammer, FaWhatsapp, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const TopLeyend = () => {
    return (
        <div className="flex justify-center md:justify-between py-2 text-gray md:bg-lowContrast">
        <div className="hidden md:flex px-12">
          <p className="text-base font-bold">
            No construimos, hacemos tus sueños realidad
          </p>
        </div>
        <div className="text-xl space-x-3 pr-6">
          <a
            href="https://www.facebook.com/Gini77o"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="go to my fabecook" alt="facebook-logo">
              <FaFacebook className="hover:text-blue-800" />
            </button>
          </a>

          <a
            href="https://youtube.com/DevZeppelin"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="go to my youtube channel" alt="youtube-logo">
              <FiYoutube className="hover:text-red-400" />
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/gino-pietrobon"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="go to my linked in" alt="linkedin-logo">
              <FaLinkedinIn className="hover:text-yellow-400" />
            </button>
          </a>

          <a
            href="mailto:gino.b.pietrobon@gmail.com"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="send me a mail" alt="gmail-logo">
              <FiMail className="hover:text-red" />
            </button>
          </a>
        </div>
      </div>
    )
}

export default TopLeyend
