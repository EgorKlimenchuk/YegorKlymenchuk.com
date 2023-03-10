type PageLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="max-w-8xl m-auto px-16 lg:px-10 md:px-6">{children}</div>
);
