import Head from 'next/head';
import Link from 'next/link';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export const siteTitle = 'Next.js Sample Website';

const ErrorLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build websites using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
    </div>
  )
}

export default ErrorLayout;
