import Head from 'next/head'
import Banner from '../components/banner'
import styles from '../styles/Home.module.css'

export default function Home() {
  const onButtonBannerClick = () => {
    console.log("banner button clicked!");
  }

  return (
    <>
      <Head>
        <title>Coffee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner handleClick={onButtonBannerClick}/>
      </main>
    </>
  )
}
