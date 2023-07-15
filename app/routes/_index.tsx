import type { V2_MetaFunction } from '@remix-run/node';
import { Header } from '~/components/Header';
import { Hero } from '~/components/Hero';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' }
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
