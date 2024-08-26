import styles from '../styles/Home.module.css';
import Link from 'next/link';

function ISRPage(props) {
    console.log('running /isr');
    console.log('pageProps', props);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <p className={styles.description}>Data: {props.message}</p>

                <div className={styles.grid}>
                    <Link href="/" prefetch={false}>
                        <a className={styles.card}>
                            <h2>&larr; Home</h2>
                            <p>Back to home</p>
                        </a>
                    </Link>
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
                </div>
            </main>
        </div>
    );
}

export const getStaticProps = async () => {
    console.log('running getStaticProps from ISR');
    return {
        props: {
            message: `It was built at ${new Date().toTimeString()}`,
        },
        revalidate: 10,
    };
};

export default ISRPage;