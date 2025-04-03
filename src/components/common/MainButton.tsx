interface MainButtonProps {
  text: string;
  classname?: string;
}

const MainButton: React.FC<MainButtonProps> = ({ text, classname }) => {
  return (
    <button
      className={`bg-primary w-fit cursor-pointer px-6 py-2.5 font-bold text-white transition-all hover:shadow-lg hover:brightness-110 ${classname}`}
    >
      {text}
    </button>
  );
};

export default MainButton;
