import React from "react";
import style from "@/styles/auth.module.css";
import * as Yup from "yup";
import { Formik,Form,Field, ErrorMessage } from "formik";
import Link from "next/link";
import AuthLayout from "@/components/common/AuthLayout";

const Register = () =>{
  
    return(
        <>
      
        </>
        
    );
};
Register.getLayout = (page) => AuthLayout(page, "ثبت نام");
export default Register;