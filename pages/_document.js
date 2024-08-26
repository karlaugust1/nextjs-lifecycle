import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    console.log('running _document.js');
    return (
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}