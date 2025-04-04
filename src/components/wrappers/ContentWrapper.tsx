interface ContentWrapperProps {
  children: React.ReactNode;
  isMain?: boolean;
  className?: string;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  className,
  isMain = true,
}) => {
  const styles = `px-8 py-4 md:px-16 md:py-8 ${className}`;

  return isMain ? (
    <main className={styles}>{children}</main>
  ) : (
    <div className={styles}>{children}</div>
  );
};

export default ContentWrapper;
