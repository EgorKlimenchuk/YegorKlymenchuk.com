import { PageLayout } from 'shared/PageLayout';
import { AboutMe } from 'widgets/AboutMe';
import { WorkExperience } from 'widgets/WorkExperience';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { MySkills } from 'widgets/MySkills';

export const Home = () => (
  <>
    <PageLayout>
      <Header />
      <AboutMe />
      <MySkills />
      <WorkExperience />
    </PageLayout>
    <Footer />
  </>
);
