import React from "react";
import Image from "next/image";
import style from "@/styles/Courses.module.css";
import { useRouter } from "next/router";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';

const CourseCard = ({courseItem }) =>{
    const router = useRouter();
    
    return(
  
            <div className="col-4">
                <Card  className={style.CourseCard } 
                onClick={() => router.push(`/courses/${encodeURIComponent(courseItem._id)}`)}>
                    <p className="m-0"> {courseItem.title}</p>
                </Card>
            </div>
       
    );
};

export default CourseCard;