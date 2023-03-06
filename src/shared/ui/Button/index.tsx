import cx from 'classnames';

import { Icon } from 'shared/ui/Icon';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow-right.svg';

import styles from './styles.module.scss';

export const Button = () => (
  <div
    className={cx(
      'relative flex items-center pl-4 pr-10 bg-button h-9 text-sm tracking-widest font-medium rounded max-w-max cursor-pointer',
      styles.button
    )}
  >
    <span>READ MY EXPERIENCE</span>
    <Icon SvgIcon={ArrowRightIcon} className="absolute" />
  </div>
);
