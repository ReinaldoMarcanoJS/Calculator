type Props = {
  ThemeDark: boolean;
  children: React.ReactNode;
};

export const Ptoggle: React.FC<Props> = ({ ThemeDark, children }) => {
  return (
    <h1
      className={
        ThemeDark
          ? "transition-all duration-1000 text-White pl-2 text-sm-max  tracking-letter-spacing"
          : "transition-all duration-1000 text-Very-dark-grayish-yellow pl-2 text-sm-max tracking-letter-spacing"
      }>
      {children}
    </h1>
  );
};
