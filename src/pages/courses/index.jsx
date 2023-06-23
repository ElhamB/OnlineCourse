import MainLayout from "@/components/common/MainLayout";
import React,{ useEffect, useState } from "react";
import style from "@/styles/Courses.module.css"
import CourseCard from "@/components/Course/CourseCard";
import { Paginator } from 'primereact/paginator';
import SideBar from "@/components/Course/sidebar";
import axios from "axios";

const courses = () =>{
    const [data,setData] = useState([]);

    const LoadApi = async () =>{
        try{
            const response = await axios.get('https://api.griffinteam.sepehracademy.ir/api/course/getall');
            console.log(response.data);
            setData(response.data.result);
        }catch(error){}
    }

    useEffect(() => { LoadApi() }, [])

    const [first, setFirst] = useState(0);
    const [rows,setRows] = useState(5);
    const [checked, setChecked] = useState(false);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };
    const categories = [
        { name: ' همه', key: 'L' , number:'152'},
        { name: 'وب دیزاین', key: 'A', number:'10' },
        { name: 'ری اکت', key: 'M', number:'42' },
        { name: 'پایتون', key: 'P', number:'32' },
        { name: 'HTML5', key: 'R' , number:'21'}
    ];
    const categories2 = [
        { name: ' همه', key: 'L' , number:'152'},
        { name: ' آقای اصغری', key: 'A', number:'10' },
        { name: ' آقای اسفندیاری', key: 'M', number:'42' },
    ]; 
    return(
        <>
            <div className={style.countainer}>
                <div className="grid">
                    <Paginator first={first} rows={rows} totalRecords={data.length} 
                    onPageChange={onPageChange} />
                </div>
                <div className="grid">
                    <div className="col-9">
                        <div className="grid ">
                            {data.map( it => <CourseCard data={it} /> )}
                        </div>
                    </div>
                    <div className="col-3">
                        <SideBar title={"دسته‌بندی"} categories={categories} />
                        <SideBar title={"اساتید"} categories={categories2} />
                    </div>
                </div>
            </div>
        </>
    );
}

courses.getLayout = (page) => MainLayout(page,"دوره ها")
export default courses;