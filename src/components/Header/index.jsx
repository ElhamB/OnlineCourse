import React, { useState } from "react";
import { useRouter } from "next/router";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { AutoComplete } from "primereact/autocomplete";

import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import CartModal from "../Cart/CartModal";

const Header = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const itemsMenu = [
    {
      label: "خانه",
      command: () => {
        router.push("/");
      },
    },
    {
      label: "دوره ها",
      command: () => {
        router.push("/courses");
      },
    },
    {
      label: "بلاگ",
      command: () => {
        router.push("/news");
      },
    },
    {
      label: "تماس با ما",
      command: () => {
        router.push("/contact");
      },
    },
  ];
  /**call back */
  const HandleHideCartModal = () => {
    setShowCart(false);
  };
  const start = (
    <Link className="navbar-brand" href={"/"}>
      <Image
        alt="logo"
        src={logo}
        height="40"
        className={styles.logo + " ml-2"}
      />
    </Link>
  );

  const search = (event) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
  };

  return (
    <>
      <header className="container py-2">
        <div className="grid">
          <div className="col-8">
            <Menubar
              className="bg-white border-none"
              model={itemsMenu}
              start={start}
            />
          </div>
          <div className="col-4 flex justify-content-end align-items-center">
            <Button
              onClick={() => router.push("/register")}
              className="buttn-yellow ml-1"
              label="ثبت نام"
            />
            <Button className="ml-1" onClick={() => router.push("/login")} label="ورود" link />
            <span className={styles.divider}></span>
            <Button
              className={styles.searchButton}
              onClick={() => setVisible(true)}
              link>
              <i className="pi pi-search"></i>
            </Button>
            <Button link onClick={() => setShowCart(true)}>
              <i className="pi pi-shopping-cart"></i>
              <span className={styles.badge}>0</span>
            </Button>
          </div>
        </div>
        <Dialog
          visible={visible}
          style={{ width: "30vw" }}
          onHide={() => setVisible(false)}
          draggable={false}
          resizable={false}>
          <div className="card flex justify-content-center">
            <AutoComplete
              value={value}
              suggestions={items}
              placeholder="جستجو ..."
              completeMethod={search}
              onChange={(e) => setValue(e.value)}
            />
          </div>
        </Dialog>
      </header>
      {showCart && <CartModal onClose={HandleHideCartModal} />}
    </>
  );
};

export default Header;
