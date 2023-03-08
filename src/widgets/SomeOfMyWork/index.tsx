import { useStore } from 'effector-react';
import { useInView } from 'react-intersection-observer';

import { Title } from './ui/Title';
import { Tabs } from './ui/Tabs';
import { $currentActiveTypeWork } from './effector';
import { TypeWorkContent } from './ui/TypeWorkContent';

export const SomeOfMyWork = () => {
  const currentActiveTypeWork = useStore($currentActiveTypeWork);

  const [ref, inView] = useInView();

  return (
    <div
      className={`mt-48 md:mt-32 transition-opacity duration-500 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
      ref={ref}
    >
      <Title />
      <Tabs currentActiveTypeWork={currentActiveTypeWork} />
      <TypeWorkContent currentActiveTypeWork={currentActiveTypeWork} />
    </div>
  );
};
