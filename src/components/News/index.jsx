import React, { useEffect, useState } from "react";
import TitleSection from "../TitleSection";
import AllSectionLink from "../AllSectionLink";
import NewsItem from "./NewsItem";
import styles from "@/styles/News.module.css";
import { getTopNewsApi } from "@/core/services/api/news/news.api";

const index = () => {
  const [news, setNews] = useState([]);
  const getTopNews = async () => {
    const response = await getTopNewsApi();
    setNews(response)
  };
  useEffect(() => {
    getTopNews();
  }, []);
  return (
    <section className="container">
      <TitleSection title={"اخبار و مقالات"} />
      <div className="grid justify-content-center">
        {news?.slice(-4).map((newsItem) => (
          <NewsItem key={newsItem._id} newsItem={newsItem} />
        ))}
      </div>
      <AllSectionLink href={"/news"} title={"مشاهده موارد بیشتر"} />
    </section>
  );
};

export default index;


export async function getServerSideProps() {
  return {
    props: {
      news: [],
    },
  };
}

