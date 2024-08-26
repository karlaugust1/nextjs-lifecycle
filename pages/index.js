import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next.js lifecycle</title>
            </Head>

            <main className={styles.main}>

                <p className={styles.description}>
                    Clicking in each link bellows show how Next.js handles its <code>props</code> 
                     according to each type of approach
                </p>

                <div className={styles.grid}>
                    <Link href="/ssr" prefetch={false}>
                        <a className={styles.card}>
                            <h2>SSR &rarr;</h2>
                            <p>Server Side Rendering</p>
                        </a>
                    </Link>
                    <Link href="/ssg" prefetch={false}>
                        <a className={styles.card}>
                            <h2>SSG &rarr;</h2>
                            <p>Static Site Generation</p>
                        </a>
                    </Link>
                    <Link href="/isr" prefetch={false}>
                        <a className={styles.card}>
                            <h2>ISR &rarr;</h2>
                            <p>Incremental Static Regeneration</p>
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    );
}