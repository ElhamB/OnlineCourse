import React from "react";
import Link from "next/link";
import TitleSection from "@/components/News/TitleSection";
import styles from "@/styles/News.module.css";
import CommentItem from "./CommentItem";

const Comment = ({comments}) => {
  return (
    <>
      <TitleSection className={styles.subtitleNews} title={"نظرات کاربران"} />
          <div className={styles.alertGreen + " border-1 border-gray-200 mb-5"}>
            <span>
              تنها کاربران سایت قادر به ثبت نظر هستند. برای ثبت نظر لازم است تا
              <Link className={styles.link +" ml-2 mr-2"} href={"/register"}>
                ثبت‌نام
              </Link>{" "}
              نمایید و یا{" "}
              <Link className={styles.link +" ml-1 mr-1"} href={"/login"}>
                وارد
              </Link>{" "}
              شوید
            </span>
          </div>
      <CommentItem comments={comments}/>
    </>
  );
};

export default Comment;
