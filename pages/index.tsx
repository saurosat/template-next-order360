import { Inter } from '@next/font/google';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ProductCard from '../components/cards/products/ProductCard';
import { mockProductCardProps } from '../components/cards/products/ProductCard.mocks';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Product listing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.titles}>Products</h1>

        <div className={styles.grid}>
          <ProductCard {...mockProductCardProps} />
          <ProductCard {...mockProductCardProps} />
          <ProductCard {...mockProductCardProps} />
          <ProductCard {...mockProductCardProps} />
          <ProductCard {...mockProductCardProps} />
          <ProductCard {...mockProductCardProps} />
          <ProductCard {...mockProductCardProps} />
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
export default Home;