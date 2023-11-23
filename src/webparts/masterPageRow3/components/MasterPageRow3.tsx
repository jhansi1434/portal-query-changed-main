import * as React from 'react'
import './MasterPageRow3.scss'
import { IMasterPageRow3Props } from './IMasterPageRow3Props'
import OpinionPoll from './Opinion Poll'
import News from './News/News'


const MasterPageRow3 = (props: IMasterPageRow3Props) => {
 // const [newsdata, setNewsData] = React.useState<any>();

  // const caml: ICamlQuery = {
  //   ViewXml:
  //     "<View><ViewFields><FieldRef Name='Title' /></ViewFields><RowLimit>5</RowLimit></View>",
  // };

  // const getNewsData = async () => {
  //   let _sp: SPFI = getSP(props.context);
  //   const list1 = await _sp.web.lists.getByTitle("News");
  //   var r2 = await list1.getItemsByCAMLQuery(caml);
  //   setNewsData(r2);
  // };

  React.useEffect(() => {
    const execute = async () => {
      //await getNewsData();
    };
    execute();
  }, []);

  return (
    <div className="mainContainer" >
      <div className='Containers3'>
      <div className='opinionpoll'>
        <OpinionPoll data={props}/>
        {/* description={props.description} isDarkTheme={props.isDarkTheme} environmentMessage={props.environmentMessage} hasTeamsContext={props.hasTeamsContext} userDisplayName={props.userDisplayName} context={props.context} /> */}
        </div>
      <div>
        <News data={props} />
      </div>
      </div>
    </div>
  )
}

export default MasterPageRow3