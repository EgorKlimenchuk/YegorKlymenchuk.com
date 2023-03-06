import { Icon } from 'shared/ui/Icon';

import { SocialMediaItems } from './lib/consts';

export const SocialMedia = () => (
  <div className="flex items-center gap-5">
    {SocialMediaItems.map(({ SvgIcon, to, id }) => (
      <a href={to} key={id} target="_blank" rel="noreferrer">
        <Icon SvgIcon={SvgIcon} className="md:w-6" />
      </a>
    ))}
  </div>
);
