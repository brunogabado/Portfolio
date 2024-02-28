import { useState } from "react";
import { projectProps } from "../sections/ProjectsSection";
// import NextSvg from "../svg's/NextSvg";
// import PrevSvg from "../svg's/PrevSvg";
import WebSvg from "../svg's/WebSvg";
import GithubIcon from "../svg's/GithubIconSvg";

const Carousel = ({ projects }: { projects: projectProps[] }) => {
  const [index, setIndex] = useState<number>(1);
  const [buttonsOpen, setButtonsOpen] = useState<boolean>(false);

  const nextSlide = () => {
    let newIndex: number = index + 1 > projects.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  const prevSlide = () => {
    let newIndex: number = index - 1 < 0 ? projects.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    setButtonsOpen(false);
    if (event.deltaY > 0) {
      // Scrolling down
      nextSlide();
    } else if (event.deltaY < 0) {
      // Scrolling up
      prevSlide();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-center mt-[70px] pb-12 text-lg w-[600px]" onWheel={handleScroll}>
      <div className="flex justify-center border-2 bg-white w-[430px] h-[200px] opacity-25 transition-opacity duration-300" onClick={prevSlide}>
        <img src={`${projects[index - 1 < 0 ? projects.length - 1 : index - 1].image}.png`} className="h-full object-cover" />
      </div>

      <div className="flex z-10 gap-2">
        <div
          className="flex justify-center transition delay-150 duration-300 ease-in-out border-2 bg-white w-[580px] h-[270px] hover:scale-[1.05] transition-opacity duration-300"
          onClick={() => setButtonsOpen(!buttonsOpen)}
        >
          <img src={`${projects[index].image}.png`} className="h-full object-cover" />
        </div>
        {buttonsOpen && (
          <div className="flex flex-col justify-center flex justify-around items-center">
            <a className="flex text-white items-center" href={projects[index].liveLink}>
              <WebSvg /> Live App
            </a>
            <a className="flex text-white items-center" href={projects[index].githubLink}>
              <GithubIcon /> Repository
            </a>
          </div>
        )}
      </div>

      <div className="flex justify-center border-2 bg-white w-[430px] h-[200px]  opacity-25 transition-opacity duration-300" onClick={nextSlide}>
        <img src={`${projects[index + 1 > projects.length - 1 ? 0 : index + 1].image}.png`} className="h-full object-cover" />
      </div>
    </div>
  );
};

export default Carousel;