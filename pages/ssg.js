import styles from '../styles/Home.module.css';
import Link from 'next/link';

function SSGPage(props) {
    console.log('rodando /ssg');
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
                    <Link href="/isr" prefßtch={false}>
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

export const getStaticProps = async () => {
    console.log('running getStaticProps from SSG');
    return {
        props: {
            message: 'It was generated on build phase',
        },
    };
};

export default SSGPage;