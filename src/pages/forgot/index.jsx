import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextInput } from '@/common/Form/TextInput';
import { Header } from "@/components/Header";
import AuthLayout from '@/common/AuthLayout';
import style from "@/styles/auth.module.css";


const ForgotPass = () => {
  return (
     <></>   
  );

};

ForgotPass.getLayout = (page) => AuthLayout(page,"بازیابی رمز عبور",img);
export default ForgotPass;