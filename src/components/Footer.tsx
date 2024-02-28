import EmailIcon from "../svg's/EmailIcon";
import GithubFooterLink from "../svg's/GithubFooter";
import LinkedInFooterLink from "../svg's/LinkedinFooter";

const Footer = () => {
  return (
    <>
      <div className="flex sm:justify-around items-center bg-black text-white p-5 justify-between">
        <div>
          <p className="font-anta text-xs sm:text-sm">Personal Portfolio</p>
          <p className="font-anta text-xs sm:text-sm">2024</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-9">
          <a
            className="flex justify-center items-center h-[60px] transition delay-150 duration-300 ease-in-out hover:scale-125"
            href="https://github.com/brunogabado"
          >
            <GithubFooterLink />
          </a>
          <a
            className="flex justify-center items-center h-[60px] transition delay-150 duration-300 ease-in-out hover:scale-125"
            href="https://www.linkedin.com/in/brunogabado/"
          >
            <LinkedInFooterLink />
          </a>
          <a
            className="flex font-bold text-sm justify-center items-center h-[60px] transition delay-150 duration-300 ease-in-out hover:scale-125"
            href="mailto:brunogabado@hotmail.com"
          >
            Email Me <EmailIcon />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
