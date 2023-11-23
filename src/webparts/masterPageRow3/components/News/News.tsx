import * as React from 'react'
import "../MasterPageRow3.scss"
import { getNewsData} from "../../../../common/SpServices"
 import {useState} from 'react';

 
const News = (props: any) => {
  const [data,setData] = useState<any>();
  const  getActualData=async()=>{
      console.log(props);
const actualData=  await getNewsData(props);
setData(actualData);
 
  }
  React.useEffect(()=>{
      getActualData();
  },[])

  return (
    <div className='inCard1 bg-gradient-two'>
      <div className='inCard1--header'>
          <p className='inCard1--header one'>Latest</p>
          <p className='inCard1--header two'><b>News</b></p>
        </div>
      
      <div className='row1 inCard1--body'>
      <ul className='bullets round1'>
        {data?.map((x: any,i:number) => {
          return ( 
            i<3 &&     
            <li>{x.Title}</li>  
          )
        })}
         </ul>
      </div>
      <div className={props.data?.length>3?'inCard1--Footer1':'nofooter' }>
                <button className='Footer1-Button-Two'  onClick={() => window.location.href="https://zelarsoft1.sharepoint.com/sites/Zelardemo/Lists/News1/AllItems.aspx"}>View All</button>
                </div>
    </div>
  )
}
export default News







