import { useInView } from 'react-intersection-observer';

import { TechSkills } from 'shared/ui/TechSkills';

import { AllTechSkills, MySkillsDescription } from './lib/consts';

export const MySkills = () => {
  const [ref, inView] = useInView();

  return (
    <div
      className={`mt-48 flex flex-row items-center justify-between md:flex-col md:mt-32 transition-opacity duration-500 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
      ref={ref}
    >
      <div className="max-w-45% w-full md:max-w-full">
        <h2 className="mb-8 text-4xl font-medium">
          {MySkillsDescription.title}
        </h2>
        <div className="font-light leading-9">
          {MySkillsDescription.description}
        </div>
      </div>

      <TechSkills
        allTech={AllTechSkills}
        classname="flex flex-wrap text-end max-w-45% w-full mt-12 mr-1 md:max-w-full"
      />
    </div>
  );
};
