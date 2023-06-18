import React from 'react'
import { useRouter } from "next/router";
import Image from "next/image";
import imageNews from "@/assets/images/image-news.png";
import styles from "@/styles/News.module.css";
const NewsItemSide = ({ newsItem }) => {
    const router = useRouter();

  return (
    <div className='flex align-items-center' onClick={() => router.push(`/news/${encodeURIComponent(newsItem._id)}`)}>
      <div className={styles.imgCon +" ml-2"}>
      <Image alt="" src={newsItem.image} width={100} height={100}  />
      </div>
      <div className={styles.caption}>
        <h3>{newsItem.title}</h3>
        <i className='pi pi-clock ml-1 mt-1'></i><span className='ml-2'>{newsItem.date}</span>
        <i className='pi pi-comment ml-1 mt-1'></i><span>12</span>
      </div>
    </div>
  )
}

export default NewsItemSide
