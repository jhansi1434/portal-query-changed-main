import * as React from "react";
import "../LandingPage/LandingPageRow1.module.scss";
import {useState,useEffect} from 'react';
import MonthSection from "./MonthSection";
import { BirthdaysMonth,ProcessData } from "./Utils/BirthdayHelper";
import { getBirthdayData } from "../../../../common/SpServices";


interface IBirthdaysPerMonthProps {
  data: Array<BirthdaysMonth>;
}

const Birthday = (props: any) => {
 
  const [data,setData]=useState<any>();
    const getdata=async()=>{
   const birthdayData=await getBirthdayData(props);
   console.log(birthdayData);
      //  setBirthData(birthdayData);
   const processedBirthdayData=ProcessData(birthdayData)
   setData(processedBirthdayData) ;
    }
    useEffect(()=>{
      getdata();
    },[])

  return (

    <section>
      {data && data?.map((month: any, index: number) => (
        <MonthSection key={month.title} data={month} index={index} />
      ))}
    </section>
  )
}

export { IBirthdaysPerMonthProps, Birthday };
