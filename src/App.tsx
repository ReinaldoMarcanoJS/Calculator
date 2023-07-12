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
  Container,
} from "./Components";
function App() {
  const [ThemeDark, setThemeDark] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Container ThemeDark={ThemeDark}>
      <div className="xs:w-300px sm:w-400px md:w-450 ">
        <DivToggle>
          <H1 ThemeDark={ThemeDark}>calc</H1>
          <SectionToggle ThemeDark={ThemeDark} setThemeDark={setThemeDark} />
        </DivToggle>

        <InputView ThemeDark={ThemeDark} value={value} />

        <DIVmain ThemeDark={ThemeDark}>
          <section className="grid grid-cols-4 gap-4 w-full justify-items-center ">
            <ButtonComponent
              keyValue={"7"}
              simbol={false}
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              7
            </ButtonComponent>
            <ButtonComponent
              keyValue={"8"}
              simbol={false}
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              8
            </ButtonComponent>
            <ButtonComponent
              keyValue={"9"}
              simbol={false}
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              9
            </ButtonComponent>

            <ButtonDelete
              setValue={setValue}
              value={value}
              ThemeDark={ThemeDark}>
              DEL
            </ButtonDelete>

            <ButtonComponent
              keyValue={"4"}
              simbol={false}
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              4
            </ButtonComponent>
            <ButtonComponent
              keyValue={"5"}
              simbol={false}
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              5
            </ButtonComponent>
            <ButtonComponent
              keyValue={"6"}
              simbol={false}
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              6
            </ButtonComponent>

            <ButtonComponent
              keyValue={" + "}
              simbol={true}
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              +
            </ButtonComponent>

            <ButtonComponent
              keyValue={"1"}
              simbol={false}
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              1
            </ButtonComponent>
            <ButtonComponent
              keyValue={"2"}
              simbol={false}
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              2
            </ButtonComponent>
            <ButtonComponent
              keyValue={"3"}
              simbol={false}
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              3
            </ButtonComponent>

            <ButtonComponent
              keyValue={" - "}
              simbol={true}
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              -
            </ButtonComponent>
            <ButtonComponent
              keyValue={"."}
              simbol={false}
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              .
            </ButtonComponent>

            <ButtonComponent
              keyValue={"0"}
              simbol={false}
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              0
            </ButtonComponent>

            <ButtonComponent
              keyValue={" / "}
              simbol={true}
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              /
            </ButtonComponent>
            <ButtonComponent
              keyValue={" * "}
              simbol={true}
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              x
            </ButtonComponent>
          </section>

          <section className="w-full flex">
            <ButtonReset ThemeDark={ThemeDark} setValue={setValue}>
              RESET
            </ButtonReset>
            <ButtonResult
              value={value}
              setValue={setValue}
              ThemeDark={ThemeDark}>
              =
            </ButtonResult>
          </section>
        </DIVmain>
      </div>
    </Container>
  );
}

export default App;
