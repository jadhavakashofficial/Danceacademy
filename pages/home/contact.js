import Layout from '../../components/Layout';
import Head from 'next/head';
import ContactSection from '../../components/home/ContactSection';

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Sanchay Kathak | Contact</title>
      </Head>
      <ContactSection />
    </Layout>
  );
}

