import React,{useState,useEffect} from "react";
import MainLayout from "@/components/common/MainLayout";
import { TeacherLanding } from "@/components/Teacher";
import News from "@/components/News";
import Services from "@/components/Services/Services";
import CoursesLanding from "@/components/Course";
import Hero from "@/components/Hero";
import { Button } from 'primereact/button';


const Home=()=> {
  const [scrollTop, setScrollTop] = useState(false);
 useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 340) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
    return(
      <>
      <Hero/>
      <CoursesLanding/>
      <News/>
      <TeacherLanding/>
      <Services/>
      {scrollTop && (
        <Button onClick={bottomToTop} className="backToTopButton">
          <i className="pi pi-angle-up"></i>
        </Button>
      )}
      </>
  
    ); 
  }
Home.getLayout = (page) => MainLayout(page, "خانه");

export default Home;