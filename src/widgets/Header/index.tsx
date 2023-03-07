type HeaderProps = {
  children: JSX.Element | JSX.Element[];
};

export const Header = ({ children }: HeaderProps) => (
  <div className="mt-32">{children}</div>
);
