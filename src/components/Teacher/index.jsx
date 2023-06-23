import React from "react";
import style from "@/styles/Home.module.css"
import TitleSection from "../TitleSection"

import {TeacherItem} from "./TeacherItem"

const TeacherLanding = () =>{
    //console.log({imageTeacher});
    return(
        <>
        <div className={style.container}>
        <div className="grid">
                <h4 className={style.SectionTitle}> اساتید ما </h4>
                </div>
            <div className="grid">
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>

            </div>
        </div>
        </>
    );
};

export { TeacherLanding };