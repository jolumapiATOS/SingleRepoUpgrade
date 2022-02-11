import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <Head>
        <title> UPgrade | Daily   </title>
        <meta name='keywords' content='Tech Services' />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className="p-4">
      
        <h1 className={styles.title}> UPgrade | Frontend </h1>
        <p>
            The purpose of this app is for you to give daily feedback on all of your
            projects and daily advancements. Use it wisely and enjoy it. This app was created for you guys!
            
        </p>
        <h6>Loosely coupled architecture</h6>
        <ul>
          <strong>Powered by :</strong>
          <li>nextJS</li>
          <li>NodeJs</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>React</li>
        </ul>
        <div id="img-logo" >
          <Image src="/logoApp.svg" height={200} width={200} alt="image-for-everyone" ></Image>
        </div>
      </div>
    </>
  )
}
