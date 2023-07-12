import { Dispatch, SetStateAction } from "react";
type Props = {
  ThemeDark: boolean;
  children: React.ReactNode;
  setValue: Dispatch<SetStateAction<string>>;
};

export const ButtonReset: React.FC<Props> = ({
  ThemeDark,
  children,
  setValue,
}) => {
  return (
    <section className="w-full flex py-3 mr-4">
      <button
        type="button"
        onClick={() => setValue("")}
        className={
          ThemeDark
            ? "transition-colors duration-75 w-full h-16 md:h-15 border-b-4 border-b-dark-blue-key-shadow bg-dark-blue-key-background rounded-lg text-White text-md active:brightness-125"
            : "transition-colors duration-75 w-full h-16 md:h-15 border-b-4 border-Very-dark-cyan-key-shadow bg-Dark-moderate-cyan-key-background rounded-lg text-White text-md active:bg-opacity-80"
        }>
        {children}
      </button>
    </section>
  );
};
