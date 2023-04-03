import { v4 as uuid } from 'uuid';

import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';

import { SocialMediaItem } from './types';

export const SocialMediaItems: SocialMediaItem[] = [
  {
    id: uuid(),
    to: 'https://www.linkedin.com/in/yegor-klymenchuk-4aa253230/',
    SvgIcon: LinkedInIcon,
  },
  // {
  //   id: uuid(),
  //   to: 'https://instagram.com/egor_klimenchuk?igshid=NDk5N2NlZjQ=',
  //   SvgIcon: InstagramIcon,
  // },
  {
    id: uuid(),
    to: 'https://twitter.com/dDmufM9ixUGZGnX',
    SvgIcon: TwitterIcon,
  },
];
