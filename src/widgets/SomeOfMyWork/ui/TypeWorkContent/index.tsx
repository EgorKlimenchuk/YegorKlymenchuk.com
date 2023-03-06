import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';

import { $allWorkExperience } from 'shared/effector/stores';
import { TypesWorkEnum } from 'shared/effector/types';
import { Button } from 'shared/ui/Button';

import { getCurrentTypeWorkList } from './lib/helpers';

type TypeWorkContentProps = {
  currentActiveTypeWork: TypesWorkEnum;
};

export const TypeWorkContent = ({
  currentActiveTypeWork,
}: TypeWorkContentProps) => {
  const allWorkExperience = useStore($allWorkExperience);

  return (
    <div className="mt-10">
      {getCurrentTypeWorkList(allWorkExperience, currentActiveTypeWork).map(
        (work) => (
          <div key={work.link} className="mb-32">
            {work.img && (
              <img
                src={work.img}
                className=" border-0.5 border-secondary-color cursor-pointer rounded"
              />
            )}
            <div className="mt-8 font-bold text-xl">
              {work.nameOfCompany || work.nameOfProject}
            </div>
            <div className="leading-8 mt-4 mb-6 font-light">
              {work.shortDescription}
            </div>
            {work.description && (
              <Link to={`projects/${work.key || ''}`}>
                <Button />
              </Link>
            )}
          </div>
        )
      )}
    </div>
  );
};
