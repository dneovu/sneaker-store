interface MainButtonProps {
  text: string;
  isDisabled?: boolean;
  classname?: string;
  onClick?: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({
  text,
  classname,
  onClick,
  isDisabled = false,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`bg-primary disabled:bg-background w-fit cursor-pointer px-6 py-2.5 font-bold text-white transition-all select-none hover:shadow-lg hover:brightness-110 disabled:cursor-auto disabled:hover:shadow-none disabled:hover:brightness-100 ${classname}`}
    >
      {text}
    </button>
  );
};

export default MainButton;
