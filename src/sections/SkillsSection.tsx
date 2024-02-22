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
};

const skillsObj: skills = {
  html: { name: "HTML", rate: 8, svg: <HtmlSvg /> },
  css: { name: "CSS", rate: 8, svg: <CssSvg /> },
  js: { name: "JavaScript", rate: 8, svg: <JavascriptSvg /> },
  ts: { name: "TypeScript", rate: 7, svg: <TypescriptSvg /> },
  react: { name: "React.js", rate: 8, svg: <ReactSvg /> },
  git: { name: "Git", rate: 6, svg: <GitSvg /> },
  npm: { name: "npm", rate: 7, svg: <NpmSvg /> },
  jest: { name: "jest", rate: 6, svg: <JestSvg /> },
  jss: { name: "JSS", rate: 7, svg: <JssSvg /> },
  styledComponents: { name: "styledcomponents", rate: 8, svg: <StyledCompSvg /> },
  tailwind: { name: "tailwindcss", rate: 6, svg: <TailwindSvg /> },
};

const SkillsSection = () => {
  return (
    <>
      <div></div>
    </>
  );
};

export default SkillsSection;
