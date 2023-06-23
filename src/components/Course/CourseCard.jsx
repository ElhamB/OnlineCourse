import React from "react";
import Image from "next/image";
import style from "@/styles/Courses.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import teacherImg from "@/assets/images/user.png";
import { formatCurrency } from "@/core/utils";
import { Button } from "primereact/button";

const CourseCard = ({ courseItem }) => {
  const router = useRouter();
  const studentNumber = courseItem.students.length;
  return (
    <div className="col-3">
      <figure
        className={style.CourseCard}
        onClick={() =>
          router.push(`/courses/${encodeURIComponent(courseItem._id)}`)
        }>
        <div className={style.imgContainer}>
          <Image
            alt={courseItem.title}
            src={courseItem.lesson.image}
            width={300}
            height={100}
          />
          <Button className={style.shopButton}><i className="pi pi-shopping-cart"></i></Button>

        </div>
        <figcaption>
          <div className={style.priceCat}>
            <div>{formatCurrency(courseItem.cost)}</div>
            <div>
              <Link className={style.category} href={""}>
                Web design
              </Link>
            </div>
          </div>
          <h3> {courseItem.title}</h3>
          <div className={style.CourseFooter + " border-top-1 border-gray-200"}>
            <ul>
              <li>
                <span>
                  <Link href={""}>
                    <Image
                      alt={courseItem.teacher.fullName}
                      src={teacherImg}
                      width={30}
                      height={30}
                      className="ml-1"
                    />
                  </Link>
                </span>
                <Link className={style.teacherName}  href={""}>{courseItem.teacher.fullName}</Link>
              </li>
              <li>
                <span className={style.iconContainer}>
                  <i className="pi pi-star"></i>
                </span>
                <span className="mt-1">4.3</span>
              </li>
              <li>
                <span className={style.iconContainer}>
                  <i className="pi pi-user"></i>
                </span>
                <span className="mt-1">{studentNumber}</span>
              </li>
            </ul>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default CourseCard;
