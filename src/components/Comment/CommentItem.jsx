import React from "react";
import Image from "next/image";
import iconChat from "@/assets/images/icon-chat.png";
import iconBlock from "@/assets/images/icon-block.png";
import iconLike from "@/assets/images/icon-like.png";
import iconDislike from "@/assets/images/icon-dislike.png";

import Link from "next/link";
import styles from "@/styles/News.module.css";

const CommentItem = ({ comments }) => {
  return comments.map((item) => {
    return (
      <div className="grid">
        <div className={styles.userContainer}>
          <Image src={item.img} width={75} height={75} alt="" />
        </div>
        <div className={styles.commentContainer}>
        <p className={styles.comment}>{item.comment}</p>
          <div className={styles.topSec +" grid"}>
            <div className="col-9">
              <span className="font-bold ml-2 text-gray-900 text-sm">{item.name}</span>
              <span className="text-sm">{item.date}</span>
            </div>
            <div className="col-3">
            <Link href={'#'}>پاسخ</Link>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default CommentItem;
