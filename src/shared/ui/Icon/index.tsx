interface IconProps extends React.DOMAttributes<HTMLDivElement> {
  SvgIcon: React.ElementType<React.ComponentPropsWithRef<'svg'>>;
  color?: string;
  className?: string;
  clickable?: boolean;
}

export const Icon = ({ SvgIcon, className, clickable = true }: IconProps) => (
  <SvgIcon
    className={`${className || ''} ${
      clickable ? 'cursor-pointer' : 'cursor-default'
    }`}
  />
);
