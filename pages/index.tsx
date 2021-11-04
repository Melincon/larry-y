import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Bio from '../components/Bio';
import { getAllProjects } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';

export interface HomeProps {
  projects: any[];
}

const Home: NextPage<HomeProps> = ({ projects }) => {
  return (
    <div className={styles.Container}>
      <Head>
        
      </Head>
      <Header />
      <main className={styles.Main}>
        <Hero />
        <Projects projects={projects} />
        <Bio />
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  let projects = getAllProjects(['slug','content','bgImage']);
  
  return {
    props: {
      projects: projects
    }
  }
}
