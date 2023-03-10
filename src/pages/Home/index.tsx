import { PageLayout } from 'shared/ui/PageLayout';
import { AboutMe } from 'widgets/AboutMe';
import { SomeOfMyWork } from 'widgets/SomeOfMyWork';
import { Header } from 'widgets/Header';
import { MySkills } from 'widgets/MySkills';
import { AppTitle } from 'entities/AppTitle';
import { SocialMedia } from 'entities/SocialMedia';
import { DesignLine } from 'entities/DesignLine';
import { TransitionLayout } from 'shared/ui/TransitionLayout';
import { Footer } from 'widgets/Footer';

export const Home = () => (
  <TransitionLayout>
    <PageLayout>
      <Header>
        <AppTitle />
        <div className="mt-24 flex justify-between items-center">
          <SocialMedia />
          <DesignLine />
        </div>
      </Header>
      <AboutMe />
      <MySkills />
      <SomeOfMyWork />
    </PageLayout>
    <Footer />
  </TransitionLayout>
);
