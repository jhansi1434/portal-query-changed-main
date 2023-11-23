import * as React from "react";
import { Persona, PersonaSize } from "@fluentui/react/lib/Persona";
import { BirthdaysMonth } from "./Utils/BirthdayHelper";
import '../LandingPage/Landing.scss'

interface IMonthSectionProps {
  data: BirthdaysMonth;
  index: number;
}

const MonthSection = (props: IMonthSectionProps): JSX.Element => {
  return (
    <>
      <div className="inCard bg-gradient-2">
        <div className='inCard--header'>
          <p className='inCard--header one'>Today's</p>
          <p className='inCard--header two'><b>Birthdays</b></p>
        </div>
        <div className="inCard--body">
        <ul className='bullets round'>

        <div className={props.data.users.length===0?"row4NoBday":"row4"}>
         {console.log(props.data.users)}
        {props.data.users.length === 0 && (
            <div className="birthday">
              <p className="birthday--sub1">Next Birthday...</p>
              <p className="birthday--sub2">Will be celebrated soon!</p>
            </div>
          )}

            {props.data.users.map((user) => {
              
              return (
                <li>
                  <Persona
                    primaryText="Happy birthday!"
                    secondaryText={ user.name}
                    imageUrl={`/_layouts/15/userphoto.aspx?UserName=${user.email}`}
                    imageAlt={user.name}
                    size={PersonaSize.size56}
                    styles={{
                      primaryText: {
                        color: "white",
                        font: "19px",
                      },
                      secondaryText: {
                        color: "white",
                      },

                    }}
                  />
                </li>
              );
            })}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MonthSection;
