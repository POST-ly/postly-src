import Head from "next/head";
import Image from "next/image";
import styles from "./../../styles/Home.module.css";
import Header from "../components/Header";
import Main from "../container/Main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>POSTly</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Main />
      </main>
    </div>
  );
}
