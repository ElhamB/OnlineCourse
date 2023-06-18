import React from "react";
import { useRouter } from "next/router";
import { Card } from "primereact/card";
import Image from "next/image";
import styles from "@/styles/News.module.css";
import Link from "next/link";

const NewsItem = ({ newsItem }) => {
  const router = useRouter();
  const header = <Image alt={newsItem.title} src={newsItem.image} width={250} height={140} />;
  return (
    <div className="col-3">
      <Card
        className={styles.newsItem}
        title={newsItem.title}
        header={header}
        onClick={() => router.push(`/news/${encodeURIComponent(newsItem._id)}`)}>
        <div className="flex align-items-center">
          <Image alt={newsItem.title} className="ml-2" src={newsItem.image} width={40} height={40} />
          <span className="font-bold">محمد رضا خلیلی</span><span className="ml-2 mr-2">-</span><span>1402/03/04</span>
        </div>
        <ul className={styles.tagList +" flex"}>
          <li>
            <Link href={'/news'}>برنامه نویسی</Link>
          </li>
          <li>
            <Link href={'/news'}>طراحی سایت</Link>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default NewsItem;
