import React from "react";
import ServiceCard from "./ServicesCard";
import imageCounseling from "@/assets/images/chat (1).png";
import imageTest from "@/assets/images/test.png";
import imageDegree from "@/assets/images/trophy (1).png";
import imageJobOffer from "@/assets/images/microphone (1).png";
import TitleSection from "../TitleSection";

const Services = () => {
  const items = [
    {
      id: 1,
      img: imageJobOffer,
      title: "فرصت های شغلی",
      desc: "تضمین کسب شغل با گذراندن دوره ها و بدست اوردن حداقل امتیاز",
    },
    {
      id: 2,
      img: imageDegree,
      title: "مدرک معتبر",
      desc: "ارائه ی مدرک بین المللی در صورت قبولی در آزمون ها",
    },
    {
      id: 3,
      img: imageTest,
      title: "امتحان",
      desc: "برگزاری آزمون های آنلاین دوره ای",
    },
    {
      id: 4,
      img: imageCounseling,
      title: "مشاوره",
      desc: "ارائه ی مشاوره ی درسی جهت پیشبرد اهداف",
    },
  ];

  return (
    <div className="container mt-7 mb-7">
      <TitleSection title={"ما چه خدماتی ارائه می کنیم؟"} />
      <div className="grid justify-content-center">
        {items.map((item) => (
          <ServiceCard key={item.id} serviceItem={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
