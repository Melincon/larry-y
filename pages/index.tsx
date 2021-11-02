import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Bio from '../components/Bio';
import Contact from '../components/Contact'

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
        <Contact />
      </main>
    </div>
  )
}

export default Home
