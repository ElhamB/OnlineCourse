import React, { useEffect, useState } from "react";
import TitleSection from "../TitleSection";
import AllSectionLink from "../AllSectionLink";
import { TeacherItem } from "./TeacherItem";
import { getTeacherListApi } from "@/core/services/api/teacher/teacher.api";

const TeacherLanding = () => {
  const [teachers, setTeachers] = useState([]);
  const getTeacher = async () => {
    const teacherList = await getTeacherListApi();
    setTeachers(teacherList);
  };
  useEffect(() => {
    getTeacher();
  }, []);
  return (
    <div className="container">
      <TitleSection title={"اساتید ما"} />
      <div className="grid">
        {teachers?.slice(-4).map((teacher) => (
          <TeacherItem key={teacher._id} teacherItem={teacher}  />
        ))}
      </div>
      <AllSectionLink href={"/courses"} title={"مشاهده موارد بیشتر"} />
    </div>
  );
};

export { TeacherLanding };
