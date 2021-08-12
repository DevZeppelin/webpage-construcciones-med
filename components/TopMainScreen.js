import Link from "next/dist/client/link";
import { useState } from "react";
import MainBarButton from "./MainBarButton";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const TopMainScreen = () => {
  return (
    <div className="flex px-2 md:px-24 bg-primary text-black justify-center md:justify-between py-2">
      <Link href="/">
        <img
          src="logo.png"
          alt="building icon logo construcciones med"
          height="160"
          width="280"
        />
      </Link>

      <div className="hidden md:flex justify-between space-x-6 text-center my-auto p-6">
        <MainBarButton
          logo={
            <FaWhatsapp className="text-red text-4xl flex my-auto m-2" />
          }
          text="Whatsapp Chat"
          description="+5492616502121"
          classType="text-red"
        />
        <MainBarButton
          logo={
          <FiMail className="text-red text-4xl flex my-auto m-2" />
        }
          text="Correo electrónico"
          description="construccionesmed@gmail.com"
          classType="text-red"
        />

        <div className="bg-red font-bold p-4 text-xl my-auto text-white cursor-pointer">
          Te llamamos
        </div>
      </div>
    </div>
  );
};

export default TopMainScreen;
