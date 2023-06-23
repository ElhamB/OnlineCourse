import React,{useState} from 'react'
import TitleSection from "@/components/News/TitleSection";
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const CommentForm = () => {
    const [value, setValue] = useState('');

  return (
    <>
      <TitleSection title={"ثبت دیدگاه"} />
      <InputTextarea placeholder='نظر ...' value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
      <InputText placeholder='نام' value={value} onChange={(e) => setValue(e.target.value)} />
      <InputText placeholder='ایمیل' value={value} onChange={(e) => setValue(e.target.value)} />
      <Button label="ارسال دیدگاه" />

    </>
  )
}

export default CommentForm
