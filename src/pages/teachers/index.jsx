import MainLayout from "@/components/common/MainLayout";
import TeacherList from "@/components/Teacher/TeacherList";
import { getTeacherListApi } from "@/core/services/api/teacher/teacher.api";
import React, { useEffect, useState } from "react";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const getTeachers = async () => {
    const teacherList = await getTeacherListApi();
    setTeachers(teacherList);
  };
  useEffect(() => {
    getTeachers();
  }, []);
  return (
    <div className="container mb-6 mt-4">
      <h1 className="mb-5 text-center mt-3">اساتید ما</h1>
        <TeacherList techers={teachers}/>
    </div>
  );
};

Teachers.getLayout = (page) => MainLayout(page, "اساتید");

export default Teachers;
