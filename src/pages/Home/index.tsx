import { PageLayout } from 'shared/PageLayout';
import { AboutMe } from 'widgets/AboutMe';
import { Experience } from 'widgets/Experience';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { Skills } from 'widgets/Skills';

export const Home = () => (
  <>
    <PageLayout>
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
    </PageLayout>
    <Footer />
  </>
);
