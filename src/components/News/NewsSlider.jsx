import React,{useState,useEffect} from "react";
import { Card } from "primereact/card";
import { Carousel } from 'primereact/carousel';
import Image from "next/image";
import Link from "next/link";
import imageNews from "@/assets/images/image-news.png";
import userImage from "@/assets/images/user.png";
import styles from "@/styles/News.module.css";

const NewsSlider = () => {
  const slides = [
    {
      id: "1",
      title: "عنوان مقاله",
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
    }
  ];
  /** */
  const [products, setProducts] = useState([]);
  const header = <Image src={imageNews} alt="" />;

  const responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];

const productTemplate = (newsItem) => {
  return (
    <Card
    className={styles.newsItem +" m-2"}
    title={newsItem.title}
    header={header}
    onClick={() => router.push(`/news/${encodeURIComponent(newsItem.id)}`)}>
    <div className="flex align-items-center">
      <Image className="ml-2" alt={newsItem.title} src={userImage} width={40} height={40} />
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
  );
};
useEffect(() => {
  // slides.getProducts().then((data) => setProducts(data.slice(0, 9)));
  setProducts(slides)
}, []);
  return (
    <div>
   <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
    </div>
  );
};

export default NewsSlider;
