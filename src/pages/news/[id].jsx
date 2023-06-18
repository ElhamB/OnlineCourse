import { useRouter } from "next/router";
import MainLayout from "@/components/common/MainLayout";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BreadCrumb } from "primereact/breadcrumb";
import imageNews from "@/assets/images/image-news.png";
import SearchBox from "@/components/News/SearchBox";
import TitleSection from "@/components/News/TitleSection";
import Category from "@/components/News/Category";
import NewsItemSide from "@/components/News/NewsItemSide";
import NewsSlider from "@/components/News/NewsSlider";
import Comment from "@/components/Comment";
import imageUser from "@/assets/images/user.png";
import Description from "@/components/Description/Description";
import styles from "@/styles/News.module.css";
import CommentForm from "@/components/Comment/CommentForm";

const NewsDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const items = [
    {
      label: "صفحه ی اصلی",
      command: () => {
        router.push("/");
      },
    },
    { label: "تکنولوژی",
    command: () => {
      router.push("/news");
    }, },
  ];

  const comments = [
    {
      id: "1",
      name: "علی رضایی",
      comment: "بسیار عالی و مفید بود",
      date: "25 دی 1401",
      img: imageUser,
    },
    {
      id: "2",
      name: "محمد احمدی",
      comment: "بسیار عالی و مفید بود",
      date: "15 اردیبهشت 1401",
      img: imageUser,
    },
  ];
  const news = [
    {
      id: "1",
      title: "222عنوان مقاله",
      description:
        "توضیحات مقاله وضیحات مقاله  وضیحات مقاله توضیحات مقاله  توضیحات مقاله وضیحات مقاله ",
      date: "10 اردیبهشت 1401",
    },
    {
      id: "2",
      title: "2عنوان مقاله",
      description:
        "توضیحات مقاله وضیحات مقاله  وضیحات مقاله توضیحات مقاله  توضیحات مقاله وضیحات مقاله ",
      date: "25 دی 1401",
    },
    {
      id: "3",
      title: "3عنوان مقاله",
      description:
        "توضیحات مقاله وضیحات مقاله  وضیحات مقاله توضیحات مقاله  توضیحات مقاله وضیحات مقاله ",
      date: "18 اسفند 1401",
    },
    {
      id: "4",
      title: "4عنوان مقاله",
      description:
        "توضیحات مقاله وضیحات مقاله  وضیحات مقاله توضیحات مقاله  توضیحات مقاله وضیحات مقاله ",
      date: "12 فروردین 1402",
    },
    {
      id: "5",
      title: "4عنوان مقاله",
      description:
        "توضیحات مقاله وضیحات مقاله  وضیحات مقاله توضیحات مقاله  توضیحات مقاله وضیحات مقاله ",
      date: "12 فروردین 1402",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="grid mb-5">
          <div className={styles.topdetailsNews + " col-9"}>
            <Link href={"/category"} className={styles.categoryWrapper}>
              <span className={styles.categoryContainer}>
                <span data-text="وب">وب</span>
              </span>
            </Link>
            <h1>اشنایی با کتابخانه ی react</h1>
            <div
              className={
                styles.topCaption + " grid mb-2 border-bottom-1 border-gray-200"
              }>
              <div className="col-8 flex align-items-center">
                <Image
                  className="ml-1"
                  alt={"b"}
                  src={imageUser}
                  width={30}
                  height={30}
                />
                <span className="ml-3">محمد رضا خلیلی</span>
                <i className="pi pi-clock ml-1"></i>
                <span className="ml-3">25 اردیبهشت 1401</span>
                <i className="pi pi-comment ml-1"></i>
                <span>12</span>
              </div>
              <div className="col-4">
                <div
                  className={
                    styles.socialNetworks + " flex justify-content-end"
                  }>
                  <Link href={"https://linkedin.com/bahracademic"} title="">
                    <i className="pi pi-link"></i>
                  </Link>
                  <Link
                    href={"https://twitter.com/bahracademic"}
                    target="_blank">
                    <i className="pi pi-twitter"></i>
                  </Link>
                  <Link
                    href={"https://api.whatsapp.com/send?phone=989351520241"}
                    target="_blank"
                    title="">
                    <i className="pi pi-send"></i>
                  </Link>
                  <Link
                    href={"https://facebook.com/bahracademic"}
                    target="_blank"
                    title="">
                    <i className="pi pi-facebook"></i>
                  </Link>
                  <Link
                    href={"https://linkedin.com/bahracademic"}
                    target="_blank"
                    title="">
                    <i className="pi pi-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
            <BreadCrumb model={items} className="mt-2 mb-3" />
            <div className="flex justify-content-center mt-2 mb-3">
              <Image alt={"b"} src={imageNews} />
            </div>

            <Description title={"توضیحات مقاله"} desc={"توضیحات مقاله"} />
            <TitleSection
              className={styles.subtitleNews}
              title={"مقاله های مرتبط"}
            />
            <NewsSlider />
            <Comment comments={comments} />
            <CommentForm/>
          </div>
          <div className="col-3">
            <SearchBox />
            <TitleSection title={"محبوب ترین ها"} />
            {news.slice(0, 4).map((newsItem) => (
              <NewsItemSide key={newsItem.id} newsItem={newsItem} />
            ))}
            <TitleSection title={"جدید ترین ها"} />
            {news.slice(0, 4).map((newsItem) => (
              <NewsItemSide key={newsItem.id} newsItem={newsItem} />
            ))}
            <TitleSection title={"دسته بندی ها"} />
            <Category />
          </div>
        </div>
      </div>
    </>
  );
};
NewsDetails.getLayout = (page) => MainLayout(page, "جزییات خبر");

export default NewsDetails;
