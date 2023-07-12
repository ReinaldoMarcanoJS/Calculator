import {Dispatch, SetStateAction} from "react"

type Props = {
  ThemeDark: boolean;
  children: React.ReactNode;
  setValue: Dispatch<SetStateAction<string>>
  value: string;
};

export const ButtonResult: React.FC<Props> = ({ ThemeDark, children, setValue, value }) => {

  const calc = () => {
   try {
    if(value.length >= 5 && value.slice(-1) !== " "){
      setValue(eval(value).toString())
    }
   } catch (error) {
    setValue("ERROR")
   }
  }

  return (
    <section className="w-full flex py-3">
      <button
        type="button"
        onClick={calc}
        className={
          ThemeDark
            ? "transition-colors duration-75 w-full h-16 md:h-15 border-b-4 border-b-Dark-red-key-shadow bg-Red-key-background-toggle rounded-lg text-White active:brightness-150"
            : "transition-colors duration-75 w-full h-16 md:h-15 border-b-4 border-Dark-orange-key-shadow bg-Orange-key-background-toggle rounded-lg text-White active:bg-opacity-80"
        }>
        {children}
      </button>
    </section>
  );
};
