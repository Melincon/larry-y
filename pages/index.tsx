import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        
      </Head>

      <Header />

      <main className={styles.main}>
        <Hero />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
