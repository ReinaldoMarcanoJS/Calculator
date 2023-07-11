type Props = {
  ThemeDark: boolean;
  children: React.ReactNode;
};

export const H1: React.FC<Props> = ({ ThemeDark, children }) => {
  return (
    <section>
      <h1
      className={
        ThemeDark
          ? "transition-colors duration-1000 title text-White font-bold text-size-h1 ml-2"
          : "transition-colors duration-1000 title text-Very-dark-grayish-yellow font-bold text-size-h1 ml-2"
      }>
      {children}
    </h1>
    </section>
  );
};
