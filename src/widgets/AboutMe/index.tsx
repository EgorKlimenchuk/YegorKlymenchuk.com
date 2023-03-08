import { useInView } from 'react-intersection-observer';

import { MyPhoto } from './ui/MyPhoto';
import { SelfDescriptions } from './ui/SelfDescriptions';

export const AboutMe = () => {
  const [ref, inView] = useInView();

  return (
    <div
      className={`flex flex-row max-h-176 mt-24 md:flex-col md:max-h-full md:mt-10 transition-opacity duration-500 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
      ref={ref}
    >
      <MyPhoto />
      <SelfDescriptions />
    </div>
  );
};
