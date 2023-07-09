import React, { useState } from "react";
import { Paginator } from "primereact/paginator";
import { TeacherItem } from "./TeacherItem";
import style from "@/styles/Teacher.module.css";

const TeacherList = ({ techers }) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(8);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  return (
    <>
      <div className="grid">
        {techers.slice(first, first + rows).map((teacherItem) => (
          <TeacherItem key={teacherItem._id} teacherItem={teacherItem} />
        ))}
      </div>

      <div className={style.ltr + " border-top-1 border-gray-200"}>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={techers.length}
          rowsPerPageOptions={[8, 16, 24]}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default TeacherList;
