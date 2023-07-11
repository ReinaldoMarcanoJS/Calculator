import { Ptoggle } from "..";
import { Dispatch, SetStateAction } from "react";
import { Ptheme } from "..";
type Props = {
  ThemeDark: boolean;
  setThemeDark: Dispatch<SetStateAction<boolean>>;
};

export const SectionToggle: React.FC<Props> = ({ ThemeDark, setThemeDark }) => {
  return (
    <section className="flex items-center text-sm">
      <Ptheme ThemeDark={ThemeDark}>THEME</Ptheme>

      <section className="pb-5 ">
        <Ptoggle ThemeDark={ThemeDark}>1 2</Ptoggle>
        <label className="switch">
          <input
            type="checkbox"
            defaultChecked={ThemeDark}
            onChange={() => setThemeDark(!ThemeDark)}></input>
          <span
            className={
              ThemeDark ? "transition-all duration-1000 slider round" : "transition-all duration-1000 slider-checked round"
            }></span>
        </label>
      </section>
    </section>
  );
};
