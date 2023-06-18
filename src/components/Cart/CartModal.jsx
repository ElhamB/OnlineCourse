import React, { Fragment } from 'react';
import Modal from '../common/Modal';
import CartBox from './CartBox';
import styles from "@/styles/CartModal.module.css";

const CartModal = (props) => {

  const cartContentModal = (
    <Fragment>
      <div className={styles.cartList}>
        <div className="cart-menu">
          <div className="cart-bg"></div>
          <i onClick={props.onClose} className={styles.closeBasketList +" pi pi-times"}></i>
          <h2 className={styles.titleBasketBag + " text-center"}>سبد خرید شما</h2>
          <CartBox />
       
        </div>
      </div>
    </Fragment>
  )
  return (
    <Modal onClose={props.onClose} >
      {cartContentModal}
    </Modal>
  )
}

export default CartModal


