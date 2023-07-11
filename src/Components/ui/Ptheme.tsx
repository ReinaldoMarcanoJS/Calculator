type Props = {
  ThemeDark: boolean;
  children: React.ReactNode;
};

export const Ptheme: React.FC<Props> = ({ ThemeDark, children }) => {
  return (
    <section className="flex justify-items-end">
      <h1
        className={
          ThemeDark
            ? "transition-all duration-1000 text-White px-3 text-sm-max tracking-letter-lg mr-5"
            : "transition-all duration-1000 text-Very-dark-grayish-yellow px-3 text-sm-max tracking-letter-lg mr-5"
        }>
        {children}
      </h1>
    </section>
  );
};
