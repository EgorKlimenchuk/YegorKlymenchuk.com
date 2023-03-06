import { ProjectType, TypesWorkEnum } from 'shared/effector/types';

export const getCurrentTypeWorkList = (
  allWorkExperienc: ProjectType[],
  currentTypeWork: TypesWorkEnum
) => allWorkExperienc.filter((work) => work.type === currentTypeWork);
