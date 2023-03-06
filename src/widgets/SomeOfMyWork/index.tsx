import { useStore } from 'effector-react';

import { Title } from './ui/Title';
import { Tabs } from './ui/Tabs';
import { $currentActiveTypeWork } from './effector';
import { TypeWorkContent } from './ui/TypeWorkContent';

export const SomeOfMyWork = () => {
  const currentActiveTypeWork = useStore($currentActiveTypeWork);

  return (
    <div className="mt-48">
      <Title />
      <Tabs currentActiveTypeWork={currentActiveTypeWork} />
      <TypeWorkContent currentActiveTypeWork={currentActiveTypeWork} />
    </div>
  );
};
