import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import imageNews from "@/assets/images/image-news.png";
import styles from "@/styles/News.module.css";


const TopNewsItem = ({ newsItem }) => {
    const router = useRouter();
  return (
    <figure className={styles.topNewsItem}  onClick={() => router.push(`/news/${encodeURIComponent(newsItem._id)}`)}>
    <div className={styles.imageContainer}>
      <Link href={`/news/${encodeURIComponent(newsItem._id)}`}>
        <Image alt="" src={newsItem.image} width={200} height={200}  />
      </Link>
    </div>
    <figcaption>
      <h3>
          {newsItem.title}
      </h3>
      <div className={styles.dateComment + " flex"}>
        <i className='pi pi-clock ml-1'></i><span className='ml-3'>{newsItem.date}</span>
        <i className='pi pi-comment ml-1'></i><span>12</span>
      </div>
    </figcaption>
  </figure>
   
  )
}

export default TopNewsItem
