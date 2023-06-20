import React from "react";
import Image from "next/image";
import style from "@/styles/Services.module.css";

const ServiceCard = ({ serviceItem }) => {
  return (
      <div className={style.serviceContainer}>
        <div className={style.serviceFront}>
          <div className={style.imgContainer}>
            <Image width="60" className="mt-2 mb-2" src={serviceItem.img} alt={serviceItem.title} />
          </div>
          <h4 className="pt-5 text-center">{serviceItem.title}</h4>
        </div>
        <div className={style.caption}>
          <p>{serviceItem.desc}</p>
        </div>
      </div>
  );
};

export default ServiceCard;
