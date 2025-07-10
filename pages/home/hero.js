import Layout from '../../components/Layout';
import Head from 'next/head';
import HeroSection from '../../components/home/HeroSection';

export default function HeroPage() {
  return (
    <Layout>
      <Head>
        <title>Sanchay Kathak | Hero Section</title>
      </Head>
      <HeroSection />
    </Layout>
  );
}

