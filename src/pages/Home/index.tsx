import { PageLayout } from 'shared/ui/PageLayout';
import { AboutMe } from 'widgets/AboutMe';
import { SomeOfMyWork } from 'widgets/SomeOfMyWork';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { MySkills } from 'widgets/MySkills';

export const Home = () => (
  <>
    <PageLayout>
      <Header />
      <AboutMe />
      <MySkills />
      <SomeOfMyWork />
    </PageLayout>
    <Footer />
  </>
);
