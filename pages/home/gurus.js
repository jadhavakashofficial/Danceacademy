import Layout from '../../components/Layout';
import Head from 'next/head';
import GurusSection from '../../components/home/GurusSection';

export default function GurusPage() {
  return (
    <Layout>
      <Head>
        <title>Sanchay Kathak | Gurus</title>
      </Head>
      <GurusSection />
    </Layout>
  );
}

