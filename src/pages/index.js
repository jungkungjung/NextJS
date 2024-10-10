import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <Head>
      <title>หน้าแรก | Kullawat</title>
      <meta name="keywords" content="guitar,car"/>
    </Head>
    <div className={styles.container}>
        <h1 className={styles.title}>หน้าแรกของเว็บไซด์</h1>
        <Image src="/nybro1.png" width={400} height={400} alt="logo"/>    
        <p>Welcome to my NextJS </p>
        <Link href="/products" className={styles.btn}>ดูสินค้าทั้งหมด</Link>
    </div>      
    </>
  )
}
