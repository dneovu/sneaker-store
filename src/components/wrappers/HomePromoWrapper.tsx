const HomePromoWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-r from-[#FDFBFB] to-[#EBEDEE]">
      {children}
    </div>
  );
};

export default HomePromoWrapper;
