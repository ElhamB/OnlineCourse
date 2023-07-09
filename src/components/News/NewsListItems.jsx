import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import userImage from "@/assets/images/user.png";
import { Paginator } from "primereact/paginator";
import Link from "next/link";
import styles from "@/styles/News.module.css";

const NewsListItems = ({ newsList }) => {
  const router = useRouter();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  return (
    <>
      {newsList.slice(first, first + rows).map((newsItem) => (
        <div
          key={newsItem._id}
          className="flex mb-4"
          onClick={() =>
            router.push(`/news/${encodeURIComponent(newsItem._id)}`)
          }>
          <div className={styles.imgContainer + " ml-3"}>
            <Image
              alt="newsItem.title"
              src={newsItem.image}
              width={200}
              height={200}
            />
          </div>
          <div className={styles.newsCaption}>
            <Link href={"/category"} className={styles.categoryWrapper}>
              <span className={styles.categoryContainer}>
                <span data-text={newsItem.category}>{newsItem.category}</span>
              </span>
            </Link>
            <h3>{newsItem.title}</h3>
            <div className="flex align-items-center mb-2">
              <Image
                className="ml-1"
                alt={newsItem.title}
                src={userImage}
                width={25}
                height={25}
              />
              <span className="ml-2">{newsItem.text}</span>
              <i className="pi pi-clock ml-1"></i>
              <span className="ml-2">{newsItem.date}</span>
              <i className="pi pi-comment ml-1"></i>
              <span>12</span>
            </div>
            <p>{newsItem.description}</p>
          </div>
        </div>
      ))}
      <div className={styles.ltr + " border-top-1 border-gray-200"}>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={newsList.length}
          rowsPerPageOptions={[5, 10, 15]}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default NewsListItems;
