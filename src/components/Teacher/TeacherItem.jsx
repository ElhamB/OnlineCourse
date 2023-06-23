import React from "react";
import Image from "next/image";
import style from "@/styles/Teacher.module.css";
// import img from "@/assets/images/Group 1440.png";
import ImgTeacher from "@/assets/images/portrait-woman-holding-clip-board-hands-writing-paper-wearing-glasses-isolated-grey-wall.png";

import { Card } from 'primereact/card';
import Link from "next/link";

const TeacherItem = ({ image }) => {
  const header=<><Image alt="teacherImg" src={ImgTeacher} />
  <h6>خانم موسوی</h6><span>طراح سایت</span></>;
  const footer=<div className="grid">
    <div className="col-6"><p> <i className="pi pi-desktop"></i> 12 درس </p></div>
    <div className="col-6"><p> <i className="pi pi-star-fill"></i> 4.5</p></div>
  </div>;
  return (
    <>
      <div className={"col-3 " + style.TeacherCard}>
        <Card footer={footer} header={header}>
          <ul className="col-10">
            <li><i className="pi pi-linkedin"></i></li>
            <li><i className="pi pi-vimeo"></i></li>
            <li><i className="pi pi-facebook"></i></li>
            <li><i className="pi pi-twitter"></i></li>
          </ul>
        </Card>
      </div>
    </>
  );
};

export { TeacherItem };
