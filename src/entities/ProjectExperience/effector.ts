import { createEvent, createStore, sample } from 'effector';

import { $allWorkExperience } from 'shared/effector/stores';
import { ProjectType } from 'shared/effector/types';

const $currentProject = createStore<ProjectType | undefined>({});

const currentProjectChanged = createEvent<string | undefined>();

sample({
  clock: currentProjectChanged,
  source: $allWorkExperience,
  fn: (allWorkExperience, projectName) =>
    allWorkExperience.find((work) => work.key === projectName),
  target: $currentProject,
});

export { $currentProject, currentProjectChanged };
