import React, { useEffect, useState } from "react";
import CourseCard from "@/components/Course/CourseCard";
import AllSectionLink from "../AllSectionLink";
import TitleSection from "../TitleSection";
import { getAllCoursesApi } from "@/core/services/api/courses/courses.api";

const CoursesLanding = () => {
  const [courses, setCourses] = useState([]);
  const getPopularCourses = async () => {
    const response = await getAllCoursesApi();
    setCourses(response);
  };

  useEffect(() => {
    getPopularCourses();
  }, []);
  
  return (
    <div className="surface-50 mt-3 pb-2 pt-6">
      <div className="container">
        <TitleSection title={"دروس پر طرفدار"} />
        <div className="grid">
          {courses?.slice(-4).map((course) => (
            <CourseCard courseItem={course} key={course._id} />
          ))}
        </div>
        <AllSectionLink href={"/courses"} title={"مشاهده موارد بیشتر"} />
      </div>
    </div>
  );
};
export default CoursesLanding;
