interface IconProps extends React.DOMAttributes<HTMLDivElement> {
  SvgIcon: React.ElementType<React.ComponentPropsWithRef<'svg'>>;
  color?: string;
  className?: string;
  clickable?: boolean;
}

export const Icon = ({ SvgIcon, className, clickable = true }: IconProps) => (
  <div
    className={`${className || ''} ${
      clickable ? 'cursor-pointer' : 'cursor-default'
    }`}
  >
    <SvgIcon />
  </div>
);
