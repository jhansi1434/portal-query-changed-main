import * as React from "react";
import { ILandingPageRow1Props } from "./ILandingPageRow1Props";
import { Birthday } from "../Birthdays";
import Announcements from "../Announcements/Announcements";
import Trainings from "../Trainings";
import Tasks from "../Tasks";


const LandingPageRow1 = (props: ILandingPageRow1Props) => {

  return (
    <div className="mainContainer">
      <div className="Containers" >
        <div className="announcments">
          <Announcements data={props} />
        </div>
        <div>
          <Birthday data={props}/>
        </div>
            <div><Trainings data={props}/></div>
            <div><Tasks data={props}/></div>     
        </div>
      </div>
  );
};


export default LandingPageRow1;
