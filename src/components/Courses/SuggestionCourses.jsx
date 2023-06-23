import React, { useState } from "react";
import styles from "@/styles/Courses.module.css";
import CourseItem from "@/components/Courses/CourseCard";
import img from "@/assets/images/652583_code_develop_html_language_layout_icon.png";
import img1 from "@/assets/images/11.jpg";
import img2 from "@/assets/images/12.jpg";
import img3 from "@/assets/images/13.jpg";

const SuggestionCourses = ({ title}) =>{
    const [data, setData] = useState([
        {id:1,title:"HTML 5",teacher:"مهندس اصغری",price:"156.000",rate:"10",member:"40",image:img1},
        {id:2,title:"Java Script",teacher:"دکتر یحرالعلومی",price:"130.000",rate:"10",member:"30",image:img3},
        {id:3,title:"React",teacher:"مهندس محسنی",price:"450000",rate:"9.5",member:"10",image:img2},
    ]);
    return(
        <>
            <div className={"row mb-5 " + styles.SmallTitle}>
                <h6 className="col-12">{title}</h6>
            </div>
            <div className="row mb-5  d-flex justify-content-center">
                    {data.map((course,index)=>(
                        <CourseItem data={course} key={index} />
                    ))};
            </div>
        </>
    );
};

export default SuggestionCourses;