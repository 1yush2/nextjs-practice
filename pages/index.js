import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import { getSortedChartsData } from "../utils/charts";

export async function getStaticProps() {
  const allChartsData = getSortedChartsData();
  return {
    props: {
      allChartsData,
    },
  };
}


export default function Home({ allChartsData }) {
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

      <section>
        <h2>Blog</h2>
        <ul>
          {allChartsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
