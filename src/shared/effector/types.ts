export enum TypesWorkEnum {
  FULL_TIME = 'Full Time',
  CONTRACT = 'Contract',
  OWN_PROJECTS = 'Own Projects',
}

export type ProjectType = {
  nameOfCompany?: string;
  nameOfProject?: string;
  shortDescription?: string;
  description?: string;
  img?: string;
  type?: TypesWorkEnum;
  allTech?: string[];
  link?: string;
  details?: string;
  myNotableContributions?: string;
  screenShots?: string[];
  problemsAndLessonsLearned?: string;
  key?: string;
};
