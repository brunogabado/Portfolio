import { ReactElement } from "react";
import StarRate from "../svg's/StarRate";

type skillsProps = {
  name: string;
  rate: number;
  svg: ReactElement;
};

const SkillCard = ({ name, rate, svg }: skillsProps) => {
  return (
    <>
      <div className="flex flex-col p-6 rounded-2xl border-2 w-[170px] h-[190px] text-center shadow-2xl justify-around transition delay-150 duration-300 ease-in-out hover:scale-125 hover:origin-center">
        <div className="flex justify-center">{svg}</div>
        <div className="font-anta text-lg">{name}</div>
        <div className=" flex gap-2 items-center justify-center font-anta">
          {rate}/10 <StarRate />
        </div>
      </div>
    </>
  );
};

export default SkillCard;
