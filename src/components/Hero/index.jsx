import React from "react";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import Image from "next/image";
import Student from "@/assets/images/girl-3.png";
import GoogleMeet from "@/assets/images/Google-Meet.png";
import HeroCounter from "@/components/Hero/HeroCounter";
import style from "@/styles/Home.module.css";

const Hero = () => {
  const router = useRouter();
  return (
    <div className={style.hero}>
      <div className="container">
        <div className="grid">
          <div className="col-5">
            <h1 className="mb-5">آکادمی برنامه نویسی نسل برتر</h1>
            <p className="mb-3">در بین بیش از ۲۰,۰۰۰ ساعت آموزش آکادمی برنامه نویسی نسل برتر جستجو کنید و به جمع میلیونی دانشجویان ما بپیوندید.</p>
            <div className="">
              <Button
                label="همین حالا شروع کنین"
                onClick={() => router.push("/courses")}
                severity="info"
                className="ml-3 mb-5"
                raised
              />
              <Button
                icon="pi pi-play"
                text
                severity="danger"
                label=" بیشتر بدانید "
                className="mb-5"
              />
            </div>
            <div className="grid">
              <HeroCounter title={"دروس"} start={0} end={100} icon="pi-plus" />
              <HeroCounter title={"کاربر"} start={0} end={350} icon="pi-plus" />
              <HeroCounter title={" اساتید"} start={0} end={187} />
            </div>
          </div>
          <div className="col-7">
              <div className={style.GrilPic}>
                <Image alt="Student" src={Student} />
                <Image
                  alt="GoogleMeet"
                  src={GoogleMeet}
                  width={80}
                  height={50}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
