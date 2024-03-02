
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';
import { RootState } from '../state/store';

const Header = () => {

const language = useSelector((state: RootState) => state.language.language)

  return (
    <>
      <div className="flex justify-around items-center px-[5%] h-[60px] bg-black text-white font-mono font-semibold border-b border-white">
        <Link to="About" spy={true} smooth={true} duration={800} className="hover:animate-pulse hover:scale-150 cursor-pointer">
          {language === "english" ? "About" : "Sobre"}
        </Link>
        <Link to="Skills" spy={true} smooth={true} duration={800} className="hover:animate-pulse hover:scale-150 cursor-pointer">
          Skills
        </Link>
        <Link to="Projects" spy={true} offset={220} smooth={true} duration={800} className="hover:animate-pulse hover:scale-150 cursor-pointer">
        {language === "english" ? "Projects" : "Projetos"}
        </Link>
        <Link to="Contact" spy={true} smooth={true} duration={800} className="hover:animate-pulse hover:scale-150 cursor-pointer">
        {language === "english" ? "Contact" : "Contacto"}
        </Link>
      </div>
    </>
  );
};

export default Header;
