import { ReactElement } from "react";
import HtmlSvg from "../svg's/HtmlSvg";
import CssSvg from "../svg's/CssSvg";
import JavascriptSvg from "../svg's/JavascriptSvg";
import TypescriptSvg from "../svg's/TypescriptSvg";
import ReactSvg from "../svg's/ReactSvg";
import GitSvg from "../svg's/GitSvg";
import NpmSvg from "../svg's/NpmSvg";
import JestSvg from "../svg's/JestSvg";
import JssSvg from "../svg's/JssSvg";
import StyledCompSvg from "../svg's/StyledCompSvg";
import TailwindSvg from "../svg's/tailwindSvg";
import SkillCard from "../components/SkillCard";
import Title from "../components/Title";
import ReactTestSvg from "../svg's/ReactTestSvg";

type skills = {
  html: { name: string; rate: number; svg: ReactElement };
  css: { name: string; rate: number; svg: ReactElement };
  js: { name: string; rate: number; svg: ReactElement };
  ts: { name: string; rate: number; svg: ReactElement };
  react: { name: string; rate: number; svg: ReactElement };
  git: { name: string; rate: number; svg: ReactElement };
  npm: { name: string; rate: number; svg: ReactElement };
  jss: { name: string; rate: number; svg: ReactElement };
  jest: { name: string; rate: number; svg: ReactElement };
  styledComponents: { name: string; rate: number; svg: ReactElement };
  tailwind: { name: string; rate: number; svg: ReactElement };
  reactTesting: { name: string; rate: number; svg: ReactElement };
};

const skillsObj: skills = {
  html: { name: "HTML", rate: 8, svg: <HtmlSvg /> },
  css: { name: "CSS", rate: 8, svg: <CssSvg /> },
  js: { name: "JavaScript", rate: 8, svg: <JavascriptSvg /> },
  ts: { name: "TypeScript", rate: 7, svg: <TypescriptSvg /> },
  react: { name: "React.js", rate: 8, svg: <ReactSvg /> },
  git: { name: "Git", rate: 6, svg: <GitSvg /> },
  npm: { name: "npm", rate: 7, svg: <NpmSvg /> },
  jest: { name: "Jest", rate: 6, svg: <JestSvg /> },
  jss: { name: "JSS", rate: 7, svg: <JssSvg /> },
  styledComponents: { name: "Styled-Components", rate: 8, svg: <StyledCompSvg /> },
  tailwind: { name: "Tailwind-css", rate: 6, svg: <TailwindSvg /> },
  reactTesting: { name: "React Testing Library", rate: 6, svg: <ReactTestSvg /> }
};

console.log(skillsObj);
console.log(Object.keys(skillsObj));

const SkillsSection = () => {
  return (
    <>
      <svg viewBox="0 0 1000 150" preserveAspectRatio="none" width="100%" height="100">
        <path fill="black" d="M0 70c166.5 29.5 333-59 500 0s333 59 500 0V0H0z" />
      </svg>
      <div className="flex flex-col my-9 justify-center">
        <Title color="black">Skills</Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 justify-items-center items-center gap-12 p-12 lg:px-[150px]">
          {Object.keys(skillsObj).map((skill: string, index) => (
            <SkillCard
              key={index}
              name={skillsObj[skill as keyof skills].name}
              rate={skillsObj[skill as keyof skills].rate}
              svg={skillsObj[skill as keyof skills].svg}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
