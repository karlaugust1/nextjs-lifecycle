import styles from '../styles/Home.module.css';
import Link from 'next/link';

function SSRPage(props) {
    console.log('running /ssr');
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

export const getServerSideProps = async () => {
    console.log('running getServerSideProps');

    return {
        props: {
            message: 'It was created just for this request',
        },
    };
};

export default SSRPage;