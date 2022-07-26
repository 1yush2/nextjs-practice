import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Main App</title>
      </Head>
      <div className={styles.mainBody}>
        <h1 className={styles.titleColor}>My Practice NextJS App</h1>
        <Link href="chart-pages/chart">
          <a>Go to this page Bro</a>
        </Link>
      </div>
    </>
  );
}
