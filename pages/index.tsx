import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";
import Navbar from '../components/Navbar'
import Mainbody from '../components/Mainbody'

const Home: any | NextPage = () => {
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Bashorun Dolapo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Mainbody/>
    </div>
  );
};

export default Home;