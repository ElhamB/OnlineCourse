import React from 'react'
import TitleSection from '../TitleSection'
import styles from "@/styles/News.module.css";

const Description = ({desc}) => {
  return (
    <section className={styles.desContainer} >
          <div className="grid mb-5">
            <div className={styles.descNews + " col-12"}>
              <h4>ری‌اکت چیست؟</h4>
              <p>
                React یک کتابخانه‌ی جاوا اسکریپتی است که برای ساخت یوزر اینترفیس یا
                همان رابط کاربری مورد استفاده قرار می‌گیرد. همه‌ی این آلمان‌های در
                این صفحه کنار هم برای ما رابط کاربری را تشکیل می‌دهند. (یوزر
                اینترفیس (رابط کاربری) چیزی که با کاربر در ارتباط است). کاربرد
                ری‌اکت این است که یوزر اینترفیس را برای ما با یک سری ویژگی‌های خاص
                می‌سازد. یکی از مهمترین ویژگی‌ها این است که React این قابلیت را دارد
                که برای ما یوزر اینترفیس‌ها یا رابط‌های کاربری را با سرعت بالا
                بسازد. مسلما سرعت بالای هر وبسایت می‌تواند در جذب کاربر تاثیر بسزایی
                داشته باشد. پس تا به این جا همان طور که گفتم ری‌اکت یک کتابخانه‌‌ی
                جاوا اسکریپتی برای ساخت رابط‌های کاربری با سرعت بالا است. اینستاگرام
                به تنهایی می‌تواند یک وزنه‌ی سنگین برای معرفی ری‌اکت‌نیتیو باشد که
                از این نوع کتابخانه‌ استفاده می‌کند
              </p>
              <h4>بازار کار ری‌اکت</h4>
              <p>
                اگر یک سری به وب سایت‌های کارگاهی بزنیم با یک سرچ ساده بسیاری از
                آن‌ها را می‌توانیم پیدا کنیم. کمتر در خواستی را می‌بینید که در
                زمینه‌ی فرانت برنامه‌نویس، اسمی از ری اکت نبرده باشند. همین‌طور با
                توجه به ویژگی‌هایی که در رابطه با این فریم ورک در ادامه به شما معرفی
                خواهم کرد، متوجه می‌شوید که React مورد علاقه‌ی شرکت‌های بزرگ است. پس
                اگر می‌خواهید فرصت‌های شغلی‌تان را در زمینه‌ی فرانت افزایش دهید حتما
                ری‌اکت را یاد بگیرید و رزومه‌تان را با این کتابخانه‌ی قدرتمند
                سنگین‌تر کنید
              </p>
            </div>
          </div>
    </section>
  )
}

export default Description