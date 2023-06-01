import AboutMeSection from '@/components/sections/aboutme';
import HeroSection from './../components/sections/hero';
import Head from 'next/head';
import HowILearn from '@/components/sections/howilearn';
import SOMP from '@/components/sections/SOMP';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HeroSection />
      <SOMP />
      <AboutMeSection />
      <HowILearn />
    </>
  )
}
