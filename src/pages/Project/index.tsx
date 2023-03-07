import { useEffect } from 'react';

import { AppTitle } from 'entities/AppTitle';
import { ProjectExperience } from 'entities/ProjectExperience';
import { SocialMedia } from 'entities/SocialMedia';
import { PageLayout } from 'shared/ui/PageLayout';
import { Header } from 'widgets/Header';

export const ProjectInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <Header>
        <div className="flex items-center justify-between">
          <AppTitle />
          <SocialMedia />
        </div>
      </Header>
      <ProjectExperience />
    </PageLayout>
  );
};
