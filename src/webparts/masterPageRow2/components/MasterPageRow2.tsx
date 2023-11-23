import * as React from "react";
// import { ICamlQuery } from "@pnp/sp/lists";
import { SPFI } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
import "@pnp/sp/site-users/web";
import { getSP } from "./pnpConfig";
import { IMasterPageRow2Props } from "./IMasterPageRow2Props";
import ImageSliders from "./ImageSlider/ImageSliders";
import Feedback from "./Feedback/Feedback";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import QuickLinks from "./QuickLinks/QuickLinks";
import { useState } from "react";
import { getImagedata,getLinksData} from "../../../common/SpServices"


export interface IListitems {
  Title: string;
  Icon: string;
  url: string;

}
const MasterPageRow2 = (props: IMasterPageRow2Props) => {
  let arr: any[] = [];
  let arrobj: any[] = [];
  const [imagedata, setImageData] = React.useState<any>();
  const [depID, setDepID] = React.useState<any>();
  const [repMan, setRepMan] = React.useState<any>();
  const [quicklinkdata, SetQuickLinkData] = useState<any>();
  // const caml3: ICamlQuery = {
  //   ViewXml:
  //     "<View><ViewFields><FieldRef Name='Title'/><FieldRef Name='image'/></ViewFields></View>",
  // };



  const getUserData = async () => {
    let _sp: SPFI = getSP(props.context);
    
    const list = await _sp.web.lists.getByTitle("EmployeeDetails");
    let user = await _sp.web.currentUser();
    let userobj = user.Email
    var r = await list.items.filter("Name/EMail eq '" + userobj + "'")()
    var y = await list.items.select('ReportingManager/EMail').expand('ReportingManager').filter("Name/EMail eq '" + userobj + "'")()
    y.map((x) => {
      setRepMan(x.ReportingManager.EMail)
    })
    r.map((x) => {
      setDepID(x.DepartmentId)
    })
  }
  const getQuickLinkData = async () => {
    // let _sp: SPFI = getSP(props.context);
    // const qllist = await _sp.web.lists.getByTitle("Quick Links");
    // var qlistitems = await qllist.items();
    let qlistitems=await getLinksData(props);

    qlistitems?.map((x:any) => {
      let imgobj = x.Icon;
      let jobj = JSON.parse(imgobj);
      arrobj.push({ Title: x.Title, Icon: window.location.protocol + "//" + window.location.host + jobj.serverRelativeUrl, Url: x.URL.Url })
     
    })
    SetQuickLinkData(arrobj)
    
  }

  const getImageData = async () => {
    try {
      // let _sp: SPFI = getSP(props.context);
      // const list = await _sp.web.lists.getByTitle("ImageSlider");

      //var r = await list.getItemsByCAMLQuery(caml3);
const data= await getImagedata(props);
data?.map((x: any) => {
        let y = JSON.parse(x.image)
      
        arr.push(y.serverUrl + y.serverRelativeUrl)

      })

      setImageData(arr);


    }
    catch (e) {
      console.log(e);
    }
  };
  React.useEffect(() => {
    
    try {
      
      getImageData();
      getUserData();
      getQuickLinkData();
    }
    catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
   <div className="mainContainer" >
        <div className="Containers1">
          <div className="row2container__part1">
          
            <ImageSliders data={imagedata} />
          </div>
          <div className="row2container__part2">
            <div className="row2container__part2_quicklinks">
              <QuickLinks data={quicklinkdata} />
            </div>
            <Feedback context={WebPartContext} depID={depID} repman={repMan} />
          </div>
        </div>

      </div>
    </>

  );
};
export default MasterPageRow2;