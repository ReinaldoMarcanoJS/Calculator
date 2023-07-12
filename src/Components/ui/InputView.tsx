type Props = {
  ThemeDark: boolean;
  value: string;
};

export const InputView: React.FC<Props> = ({ ThemeDark, value }) => {
  return (
    <div>
      <section className="">
        <input
        disabled
          value={value}
          className={
            ThemeDark
              ? "inputview transition-colors duration-1000 bg-blue-screen-background w-full text-size-input  text-White text-right rounded-lg px-5 py-3"
              : "inputview transition-colors duration-1000 bg-Very-light-gray-screen-background w-full text-size-input text-Very-dark-grayish-yellow text-right rounded-lg px-5 py-3"
          }
        />
      </section>
    </div>
  );
};
