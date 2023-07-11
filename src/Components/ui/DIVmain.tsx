type Props = {
  ThemeDark: boolean;
  children: React.ReactNode;
};

export const DIVmain: React.FC<Props> = ({ ThemeDark, children }) => {
  return (
    <div
      className={
        ThemeDark
          ? " transition-colors duration-1000 bg-blue-toggle-background mt-5 rounded-lg p-6 pb-1 items-center flex flex-col text-size-number text-Very-dark-grayish-blue"
          : "transition-colors duration-1000 bg-Grayish-red-toggle-background-keypad-background mt-5 rounded-lg p-6 pb-1 items-center flex flex-col text-size-number text-Very-dark-grayish-blue"
      }>
      {children}
    </div>
  );
};
