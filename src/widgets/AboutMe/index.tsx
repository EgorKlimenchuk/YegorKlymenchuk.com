import { MyPhoto } from './ui/MyPhoto';
import { SelfDescriptions } from './ui/SelfDescriptions';

export const AboutMe = () => (
  <div className="flex flex-row max-h-176 mt-24 md:flex-col md:max-h-full md:mt-10">
    <MyPhoto />
    <SelfDescriptions />
  </div>
);
