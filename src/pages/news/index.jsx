import React, { useEffect, useState } from "react";
import MainLayout from "@/components/common/MainLayout";
import styles from "@/styles/News.module.css";
import TopNewsItem from "@/components/News/TopNewsItem";
import SearchBox from "@/components/News/SearchBox";
import TitleSection from "@/components/News/TitleSection";
import Category from "@/components/News/Category";
import NewsItemSide from "@/components/News/NewsItemSide";
import NewsListItems from "@/components/News/NewsListItems";
import { getNewsListApi } from "@/core/services/api/news/news.api";

const News = () => {
  const [news, setNews] = useState([]);

  const getNewsList = async () => {
    const response = await getNewsListApi();
    setNews(response);
  };
  useEffect(() => {
    getNewsList();
  }, []);
  return (
    <>
      <div className={styles.blogContainer + " grid"}>
        <div className="container">
          <div className="grid">
            <div className="col-12 md:col-6 lg:col-3">
              {news.slice(-2).map((newsItem) => (
                <TopNewsItem key={newsItem._id} newsItem={newsItem} />
              ))}
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              {news.slice(-3, -2).map((newsItem) => (
                <TopNewsItem key={newsItem._id} newsItem={newsItem} />
              ))}
            </div>

            <div className="col-12 md:col-6 lg:col-3">
              {news.slice(-5, -3).map((newsItem) => (
                <TopNewsItem key={newsItem._id} newsItem={newsItem} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-6">
        <div className="grid">
          <div className="col-3">
            <SearchBox />
            <TitleSection title={"محبوب ترین ها"} />
            {news.slice(0, 4).map((newsItem) => (
              <NewsItemSide key={newsItem._id} newsItem={newsItem} />
            ))}
            <TitleSection title={"دسته بندی ها"} />
            <Category />
          </div>
          <div className="col-9">
            <TitleSection title={"جدید ترین ها"} />
            <NewsListItems newsList={news} />
          </div>
        </div>
      </div>
    </>
  );
};
News.getLayout = (page) => MainLayout(page, "اخبار و مقالات");

export default News;
