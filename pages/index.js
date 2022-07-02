import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter Cloe</title>
        <meta name="description" content="We are" />
        <link rel="icon" href="/favico.ico" />
      </Head>

      <header>
        <div className="container">
          <div className="pis__top-nav">
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
          </div>
        </div>
      </header>
      <main></main>

      <foter></foter>
    </div>
  );
}
