import { AppTitle } from 'entities/AppTitle';
import { SocialMedia } from 'entities/SocialMedia';

import { FooterInfo } from './lib/consts';

export const Footer = () => (
  <div className="bg-gray-500 bg-opacity-5 py-32 px-10">
    <div className="text-4xl font-bold mb-8 md:text-2xl">
      {FooterInfo.title}
    </div>
    <div className="font-light w-full max-w-2xl leading-9 mb-20">
      {FooterInfo.description}
    </div>
    <a className="text-lg font-semibold underline cursor-pointer">
      {FooterInfo.email}
    </a>
    <div className="w-full flex items-center justify-between mt-20">
      <AppTitle />
      <SocialMedia />
    </div>
  </div>
);
