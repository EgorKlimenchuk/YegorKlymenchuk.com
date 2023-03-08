import { useInView } from 'react-intersection-observer';

type PageLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  const [ref, inView] = useInView();
  return (
    <div
      className={`max-w-8xl m-auto px-16 lg:px-10 md:px-6 transition-opacity duration-500 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
      ref={ref}
    >
      {children}
    </div>
  );
};
