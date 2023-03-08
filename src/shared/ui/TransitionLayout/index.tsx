import { useInView } from 'react-intersection-observer';

type PageLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export const TransitionLayout = ({ children }: PageLayoutProps) => {
  const [ref, inView] = useInView();

  return (
    <div
      className={`transition-opacity duration-500 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
      ref={ref}
    >
      {children}
    </div>
  );
};
