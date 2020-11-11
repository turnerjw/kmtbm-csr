import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KMTBM - Rendering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Different Ways to Render Content on the Web
        </h1>

        <p className={styles.description}>- a 🍕Justin🍕 presentation</p>

        <div className={styles.grid}>
          <a href="/csr/1" className={styles.card}>
            <h3>Client Side Rendering &rarr;</h3>
            <p>Load the Javascript and then load the data</p>
          </a>

          <a href="/ssr" className={styles.card}>
            <h3>Server Side Rendering &rarr;</h3>
            <p>
              The server fetches the data, and then sends a hydrated page to the
              client
            </p>
          </a>

          <a href="ssg/1" className={styles.card}>
            <h3>Static Site Generation &rarr;</h3>
            <p>Data is fetched and pages are pre-made at build/deploy time</p>
          </a>

          <a href="/ssg-fb/1" className={styles.card}>
            <h3>Static Site Generation with Fallback &rarr;</h3>
            <p>
              Requested pages that were not made at build time will be made at
              run time. Future requests for that page will return the generated
              page.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
