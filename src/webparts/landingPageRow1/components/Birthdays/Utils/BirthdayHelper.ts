

import { sortBy } from "@microsoft/sp-lodash-subset";
export interface User {
  id: number;
  name: string;
  email: string;
  month: string;
  monthIndex: number;
  // eslint-disable-next-line
  date: any;
  // eslint-disable-next-line
  BirthdayDate: any;
}  
export interface BirthdaysMonth {
  date: any;
  title: string;
  users: Array<User>;
}
export interface ISliderCarouselProps {
  data: BirthdaysMonth;
  index: number;
  ListName:string;

}
  // public async GetBirthdays(): Promise<Array<BirthdaysMonth>> {
  //   const items: Array<any> = await this._spfi.web.lists
  //     .getByTitle("Birthdays")
  //     .items.expand("Employee")
  //     .select("ID,Month,Date,BirthdayDate,Employee/Title,Employee/UserName")();
  //   return this.ProcessData(items);
  // }
  
  const GenerateCurrentMonths=(): Array<BirthdaysMonth>=>{
    const months: Array<BirthdaysMonth> = [];
    //for current month
    const today = new Date();
    today.setMonth(today.getMonth());
    const todayDate = today.getDate();
    console.log(todayDate);
    months.push({
      title: today.toLocaleString("en-AU", { month: "long" }),
      users: [],
      date: today.getDate(),

    });

    return months;
  }


  export const GetMonthIndex=(month: string):number=> {
    
    switch (month) {
      case "January":
        return 0;
      case "February":
        return 1;
      case "March":
        return 2;
      case "April":
        return 3;
      case "May":
        return 4;
      case "June":
        return 5;
      case "July":
        return 6;
      case "August":
        return 7;
      case "September":
        return 8;
      case "October":
        return 9;
      case "November":
        return 10;
      case "December":
        return 11;
    }
  }
  // eslint-disable-next-line
  
    export const ProcessData=(items: any): Array<BirthdaysMonth> =>{
      console.log(items);
    const months = GenerateCurrentMonths();
    for (let i = 0; i < months.length; i++) {
      months[i].users = sortBy(
        items.filter((item: any) =>
        {  let usrBdayString = item.BirthdayDate.split('T');
          let d:any=new Date(usrBdayString);
          let date = d.getDate()
           return (date === months[i].date)
        })
          .map(
            // eslint-disable-next-line
            (item: any): any => ({
              id: item.ID,
              name: item.Employee.Title,
              email: item.Employee.UserName,
              date: item.BirthdayDate,
              month: item.Month,
              monthIndex:GetMonthIndex(item.Month)
            })
          ),
        "Date"
      );
    }
    return months;
  }

