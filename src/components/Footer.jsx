import Logo from "../../public/logo-ns.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return(
    <Link 
      to="https://nicolassequeira11.github.io/portafolio/" 
      target="_blank" 
      className="flex bg-black py-10"
    >
      <p className="text-white mx-auto items-center text-xl flex">
        Desarrollado por <img src={Logo} className="text-center ps-2 flex h-[35px]" />
      </p>
    </Link>
  )
}