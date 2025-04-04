const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-opensans mx-auto mb-8 max-w-[1440px]">{children}</div>
  );
};

export default PageWrapper;
