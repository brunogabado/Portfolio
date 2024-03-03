import { useSelector } from "react-redux";
import Title from "../components/Title";
import { RootState } from "../state/store";

const AboutSection = () => {
  const language = useSelector((state: RootState) => state.language.language);

  return (
    <>
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none" width="100%" height="100%">
        <path fill="black" d="M0 30c166.5-29.5 333 59 500 29.5s333-59 500 0v70H0z" />
      </svg>
      <div id="About" className="flex flex-col items-center p-12 bg-black gap-[80px] ">
        <Title color="white">{language === "english" ? "About" : "Sobre"}</Title>
        <div className="flex justify-center max-w-[900px]">
          <h6 className="text-white text-xl sm:text-2xl md:text-4xl font-indie-flower">
            {language === "english" ? (
              <>
                I am Bruno, a 24-year-old guy living in Portugal who is starting a career as a web developer. I always struggle to find an area that I
                wanted to pursue and study. At the end of high school, I didn’t know what to do, so I started to work at that time until today.
                <br></br>
                <br></br> About two years ago, I discovered the area of programming and started to do some free courses online. The interest grows,
                and the pleasure of learning grows as well. And, for the first time, I found a subject that I truly enjoy working on.<br></br>
                <br></br> Two years later, it came to this day. I had already learned a lot, but never enough. Recently, I've finished the {" "}
                <a className="underline hover:text-gray-500" href="https://www.eddisrupt.com/pt">
                  Eddsirupt
                </a>{" "}
                professional bootcamp, which introduced me to the professional world. Now, I’m searching for an opportunity to change careers and take
                one more step in my evolution.
              </>
            ) : (
              <>
                Sou o Bruno, tenho 24 anos, vivo em Portugal, e estou neste momento a iniciar carreira em desenvolvimento web. Desde cedo que nunca
                soube que area estudar ou que seguir profissionalmente . No fim do secúndario, sem ideia do que queria, ingressei no mercado de
                trabalho até aos dias de hoje.
                <br></br>
                <br></br> Há 2 anos atrás descobri o mundo da programação e comecei a fazer alguns cursos gratuitos online. O interesse pela area
                cresceu, assim como o gosto pela aprendizagem. Pela primeira vez encontrei uma area que estava a adorar explorar e aprender.<br></br>
                <br></br> Dois anos mais tarde, chegando ao dia de hoje, já aprendi muito, mas nunca o suficiente. Recentemente acabei o bootcamp da{" "}
                <a className="underline hover:text-gray-500" href="https://www.eddisrupt.com/pt">
                  Eddsirupt
                </a>{" "}
                que me preparou para o mercado de trabalho. Estou agora á procura de uma aoportunidade para mudar de carreira profissional e dar mais
                um passo na minha evolução.
              </>
            )}
          </h6>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
