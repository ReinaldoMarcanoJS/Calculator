type Props = {
  children: React.ReactNode
};

export const DivToggle: React.FC<Props> = ({ children}) => {
  return (
    <div className="py-3 ">
          <div className="w-100% flex justify-between">
            {children}
          </div>
        </div>
  );
};
