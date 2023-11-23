import * as React from 'react'
import "../LandingPage/Landing.scss"
import { BsCalendar4Event } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { getTrainingsdata } from '../../../../common/SpServices';
import {useState,useEffect} from 'react';
const Trainings = (props: any) => {
    const [data,setData]=useState<any>()
        const getdata=async ()=>{
          console.log(props)
          const actualData=await getTrainingsdata(props);
          setData(actualData);

          
        }

     useEffect(()=>{
        getdata();

        },[])

      

  return (
    <div className='inCard bg-gradient-3'>
      <div className='inCard--header'>
        <p className='inCard--header one'>On Going</p>
        <p className='inCard--header two'><b>Trainings</b></p>
      </div>
      <div className='row1 inCard--body'>
        <ul className='bullets round'>
          {data?.map((x: any,i:number) => {

            const timestamp = x.EventDate;
            const dateTime = new Date(timestamp);
            // Extracting the time
            // Extracting the time in 12-hour format

            const hours = dateTime.getUTCHours();
            const minutes = dateTime.getUTCMinutes();

            const period = hours >= 12 ? "PM" : "AM";
            const formattedHours = (hours % 12) || 12;
            const time = `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
            // Extracting the date
            const year = dateTime.getUTCFullYear();
            const month = (dateTime.getUTCMonth() + 1).toString().padStart(2, '0');
            const day = dateTime.getUTCDate().toString().padStart(2, '0');
            const date = `${day}-${month}-${year}`;
            return (
              i<3 &&
              <li>
                <div className='inCard-list'>
                  <div className='inCard-list--icon1'> <FaBookReader size={"30px"} /></div>
                  <div className='inCard-list--details'>
                    <h3>{x.trainingname}</h3>
                    <p> {date} {time}</p>
                  </div>
                  <a href="https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement/Lists/TrainingCalender/DispForm.aspx?ID='+x.ID+'" target='_blank'><BsCalendar4Event size={"25px"} color='#c8c6c4'/></a>
                </div>
              </li>

            )
          })}
        </ul>

      </div>
      <div className={props.data?.length>3?'inCard--footer':'inCard--nofooter'}>
        <button className='Footer-Button3'  onClick={() => window.location.href="https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement/Lists/TrainingCalender/AllItems.aspx"}>View All</button>
      </div>
    </div>
  )
}
export default Trainings;

