import AboutMeSection from '@/components/sections/aboutme';
import HeroSection from './../components/sections/hero';
import Head from 'next/head';
import MyProjects from '@/components/sections/myprojects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <HeroSection />
      <AboutMeSection />
      <MyProjects />
      {/* <HowILearn /> */}
    </>
  )
}
