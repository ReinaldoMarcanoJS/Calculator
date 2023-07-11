type Props = {
  ThemeDark: boolean;
  children: React.ReactNode;
};

export const ButtonDelete: React.FC<Props> = ({ ThemeDark, children }) => {
  return (
    <button
      type="button"
      className={
        ThemeDark
          ? "transition-colors duration-75 w-16 sm:w-20 md:w-20 lg:w-24 h-16 md:h-15 text-md border-b-4 border-b-dark-blue-key-shadow text-White bg-dark-blue-key-background rounded-lg active:brightness-125"
          : "transition-colors duration-75 w-16 sm:w-20 md:w-20 lg:w-24 h-16 md:h-15 text-md  border-b-4  border-Very-dark-cyan-key-shadow text-White bg-Dark-moderate-cyan-key-background rounded-lg active:bg-opacity-80"
      }>
      {children}
    </button>
  );
};
