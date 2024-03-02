import { scroller } from "react-scroll";
import Title from "../components/Title";
import GithubSvg from "../svg's/GithubSvg";
import LinkedinSvg from "../svg's/LinkedinSvg";
import LanguageToggle from "../components/LanguageToggle";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const WelcomeSection = () => {
  const scrollToContact = () => {
    scroller.scrollTo("Contact", {
      duration: 800,
      delay: 0,
      smooth: true,
    });
  };

  const language = useSelector((state: RootState) => state.language.language);

  return (
    <>
      <div className="flex flex-col p-[25px] ">
        <LanguageToggle />

        <div>
          <div className="flex sm:pl-[15%] ">
            <Title color="black">{language === "portuguese" ? "Hi, i'm Bruno," : "Olá, sou o Bruno,"}</Title>
          </div>
          <div className="flex justify-center">
            <Title color="black">{language === "portuguese" ? "a Junior Frontend Developer" : "um Junior Frontend Developer"}</Title>
          </div>
        </div>

        <div className="md:mt-11 w-[100%] flex flex-col gap-9 justify-around items-center py-[30px] sm:p-[30px] md:flex-row">
          <div className="max-w-[600px]">
            <h6 className="text-xl sm:text-2xl md:text-4xl font-indie-flower">
              {language === "english" ? (
                <>
                  I am a frontend developer recently graduated from the{" "}
                  <a className="underline hover:text-gray-500" href="https://www.eddisrupt.com/pt">
                    Eddisrupt
                  </a>
                  {" "}bootcamp. With several skills acquired during the last 2 years of studies. Now waiting for a chance to change my career.
                </>
              ) : (
                <>
                  <>
                    Sou um frontend developer recentemento graduado pelo bootcamp da{" "}
                    <a className="underline hover:text-gray-500" href="https://www.eddisrupt.com/pt">
                      Eddisrupt
                    </a>
                    . Com múltiplas skills adquiridas durante os ultimos 2 anos de estudo e aprendizagem. Procuro agora um oportunidade para mudar de
                    carreira.
                  </>
                </>
              )}
            </h6>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-center gap-6">
              <a className="transition delay-150 duration-300 ease-in-out hover:scale-125" href="https://www.linkedin.com/in/brunogabado/">
                <LinkedinSvg />
              </a>
              <a className="transition delay-150 duration-300 ease-in-out hover:scale-125" href="https://github.com/brunogabado">
                <GithubSvg />
              </a>
            </div>
            <button
              onClick={scrollToContact}
              className="w-[200px] border-2 border-black rounded-2xl p-[15px] bg-black text-white transition delay-150 duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-125 transition font-anta"
            >
              {language === "english" ? "Get in Touch" : "Entra em contacto"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;
