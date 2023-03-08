import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

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
          <div key={uuid()} className="mb-32">
            {work.img && (
              <Link to={`projects/${work.key || ''}`}>
                <img
                  src={work.img}
                  className="border-0.5 border-secondary-color cursor-pointer rounded"
                />
              </Link>
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
