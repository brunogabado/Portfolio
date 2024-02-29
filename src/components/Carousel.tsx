import { useState } from "react";
import { projectProps } from "../sections/ProjectsSection";
import WebSvg from "../svg's/WebSvg";
import GithubIcon from "../svg's/GithubIconSvg";

const Carousel = ({ projects }: { projects: projectProps[] }) => {
  const [index, setIndex] = useState<number>(1);
  const [buttonsOpen, setButtonsOpen] = useState<boolean>(false);

  const nextSlide = () => {
    setButtonsOpen(false);
    let newIndex: number = index + 1 > projects.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  const prevSlide = () => {
    setButtonsOpen(false);
    let newIndex: number = index - 1 < 0 ? projects.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      // Scrolling down
      nextSlide();
    } else if (event.deltaY < 0) {
      // Scrolling up
      prevSlide();
    }
  };

  return (
    <div className="flex flex-col xl:flex-row overscroll-contain justify-center items-center text-center my-[70px] pb-12 text-lg" onWheel={handleScroll}>
      <div
        className="flex justify-center absolute lg:left-[100px] rounded-lg border-2 bg-white w-[180px] h-[90px] opacity-25 transition-opacity duration-300 min-[450px]:w-[220px] min-[450px]:h-[110px] md:h-[150px] md:w-[300px] lg:h-[180px] lg:w-[360px] xl:h-[210px] xl:w-[420px]"
        onClick={prevSlide}
      >
        <img src={`${projects[index - 1 < 0 ? projects.length - 1 : index - 1].image}.png`} className="h-full object-cover" />
      </div>

      <div className="flex flex-col z-10 transition delay-200 duration-300 ease-in-out hover:scale-[1.1]">
        <div
          className="flex justify-center transition rounded-lg delay-150 duration-300 ease-in-out border-2 b bg-white w-[270px] h-[130px]  min-[450px]:w-[330px] min-[450px]:h-[160px] sm:h-[200px] sm:w-[420px] md:h-[250px] md:w-[530px] lg:h-[300px] lg:w-[640px] xl:h-[400px] xl:w-[850px] "
          onClick={() => setButtonsOpen(!buttonsOpen)}
        >
          <img src={`${projects[index].image}.png`} className="h-full object-cover" />
        </div>
        {buttonsOpen && (
          <div className="flex justify-center flex rounded-lg justify-around items-center border-2 h-12 bg-black">
            <a
              className="flex text-white font-anta items-center transition delay-150 duration-300 ease-in-out hover:scale-125"
              href={projects[index].liveLink}
            >
              <WebSvg /> Live App
            </a>
            <a
              className="flex text-white font-anta items-center transition delay-150 duration-300 ease-in-out hover:scale-125"
              href={projects[index].githubLink}
            >
              <GithubIcon /> Repository
            </a>
          </div>
        )}
      </div>

      <div
        className="flex justify-center lg:absolute right-[100px] rounded-lg border-2 bg-white  w-[180px] h-[90px] min-[450px]:w-[220px] min-[450px]:h-[110px] md:h-[150px] md:w-[300px] lg:h-[180px] lg:w-[360px] opacity-25 transition-opacity duration-300  xl:h-[210px] xl:w-[420px]"
        onClick={nextSlide}
      >
        <img src={`${projects[index + 1 > projects.length - 1 ? 0 : index + 1].image}.png`} className="h-full object-cover" />
      </div>
    </div>
  );
};

export default Carousel;
