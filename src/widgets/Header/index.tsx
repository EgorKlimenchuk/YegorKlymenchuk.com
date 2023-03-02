import { AppTitle } from 'entities/AppTitle';
import { DesignLine } from 'entities/DesignLine';
import { SocialMedia } from 'entities/SocialMedia';

export const Header = () => (
  <div className="mt-32">
    <AppTitle />
    <div className="mt-24 flex justify-between items-center">
      <SocialMedia />
      <DesignLine />
    </div>
  </div>
);
