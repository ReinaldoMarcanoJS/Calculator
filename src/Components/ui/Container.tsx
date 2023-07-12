type Props = {
  children: React.ReactNode;
  ThemeDark: boolean;
};

export const Container: React.FC<Props> = ({ children, ThemeDark }) => {
  return (
    <div
      className={
        ThemeDark
          ? "transition-colors duration-1000 w-screen h-screen bg-blue-main-background p-5 xs:pt-1 flex justify-center items-center "
          : "transition-colors duration-1000 w-screen h-screen bg-Light-gray-main-background p-5 xs:pt-1 flex justify-center items-center "
      }>
      {children}
    </div>
  );
};
