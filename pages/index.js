import SOMP from '@/components/sections/SOMP';
import HeroSection from './../components/sections/hero';
import Head from 'next/head';
import SOMT from '@/components/sections/SOMT';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HeroSection />
      <SOMP/>
      <SOMT/>
    </>
  )
}