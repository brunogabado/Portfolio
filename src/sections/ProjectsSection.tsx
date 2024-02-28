import Carousel from "../components/Carousel";
import Title from "../components/Title";

export type projectProps = {
  name: string;
  liveLink: string;
  githubLink: string;
  image: number;
};

const projects: projectProps[] = [
  { name: "Movies App Demo", liveLink: "https://moviesapp-demo.vercel.app/", githubLink: "https://github.com/brunogabado/MoviesApp", image: 1 },
  {
    name: "Events Calendar",
    liveLink: "https://events-calendar-theta.vercel.app/",
    githubLink: "https://github.com/brunogabado/ReactCalendar",
    image: 2,
  },
  { name: "Weather Wise", liveLink: "https://weather-wise-six.vercel.app/", githubLink: "https://github.com/brunogabado/WeatherApp", image: 3 },
  {
    name: "Apple Calculator Clone",
    liveLink: "https://apple-clone-calculator.vercel.app/",
    githubLink: "https://github.com/brunogabado/Calculadora",
    image: 4,
  },
];

const ProjectsSection = () => {
  return (
    <>
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none" width="100%" height="100">
        <path fill="black" d="M0 70c166.5-29.5 333 59 500 0s333-59 500 0V100H0z" />
      </svg>
      <div className="flex flex-col items-center bg-black pt-12">
        <Title color="white">Projects</Title>
        <Carousel projects={projects} />
      </div>
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none" width="100%" height="100" style={{ transform: "rotate(180deg)" }}>
        <path fill="black" d="M0 70c166.5-29.5 333 59 500 0s333-59 500 0V100H0z" />
      </svg>
    </>
  );
};

export default ProjectsSection;
