import { SomeOfMyWorkTitle } from './lib/consts';

export const Title = () => (
  <div className="max-w-45% mb-20 w-full md:max-w-full">
    <div className="text-4xl font-medium mb-8">{SomeOfMyWorkTitle.title}</div>
    <div className="font-light leading-9">{SomeOfMyWorkTitle.descriptions}</div>
  </div>
);
