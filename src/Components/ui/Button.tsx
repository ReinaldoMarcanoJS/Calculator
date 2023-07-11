import React from "react";

type Props = {
  ThemeDark: boolean;
  children: React.ReactNode;
};

export const ButtonComponent: React.FC<Props> = ({ ThemeDark, children }) => {

  return (
    <button
      type="button"
      className={
        ThemeDark
          ? "transition-colors duration-75 w-16 sm:w-20 md:w-20 lg:w-24 h-16 md:h-15  border-b-4  border-b-Dark-grayish-orange-key-shadow bg-Light-grayish-orange-key-background rounded-lg active:bg-White"
          : "transition-colors duration-75 w-16 sm:w-20 md:w-20 lg:w-24 h-16 md:h-15  border-b-4  border-b-Grayish-orange-key-shadow bg-Light-grayish-orange-key-background rounded-lg active:bg-White"
      }>
      {children}
    </button>
  );
};
