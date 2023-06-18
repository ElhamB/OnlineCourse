import React from "react";
import Link from "next/link";
import imageNews from "@/assets/images/image-news.png";
import Image from "next/image";
import styles from "@/styles/CartBox.module.css";

const CartItem = ({ cartItem }) => {
  const handleRemoveFromCart = (id) => {};

  return (
    <li>
      <div className={styles.pic}>
        <span
          className={styles.closeBasket}
          onClick={() => handleRemoveFromCart(cartItem.id)}>
          <i className="pi pi-times mt-1"></i>
        </span>
        <Link href={`/product/${cartItem.id}`}>
          <Image src={imageNews} alt={"d"} />
        </Link>
      </div>
      <div className={styles.left}>
        <span className="mb-2 block text-base">نام بسته</span>
        <div className={styles.priceCount}>
          <span className={styles.price}>2000</span>
        </div>
      </div>
    </li>
  );
};
export default CartItem;
