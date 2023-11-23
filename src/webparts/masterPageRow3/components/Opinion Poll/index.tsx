import * as React from 'react'
import PollElement from './PollElement'
// import { SPFI } from '@pnp/sp';
// import { getSP } from '../../pnpConfig';
// import { ICamlQuery } from '@pnp/sp/lists';
//import { IPollProps } from './IPollProps';
import { getOpinionPollData} from '../../../../common/SpServices';
// import "@pnp/sp/site-users/web";
import './Poll.scss'

const Opinionpoll = (props: any) => {
  const [pollData, setPolldata] = React.useState<any>([])
  // const [formmode, setFormmode] = React.useState<boolean>(true)
  // let arr: any[]

  // const caml:ICamlQuery={
  //   ViewXml:"<View><Query><FieldRef Name='ID' /><FieldRef Name='Q.Id' /><FieldRef Name='Q.Name' /><FieldRef Name='Q.Choices' /><Where><Eq><FieldRef Name='Active'/><Value Type='Boolean'>1</Value></Eq></Where></Query></View>",
  // }
  const getData = async () => {

  const actualData=await getOpinionPollData(props);
    // let _sp: SPFI = getSP(props.context);
    // const list = await _sp.web.lists.getByTitle("OpinionPole");
    // const r = await list.getItemsByCAMLQuery(caml);

    // arr = await r;
   
    // console.log(r);
    setPolldata(actualData)
    // if (actualData.length > 0) { setFormmode(false) }

  }


  React.useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div className='inCard1 bg-gradient-one'>
        <div className='inCard1--header'>
        <p className='inCard1--header one'>Today's</p>
        <p className='inCard1--header two'><b>Opinion Poll</b></p>
        </div>
        <div className='row32 inCard--body'>
          {/* {console.log(formmode)} */}
          {
            pollData && pollData?.map((x: any) => {    
              return (
                <>
                {/* <label>{x}</label> */}
                <PollElement data={x} context={props.context} />
                </>
              )
            })
          }
          {/* {
            console.log(pollData)
          } */}
        </div>
      </div>
    </>

  )
}

export default Opinionpoll