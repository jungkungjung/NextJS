import React from 'react'
import styles from "@/styles/About.module.css"
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

export default function about() {
  return (
    <>
    <Head>
      <title>เกี่ยวกับเรา | Kullawat</title>
      <meta name="keywords" content="guitar,car"/>
    </Head>
    <div className={styles.container}>
        <h1 className={styles.title}>เกี่ยวกับเรา</h1>
        <Image src="/stade1.png" width={400} height={400} alt="logo"/> 
        <Link href="/products" className={styles.btn}>ดูสินค้าทั้งหมด</Link>       
    </div> 
    </>     
  )
}
