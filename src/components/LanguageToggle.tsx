import { useState } from "react";
import EnglishFlag from "../svg's/EnglishFlag";
import PortugueseFlag from "../svg's/PortugueseFlag";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { changeToEnglish, changeToPortuguese } from "../state/language/language";

const LanguageToggle = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
    language === "english" ? dispatch(changeToPortuguese()) : dispatch(changeToEnglish());
  };

  return (
    <>
      <div className="border-2 self-end rounded-3xl">
        <label className=" self-end themeSwitcherTwo shadow-card relative inline-flex cursor-pointer rounded-full select-none items-center justify-center bg-white">
          <input type="checkbox" className="sr-only" checked={isChecked} onChange={handleToggleChange} />
          <span className={`flex items-center rounded-full p-2 text-sm font-medium ${!isChecked ? "text-primary bg-[#dfe5f7]" : "text-body-color"}`}>
            <PortugueseFlag />
          </span>

          <span
            className={`flex items-center space-x-[6px] rounded-full p-2 text-sm font-medium ${
              isChecked ? "text-primary bg-[#dfe5f7]" : "text-body-color"
            }`}
          >
            <EnglishFlag />
          </span>
        </label>
      </div>
    </>
  );
};

export default LanguageToggle;
