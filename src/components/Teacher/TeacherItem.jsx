import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "@/styles/Teacher.module.css";

const TeacherItem = ({ teacherItem }) => {
  const router = useRouter();

  return (
    <div
      className="md:col-3 sm:col-6 col-12"
      onClick={() =>
        router.push(`/teacher/${encodeURIComponent(teacherItem._id)}`)
      }>
      <figure className={"text-center p-3 mb-6 " + style.TeacherCard}>
        <div className={style.imgContainer}>
          <Image
            alt={teacherItem.fullName}
            className="border-circle"
            src={teacherItem.profile}
            width={200}
            height={200}
          />
        </div>
        <figcaption>
          <h4 className="text-lg mb-2">{teacherItem.fullName}</h4>
          <span className="mb-1">طراح سایت</span>
          <div className={style.techerSocialMedia + " text-center mb-2"}>
            <ul>
              <li>
                <Link href={""}>
                  <i className="pi pi-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <i className="pi pi-vimeo"></i>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <i className="pi pi-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <i className="pi pi-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid border-top-1 border-gray-200">
            <div className="col-6 mt-2">
              <i className="pi pi-desktop ml-2"></i> 12 درس
            </div>
            <div className="col-6 mt-2">
              <i className="pi pi-star-fill ml-2"></i> 4.5
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export { TeacherItem };
