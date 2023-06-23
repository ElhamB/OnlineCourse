import React from "react";
import styles from "@/styles/Courses.module.css";
import Link from "next/link";
const NotLogin = () =>{
    return(
        <>
            <div className="row mb-5 d-flex justify-content-center">
                <div className={"col-8 " + styles.Msg}>
                    <p>تنها کاربران سایت قادر به ثبت نظر هستند. برای ثبت نظر لازم است یا 
                        <Link href={"/register"}>ثبت نام</Link> نمایید یا <Link href={"/login"}>وارد شوید</Link></p>
                </div>
            </div>
        </>
    )
}
export default NotLogin;