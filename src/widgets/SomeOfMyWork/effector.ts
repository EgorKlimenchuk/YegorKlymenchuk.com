import { createEvent, createStore, forward } from 'effector';

import { TypesWorkEnum } from 'shared/effector/types';

const $currentActiveTypeWork = createStore<TypesWorkEnum>(
  TypesWorkEnum.FULL_TIME
);

const activeTypeWorkChanged = createEvent<TypesWorkEnum>();

forward({ from: activeTypeWorkChanged, to: $currentActiveTypeWork });

export { $currentActiveTypeWork, activeTypeWorkChanged };
