import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Bio from '../components/Bio';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className={styles.Container}>
      <Head>
        
      </Head>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Projects />
        <Bio />
      </main>
      <Footer />
    </div>
  )
}

export default Home
