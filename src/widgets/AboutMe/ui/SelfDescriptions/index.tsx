import { SelfDiscriptionsInfo } from './libs/consts';

export const SelfDescriptions = () => (
  <div className="max-w-50% ml-20 mt-12 text-right flex flex-col justify-end w-full md:max-w-full md:text-left md:ml-0">
    <h1 className="flex flex-col h-full justify-end mb-10 text-4xl md:text-2xl lg:text-3xl">
      <div className="font-light">{SelfDiscriptionsInfo.greetings.myName}</div>
      <div className="font-bold">{SelfDiscriptionsInfo.greetings.whoIam}</div>
      <div className="font-light">
        {SelfDiscriptionsInfo.greetings.whatILove}
      </div>
    </h1>

    <div className="leading-7 font-light mb-4">
      {SelfDiscriptionsInfo.shortAboutMyself}
    </div>

    <div className="leading-7 font-light">
      {SelfDiscriptionsInfo.shortAboutMyExperience}
    </div>
  </div>
);
