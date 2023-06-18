import React, { useEffect, useState } from "react";
import MainLayout from "@/components/common/MainLayout";
import styles from "@/styles/News.module.css";
import TopNewsItem from "@/components/News/TopNewsItem";
import SearchBox from "@/components/News/SearchBox";
import TitleSection from "@/components/News/TitleSection";
import Category from "@/components/News/Category";
import NewsItemSide from "@/components/News/NewsItemSide";
import NewsListItems from "@/components/News/NewsListItems";
import { getNewsListApi,getTopNewsApi } from "@/core/services/api/news/news.api";

const News = () => {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState([]);

  const getNewsList = async () => {
    const response = await getNewsListApi();
    console.log('res',response)
    setNews(response)
  };
  const getTopNews = async () => {
    const response = await getTopNewsApi();
    setTopNews(response)
  };
  useEffect(() => {
    getNewsList();
    getTopNews();
  }, []);
  return (
    <>
      <div className={styles.blogContainer + " grid"}>
        <div className="container">
          <div className="grid">
            {topNews.slice(0, 5).map((newsItem) => (
              <div className="col-3">
                <TopNewsItem key={newsItem.id} newsItem={newsItem} />
              </div>
            ))}

            {/* <div className="col-6"></div>
          <div className="col-3"></div> */}
          </div>
        </div>
      </div>
      <div className="container mb-6">
        <div className="grid">
          <div className="col-3">
            <SearchBox />
            <TitleSection title={"محبوب ترین ها"} />
            {news.slice(0, 4).map((newsItem) => (
                <NewsItemSide key={newsItem.id} newsItem={newsItem} />
            ))}
            <TitleSection title={"دسته بندی ها"} />
            <Category />
          </div>
          <div className="col-9">
          <TitleSection title={"جدید ترین ها"} />
            <NewsListItems newsList={news}/>     
          </div>
        </div>
      </div>
    </>
  );
};
News.getLayout = (page) => MainLayout(page, "اخبار و مقالات");

export default News;
