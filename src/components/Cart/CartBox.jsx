import { Fragment, useState } from "react";
import { formatCurrency } from "@/core/utils";
import CartItem from "./CartItem";
import { Button } from "primereact/button";
import { ScrollPanel } from 'primereact/scrollpanel';

import styles from "@/styles/CartBox.module.css";

const CartBox = () => {
  const [show, setShow] = useState(true);
  const cartItems = [
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
  //calculate total sum
  let totalSum = 0;
  let subTotal = [];
  cartItems.map((item) => {
    return subTotal.push(item.qty * item.price);
  });
  totalSum = subTotal.reduce((acc, val) => acc + val, 0);

  //disable checkout button if cart is empty
  const checkoutDisabled = cartItems.length === 0;

  const handleCheckoutk = () => {
    //navigate("/checkout");
  };

  return (
    <Fragment>
       <ScrollPanel style={{ width: '100%', height: '355px' }}>
       <div className={styles.cartBox}>
        {cartItems.length === 0 && (
          <div className={styles.noItem + " text-center"}>
            سبد خرید شما خالی هست
          </div>
        )}
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </ul>
      </div>
       </ScrollPanel>

      <div className={styles.totalBasket + " mt-2"}>
        <div className={styles.cartTotal}>
          <span className={styles.priceTitle}>جمع کل</span>
          <span className={styles.priceTotal}>{formatCurrency(totalSum)}</span>
        </div>
        {/* <div className={styles.cartTotal}>
              <span className={styles.priceTitle}>تخفیف</span>
              <span className={styles.priceTotal}>500</span>
            </div> */}
        <div className={styles.cartTotal}>
          <span className={styles.priceTitle}>مبلغ نهایی</span>
          <span className={styles.priceTotal}>
            {formatCurrency(totalSum )}
          </span>
        </div>
        {show && (
          <Button
            className={styles.btnPayment}
            disabled={checkoutDisabled}
            onClick={handleCheckoutk}>
            پرداخت
          </Button>
        )}
      </div>
    </Fragment>
  );
};
export default CartBox;
