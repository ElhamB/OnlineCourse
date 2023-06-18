import React from "react";
import Link from "next/link";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { getAllCoursesApi } from "@/core/services/api/courses/courses.api";
import iconCalendar from "@/assets/images/icon-calendar.png";
import iconPhone from "@/assets/images/icon-phone.png";
import iconMap from "@/assets/images/icon-map.png";
import logo from "@/assets/images/logo.png";
import styles from "@/styles/Footer.module.css";
import imageNews from "@/assets/images/image-news.png";

const Footer = () => {
  // const getAllCourses = async () => {
  //   const response = await getAllCoursesApi();
  //   console.log(response?.result);
  //   return response?.result;
  // };
  // const courses = getAllCourses();
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className="grid flex-wrap p-3 justify-content-center align-items-center">
            <div className="col-4">
              <div className="flex">
                <div className="ml-4">
                  <Image alt="" src={iconMap} width={64} height={64} />
                </div>
                <div className="mt-2">
                  ساری، جاده دریا، بعد از دنیای آرزو،
                  <br /> آموزشگاه سپهر
                </div>
              </div>
            </div>
            <div
              className={
                styles.borderRighLeft + " col-4 flex  justify-content-center"
              }>
              <div className="flex">
                <div className="ml-4">
                  <Image alt="" src={iconPhone} width={64} height={64} />
                </div>
                <div className="mt-2">
                  <Link href={"mailto:bahracademic@gmail.com"}>
                    bahracademic@gmail.com
                  </Link>
                  <br />
                  <Link href={"tel:09111231234"}>0911 123 1234</Link>
                </div>
              </div>
            </div>
            <div className="col-4 flex  justify-content-end">
              <div className="flex">
                <div className="ml-4">
                  <Image alt="" src={iconCalendar} width={64} height={64} />
                </div>
                <div className="mt-2">
                  <p>شنبه - پنجشنبه 8-17</p>
                  <p>جمعه تعطیل</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid p-3 border-top-1">
            <div className="col-4">
              <h3>درباره من</h3>
              <p> توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات</p>
              <div className={styles.socialNetworks}>
                <Link href={"https://twitter.com/bahracademic"} target="_blank">
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
                  href={"https://instagram.com/bahracademic"}
                  target="_blank"
                  title="">
                  <i className="pi pi-instagram"></i>
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h3>دسترسی ها</h3>
              <ul className={styles.links}>
                <li>
                  <Link href={"/about"}>
                    <span>درباره ما</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/contact"}>
                    <span>تماس با ما</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/courses"}>
                    <span>دوره ها</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/blog"}>
                    <span>آخرین اخبار</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>دوره ها</h3>
              <ul className={styles.courses}>
                {/* {data.hoodies.slice(0, 2).map((product) => (
    <Product key={product._id} product={product}></Product>
))} */}
                <li>
                  <Link href={"/"}>
                    <Image alt="" src={imageNews} width={70} height={70} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <Image alt="" src={imageNews} width={70} height={70} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <Image alt="" src={imageNews} width={70} height={70} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <Image alt="" src={imageNews} width={70} height={70} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <Image alt="" src={imageNews} width={70} height={70} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <Image alt="" src={imageNews} width={70} height={70} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>عضویت در خبرنامه</h3>
              <p className="mb-3">
                برای دریافت آخرین دوره ها و اخبار ما در خبرنامه ما عضو شوید
              </p>
              <div className={styles.newsLetterContainer}>
                <InputText placeholder="لطفا ایمیل خود را وارد نمایید" />
                <Button className={styles.buttonNewsLetter}>
                  <i className="pi pi-send"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.copyRight}>
        <div className={styles.footerContainer}>
          <div className="grid align-items-center">
            <div className={styles.copyLink + " col-4"}>
              <Link href={"/termsofuse"}>شرایط استفاده</Link>
              <span className="ml-2 mr-2">/</span>
              <Link href={"/privacy"}>حریم خصوصی</Link>
            </div>
            <div className="col-4 flex  justify-content-center">
              <Link className="mt-2" href={"/"}>
                <Image alt="logo" src={logo} height="40" />
              </Link>
            </div>
            <div className="col-4 flex  justify-content-end">
              <span className={styles.copyText}>
                تمام حقوق سایت برای invisibe محفوظ است
              </span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
