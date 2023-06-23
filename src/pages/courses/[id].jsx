import MainLayout from "@/components/common/MainLayout";
import React from "react";
import style from "@/styles/Courses.module.css";
import Image from "next/image";
const CourseId = () =>{
    return(
        <>
            <div className={style.countainer}>
                <div className="grid">
                    <div className="col-9">
                        <h1>test</h1>
                        <p>description test</p>


                        <div className="grid">
                            <div className="col-2">
                                <i className="pi pi-hourglass">مدت زمان  </i>
                                <p>8 هفته</p>
                            </div>

                            <div className="col-2">
                                <i className="pi pi-clock">تعداد ساعت در هفته</i>
                                <p>8 ساعت</p>
                            </div>

                            <div className="col-2">
                                <i className="pi pi-globe"> 100% آنلاین</i>
                                <p>چجوری کار میکنه؟</p>
                            </div>

                            <div className="col-2">
                                <i className="pi pi-sync"></i>
                            </div>

                            <div className="col-2">
                                <i className="pi pi-shield"></i>
                            </div>

                        </div>
                    </div>
                    <div className={"col-3 " + style.SideBar}>
                    
                    </div>
                </div>
            </div>
        </>
    )
}
CourseId.getLayout = (page) => MainLayout(page,"دوره ها")
export default CourseId;