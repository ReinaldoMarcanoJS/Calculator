import React from "react";
import { Dispatch, SetStateAction } from "react";
type Props = {
  ThemeDark: boolean;
  children: React.ReactNode;
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  keyValue: string;
  simbol: boolean;
};

export const ButtonComponent: React.FC<Props> = ({
  ThemeDark,
  children,
  setValue,
  value,
  keyValue,
  simbol,
}) => {
  const AddNumber = () => {
    try {
      if (value == "ERROR") {
        setValue(keyValue);
      } else if (value.slice(-1) == "." && keyValue == ".") {
        setValue(value);
      } else {
        setValue(value + keyValue);
      }
    } catch (error) {
      setValue("ERROR");
    }
  };

  const addSimbol = () => {
    try {
      if (
        simbol &&
        value.slice(-1) !== " " &&
        value !== "" &&
        value !== "ERROR"
      ) {
        setValue(value + keyValue);
      }
    } catch (error) {
      setValue("ERROR");
    }
  };

  return (
    <button
      type="button"
      onClick={simbol ? addSimbol : AddNumber}
      className={
        ThemeDark
          ? "transition-colors duration-75 w-16 sm:w-20 md:w-20 lg:w-24 h-16 md:h-15  border-b-4  border-b-Dark-grayish-orange-key-shadow bg-Light-grayish-orange-key-background rounded-lg active:bg-White"
          : "transition-colors duration-75 w-16 sm:w-20 md:w-20 lg:w-24 h-16 md:h-15  border-b-4  border-b-Grayish-orange-key-shadow bg-Light-grayish-orange-key-background rounded-lg active:bg-White"
      }>
      {children}
    </button>
  );
};
