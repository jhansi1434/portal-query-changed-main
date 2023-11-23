import * as React from 'react'
import "../LandingPage/Landing.scss"
import {FiEye } from "react-icons/fi";
import { MdArrowForwardIos } from 'react-icons/md';
import {useState} from 'react';
import { getTasksdata } from '../../../../common/SpServices';

const Tasks = (props: any) => {
  const [data,setData] = useState<any>();
  const  getActualData=async()=>{
      console.log(props);
const actualData=  await getTasksdata(props);
setData(actualData);
 
  }
  React.useEffect(()=>{
      getActualData();
  },[])

  return (
    <div className='inCard bg-gradient-4'>
        <div className='inCard--header'>
                <p className='inCard--header one'>Today's</p>
                <p className='inCard--header two'><b>Tasks</b></p>
            </div>
        <div className='row1 inCard--body'>
          <ul className='bullents round'>
            {data?.map((x:any,i:number)=>{
              const timestamp = x.DueDate;
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
             
              
                   return(
                    i<3 &&
                   <li>
                    <div className='inCard-list'>
                    <div className='inCard-list--icon'><MdArrowForwardIos size={"30px"}/></div>
                    <div className='inCard-list--details'>
                    <h3>{x.Title}</h3>
                    <p>{date} {time}</p>
                    </div>
                    <a href={`https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement/Lists/Tasks/DispForm.aspx?ID=${x.ID}`} target='_blank'><FiEye size={"25px"} color='white'/></a>
                    </div>
                    </li>
                   )
            })}
            </ul>
        </div>
        <div className={props.data?.length>3?'inCard--footer':'inCard--nofooter'}>
          <button className='Footer-Button4'  onClick={() => window.location.href="https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement/Lists/Tasks/AllItems.aspx"}>View All</button>
        </div>
    </div>
       
    )
}
export default Tasks;