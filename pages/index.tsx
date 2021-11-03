import type { NextPage } from 'next'
import fs from 'fs';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Bio from '../components/Bio';
import Contact from '../components/Contact'
import { getAllProjects } from '../lib/api';

export interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
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

export async function getStaticProps() {
  const projects = getAllProjects();

  return {
    props: {
      projects: projects
    }
  }
}
