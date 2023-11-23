import { sortBy } from "@microsoft/sp-lodash-subset";
// public async GetBirthdays(): Promise<Array<BirthdaysMonth>> {
//   const items: Array<any> = await this._spfi.web.lists
//     .getByTitle("Birthdays")
//     .items.expand("Employee")
//     .select("ID,Month,Date,BirthdayDate,Employee/Title,Employee/UserName")();
//   return this.ProcessData(items);
// }
var GenerateCurrentMonths = function () {
    var months = [];
    //for current month
    var today = new Date();
    today.setMonth(today.getMonth());
    var todayDate = today.getDate();
    console.log(todayDate);
    months.push({
        title: today.toLocaleString("en-AU", { month: "long" }),
        users: [],
        date: today.getDate(),
    });
    return months;
};
export var GetMonthIndex = function (month) {
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
};
// eslint-disable-next-line
export var ProcessData = function (items) {
    console.log(items);
    var months = GenerateCurrentMonths();
    var _loop_1 = function (i) {
        months[i].users = sortBy(items.filter(function (item) {
            var usrBdayString = item.BirthdayDate.split('T');
            var d = new Date(usrBdayString);
            var date = d.getDate();
            return (date === months[i].date);
        })
            .map(
        // eslint-disable-next-line
        function (item) { return ({
            id: item.ID,
            name: item.Employee.Title,
            email: item.Employee.UserName,
            date: item.BirthdayDate,
            month: item.Month,
            monthIndex: GetMonthIndex(item.Month)
        }); }), "Date");
    };
    for (var i = 0; i < months.length; i++) {
        _loop_1(i);
    }
    return months;
};
//# sourceMappingURL=BirthdayHelper.js.map