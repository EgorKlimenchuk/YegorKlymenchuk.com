import { useState } from 'react';

import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow-down.svg';
import { activeTypeWorkChanged } from 'widgets/SomeOfMyWork/effector';
import { Icon } from 'shared/ui/Icon';
import { TypesWorkEnum } from 'shared/effector/types';

import { TABS } from './lib/consts';

type TabsProps = {
  currentActiveTypeWork: TypesWorkEnum;
};

export const Tabs = ({ currentActiveTypeWork }: TabsProps) => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  return (
    <>
      <div className="w-full flex items-center justify-around md:hidden">
        {TABS.map((tab) => (
          <div
            key={tab}
            className={`text-xl font-bold tracking-wider cursor-pointer px-7 py-1 rounded hover:bg-hover hover:shadow-custom ${
              tab === currentActiveTypeWork ? ' bg-button shadow-custom' : ''
            }`}
            onClick={() => activeTypeWorkChanged(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div
        className="hidden relative md:flex items-center max-w-max pl-4 pr-2 py-1 bg-button shadow-custom"
        onClick={toggleSelect}
      >
        <div className="text-xl font-bold tracking-wider cursor-pointer mr-2">
          {currentActiveTypeWork}
        </div>
        <Icon
          SvgIcon={ArrowDownIcon}
          className={`text-button w-7 transition-all delay-75 ${
            isSelectOpen ? 'rotate-180' : ''
          }`}
        />
        {isSelectOpen && (
          <div className="absolute top-12 left-0 shadow-custom rounded flex flex-col bg-white z-10 w-full">
            {TABS.map((tab) => (
              <div
                key={tab}
                className="relative px-4 py-1 text-lg font-light cursor-pointer hover:bg-hover"
                onClick={() => activeTypeWorkChanged(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
