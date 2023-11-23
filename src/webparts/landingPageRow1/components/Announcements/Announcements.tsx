import * as React from 'react'
import "../LandingPage/Landing.scss"
import { getAnnouncementsData } from "../../../../common/SpServices"
 import {useState} from 'react';

const Announcements = (props: any) => {
    const [data,setData] = useState<any>();
    const  getActualData=async()=>{
        console.log(props);
  const actualData=  await getAnnouncementsData(props);
  setData(actualData);
   
    }
    React.useEffect(()=>{
        getActualData();
    },[])
    return (
        <div className='inCard bg-gradient-1'>
            <div className='inCard--header'>
                <p className='inCard--header one'>New</p>
                <p className='inCard--header two'><b>Announcements-</b></p>
                <p className='inCard--header three'>June - 2023</p>
            </div>

            <div className='row1 inCard--body'>
                <ul className='bullets round'>
                  
                    {data?.map((x: any,i:number) => {
                        return (
                            i<3 &&
                            <li>{x.Title}</li>
                        )
                    })}
                </ul>
            </div>
            <div className={props.data?.length>3?'inCard--footer':'inCard--nofooter'} >
                <button className='Footer-Button1' onClick={() => window.location.href="https://zelarsoft1.sharepoint.com/sites/Zelardemo/Lists/Announcements/AllItems.aspx"}>View All</button>
            </div>
        </div>
    )
}
export default Announcements;

















