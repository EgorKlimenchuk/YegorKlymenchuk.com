import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from 'effector-react';
import { useInView } from 'react-intersection-observer';

import { TechSkills } from 'shared/ui/TechSkills';

import { $currentProject, currentProjectChanged } from './effector';

export const ProjectExperience = () => {
  const { name } = useParams();
  const [ref, inView] = useInView();

  const currentProject = useStore($currentProject);
  const [isShowAllTech, setIsShowAllTech] = useState<boolean>(false);

  const displayTech = useMemo(
    () =>
      isShowAllTech
        ? currentProject?.allTech
        : currentProject?.allTech?.slice(0, 6),
    [currentProject?.allTech, isShowAllTech]
  );

  const handleToggleDisplayTech = () => {
    setIsShowAllTech(!isShowAllTech);
  };

  useEffect(() => {
    currentProjectChanged(name);
  }, [name]);

  return currentProject ? (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="font-bold text-4xl leading-9 mt-20 mb-8  md:text-xl">
        {currentProject.nameOfCompany || currentProject.nameOfProject}
      </div>
      <p className="font-light leading-9 w-full max-w-70% xl:max-w-full">
        {currentProject.description}
      </p>
      <div className="py-20 flex justify-between md:flex-col-reverse md:py-12">
        <div>
          <div className="font-semibold mb-2 leading-9">Type</div>
          <div className="font-light leading-9 mb-8">{currentProject.type}</div>

          <div className="font-semibold mb-2">
            {"All the Tech I've Worked With"}
          </div>
          <TechSkills allTech={displayTech} classname="flex flex-col " list />
          <div
            className="underline font-light leading-9 mb-8 cursor-pointer"
            onClick={handleToggleDisplayTech}
          >
            {isShowAllTech ? 'Show Less' : 'Show More'}
          </div>

          <div className="font-semibold mb-2">View It</div>
          <a
            href={currentProject.link}
            target="_blank"
            rel="noreferrer"
            className="font-black underline cursor-pointer"
          >
            Link
          </a>
        </div>
        <img
          src={currentProject.img}
          className="max-h-custom-37 max-w-70% ml-auto mb-auto rounded shadow-custom2 md:max-w-full md:max-h-full md:mb-16"
        />
      </div>

      <div className="text-4xl font-bold mt-20 mb-8 md:text-xl">Details</div>
      <p className="font-light leading-9 max-w-70% xl:max-w-full">
        {currentProject.details}
      </p>

      <div className="text-right mt-20 ml-auto lg:text-left md:text-left max-w-70% xl:max-w-full">
        {currentProject.myNotableContributions && (
          <>
            <div className="text-4xl font-bold mb-8 md:text-xl">
              My Notable Contributions
            </div>
            <p className="font-light leading-9">
              {currentProject.myNotableContributions}
            </p>
          </>
        )}
      </div>

      <div className="flex justify-between mt-32 md:flex-col md:gap-8 md:mt-16">
        {currentProject.screenShots?.map((img) => (
          <img
            src={img}
            className="max-w-45% w-full m-auto rounded shadow-custom2 md:max-w-full"
            key={img}
          />
        ))}
      </div>

      <div className="text-center m-auto my-32 max-w-70% xl:max-w-full">
        {currentProject.problemsAndLessonsLearned && (
          <>
            <div className="text-4xl font-bold mb-8 md:text-xl">
              Problems and Lessons Learned
            </div>
            <p className="font-light leading-9">
              {currentProject.problemsAndLessonsLearned}
            </p>
          </>
        )}
      </div>
    </div>
  ) : null;
};
