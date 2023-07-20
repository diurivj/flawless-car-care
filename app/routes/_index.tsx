import type { V2_MetaFunction } from '@remix-run/node';
import { Faqs } from '~/components/Faqs';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { Hero } from '~/components/Hero';
import { Pricing } from '~/components/Pricing';
import { PrimaryFeatures } from '~/components/PrimaryFeatures';
import { SecondaryFeatures } from '~/components/SecondaryFeatures';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'FlawlessCar.care' },
    { name: 'description', content: 'Cuidamos tu auto como si fuera nuestro.' }
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
