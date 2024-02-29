
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center px-[5%] h-[60px] bg-black text-white font-mono font-semibold border-b border-white">
        <Link to="About" spy={true} smooth={true} duration={800} className="hover:animate-pulse hover:scale-150 cursor-pointer">
          About
        </Link>
        <Link to="Skills" spy={true} smooth={true} duration={800} className="hover:animate-pulse hover:scale-150 cursor-pointer">
          Skills
        </Link>
        <Link to="Projects" spy={true} offset={220} smooth={true} duration={800} className="hover:animate-pulse hover:scale-150 cursor-pointer">
          Projects
        </Link>
        <Link to="Contact" spy={true} smooth={true} duration={800} className="hover:animate-pulse hover:scale-150 cursor-pointer">
          Contacts
        </Link>
      </div>
    </>
  );
};

export default Header;
