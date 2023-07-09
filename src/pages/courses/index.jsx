import MainLayout from "@/components/common/MainLayout";
import React, { useEffect, useState } from "react";
import CourseCard from "@/components/Course/CourseCard";
import { Paginator } from "primereact/paginator";
import CourseSidebar from "@/components/Course/CourseSidebar";
import { getAllCoursesApi } from "@/core/services/api/courses/courses.api";
import style from "@/styles/Courses.module.css";

const courses = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const courseList = await getAllCoursesApi();
    setCourses(courseList);
  };

  useEffect(() => {
    getCourses();
  }, []);

  console.log(courses);

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(8);
  const [checked, setChecked] = useState(false);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  const categories = [
    { name: " همه", key: "L", number: "152" },
    { name: "وب دیزاین", key: "A", number: "10" },
    { name: "ری اکت", key: "M", number: "42" },
    { name: "پایتون", key: "P", number: "32" },
    { name: "HTML5", key: "R", number: "21" },
  ];
  const categories2 = [
    { name: " همه", key: "L", number: "152" },
    { name: " آقای اصغری", key: "A", number: "10" },
    { name: " آقای اسفندیاری", key: "M", number: "42" },
  ];
  return (
    <div className="container">
      <div className="grid">
        <div className="col-3">
          <CourseSidebar title={"دسته‌بندی"} categories={categories} />
          <CourseSidebar title={"اساتید"} categories={categories2} />
        </div>
        <div className="col-9">
          <div className="grid ">
            {courses.slice(first, first + rows).map((courseItem) => (
              <CourseCard key={courseItem._id} courseItem={courseItem} />
            ))}
          </div>
          <div className={style.ltr + " border-top-1 border-gray-200"}>
            <Paginator
              first={first}
              rows={rows}
              totalRecords={courses.length}
              onPageChange={onPageChange}
              rowsPerPageOptions={[8, 16, 24]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

courses.getLayout = (page) => MainLayout(page, "دوره ها");
export default courses;
