
import { SPHttpClient ,SPHttpClientResponse} from "@microsoft/sp-http-base";

 
export const getAnnouncementsData = async (props:any) => {
   
    try{
    const siteUrl = props.data.weburl;
    //console.log(props);
    const listName = "Announcements";
    const spHttpClient: SPHttpClient = props.data.spHttpClient;
    
    // Set the endpoint URL for getting list items
    const endpointUrl: string = `${siteUrl}/_api/web/lists/getbytitle('${listName}')/items`;
   // console.log(endpointUrl);
    // Make the GET request to retrieve list items
   const myvalue= await spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        if (response.ok) {
        return  response.json()}
        }).then((res:any)=>{
          //console.log(res.value);
       
          return res.value;
        })
 
 return myvalue}
 catch(error){

 }

  };



   
export const getBirthdayData= async (props:any) => {
   
  try{
  const siteUrl = props.data.weburl;
  console.log(props);
  const listName = "Birthdays";
  const spHttpClient: SPHttpClient = props.data.spHttpClient;
  
  // Set the endpoint URL for getting list items
  const endpointUrl: string = `${siteUrl}/_api/web/lists/getbytitle('${listName}')/items?$select=ID,Month,Date,BirthdayDate,Employee/Title,Employee/UserName&$expand=Employee`;
  //console.log(endpointUrl);
  // Make the GET request to retrieve list items
 const myvalue= await spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
    .then((response: SPHttpClientResponse) => {
      if (response.ok) {
      return  response.json()}
      }).then((res:any)=>{
        console.log(res.value);
     
        return res.value;
      })

return myvalue}
catch(error){

}

};




  export const getTrainingsdata = async (props:any) => {
  
   
   try{
         console.log(props);
    const siteUrl ="https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement";
    const listName = "TrainingCalender";
    const spHttpClient: SPHttpClient = props.data.spHttpClient;
    
    // Set the endpoint URL for getting list items
    const endpointUrl: string = `${siteUrl}/_api/web/lists/getbytitle('${listName}')/items`;
    //console.log(endpointUrl);
    // Make the GET request to retrieve list items
   const myvalue= await spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        if (response.ok) {
        return  response.json()}
        }).then((res:any)=>{
          console.log(res.value);
       
          return res.value;
        })
 
 return myvalue
}
   catch(e){
    console.log(e);
   }  
   
  };


  export const  getTasksdata = async (props:any) => {
  
    try{
          console.log(props);
     const siteUrl ="https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement";
     const listName = "Tasks";
     const spHttpClient: SPHttpClient = props.data.spHttpClient;
     
     // Set the endpoint URL for getting list items
     const endpointUrl: string = `${siteUrl}/_api/web/lists/getbytitle('${listName}')/items`;
   //  console.log(endpointUrl);
     // Make the GET request to retrieve list items
    const myvalue= await spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
       .then((response: SPHttpClientResponse) => {
         if (response.ok) {
         return  response.json()}
         }).then((res:any)=>{
           console.log(res.value);
        
           return res.value;
         })
  
  return myvalue
 }
    catch(e){
     console.log(e);
    }  
    
   };
 
   export const getNewsData = async (props:any) => {
   
    try{
    const siteUrl = props.data.weburl;
 
    const listName = "News";
    const spHttpClient: SPHttpClient = props.data.spHttpClient;
    
    // Set the endpoint URL for getting list items
    const endpointUrl: string = `${siteUrl}/_api/web/lists/getbytitle('${listName}')/items`;
  //  console.log(endpointUrl);
    // Make the GET request to retrieve list items
   const myvalue= await spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        if (response.ok) {
        return  response.json()}
        }).then((res:any)=>{
          
       
          return res.value;
        })
 
 return myvalue}
 catch(error){

 }

  };

  export const getOpinionPollData = async (props:any) => {

    try{
    const siteUrl = props.data.weburl;
   
    const listName = "OpinionPole";
    const spHttpClient: SPHttpClient = props.data.spHttpClient;
    
    // Set the endpoint URL for getting list items
    const endpointUrl: string = `${siteUrl}/_api/web/lists/getbytitle('${listName}')/items?$select=ID,QuestionId,QuestionName,Choices&$filter=Active eq 1`;
    //console.log(endpointUrl);
    // Make the GET request to retrieve list items
   const myvalue= await spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        if (response.ok) {
        return  response.json()}
        }).then((res:any)=>{
          //console.log(res.value);
       
          return res.value;
        })
 
 return myvalue}
 catch(error){
 
console.log(error)
 }

  };

  export const  getImagedata = async (props:any) => {
  
    try{
          //console.log(props);
       const siteUrl =props.weburl;
       const listName = "ImageSlider";
       const spHttpClient: SPHttpClient = props.spHttpClient;
     
     // Set the endpoint URL for getting list items
     const endpointUrl: string = `${siteUrl}/_api/web/lists/getbytitle('${listName}')/items?`;
    // console.log(endpointUrl,"serviceImage");
     // Make the GET request to retrieve list items
    const myvalue= await spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
       .then((response: SPHttpClientResponse) => {
         if (response.ok) {
         return  response.json()}
         }).then((res:any)=>{
          // console.log(res.value);
        
           return res.value;
         })
  
  return myvalue
 }
    catch(e){
     console.log(e);
    }  
    
   };



   export const  getLinksData = async (props:any) => {
  
    try{
          //console.log(props);
       const siteUrl =props.weburl;
       const listName = "Quick Links";
       const spHttpClient: SPHttpClient = props.spHttpClient;
     
     // Set the endpoint URL for getting list items
     const endpointUrl: string = `${siteUrl}/_api/web/lists/getbytitle('${listName}')/items`;
    // console.log(endpointUrl);
     // Make the GET request to retrieve list items
    const myvalue= await spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
       .then((response: SPHttpClientResponse) => {
         if (response.ok) {
         return  response.json()}
         }).then((res:any)=>{
           //console.log(res.value);
        
           return res.value;
         })
  
  return myvalue
 }
    catch(e){
     console.log(e);
    }  
    
   };
 
 





 

