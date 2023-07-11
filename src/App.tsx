import { useState } from "react";
import "./App.css";
import {
  ButtonComponent,
  ButtonReset,
  ButtonResult,
  ButtonDelete,
  H1,
  DIVmain,
  SectionToggle,
  InputView,
  DivToggle,
  DivContent,
} from "./Components";
function App() {
  const [ThemeDark, setThemeDark] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <DivContent ThemeDark={ThemeDark}>
      <div className="xs:w-300px sm:w-400px md:w-450 ">
        <DivToggle>
          <H1 ThemeDark={ThemeDark}>calc</H1>
          <SectionToggle ThemeDark={ThemeDark} setThemeDark={setThemeDark} />
        </DivToggle>

        <InputView ThemeDark={ThemeDark} value={value} />

        <DIVmain ThemeDark={ThemeDark}>
          <section className="grid grid-cols-4 gap-4 w-full justify-items-center ">
            <ButtonComponent ThemeDark={ThemeDark}>7</ButtonComponent>
            <ButtonComponent ThemeDark={ThemeDark}>8</ButtonComponent>
            <ButtonComponent ThemeDark={ThemeDark}>9</ButtonComponent>
            <ButtonDelete ThemeDark={ThemeDark}>DEL</ButtonDelete>
            <ButtonComponent ThemeDark={ThemeDark}>4</ButtonComponent>
            <ButtonComponent ThemeDark={ThemeDark}>5</ButtonComponent>
            <ButtonComponent ThemeDark={ThemeDark}>6</ButtonComponent>
            <ButtonComponent ThemeDark={ThemeDark}>+</ButtonComponent>
            <ButtonComponent ThemeDark={ThemeDark}>1</ButtonComponent>
            <ButtonComponent ThemeDark={ThemeDark}>2</ButtonComponent>
            <ButtonComponent ThemeDark={ThemeDark}>3</ButtonComponent>
            <ButtonComponent ThemeDark={ThemeDark}>-</ButtonComponent>
            <ButtonComponent ThemeDark={ThemeDark}>.</ButtonComponent>
            <ButtonComponent ThemeDark={ThemeDark}>0</ButtonComponent>
            <ButtonComponent ThemeDark={ThemeDark}>/</ButtonComponent>
            <ButtonComponent ThemeDark={ThemeDark}>x</ButtonComponent>
          </section>

          <section className="w-full flex">
            <ButtonReset ThemeDark={ThemeDark} setValue={setValue}>
              RESET
            </ButtonReset>
            <ButtonResult ThemeDark={ThemeDark}>=</ButtonResult>
          </section>
        </DIVmain>
      </div>
    </DivContent>
  );
}

export default App;
