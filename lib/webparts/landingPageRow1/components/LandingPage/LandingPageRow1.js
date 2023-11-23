import * as React from "react";
import { Birthday } from "../Birthdays";
import Announcements from "../Announcements/Announcements";
import Trainings from "../Trainings";
import Tasks from "../Tasks";
var LandingPageRow1 = function (props) {
    return (React.createElement("div", { className: "mainContainer" },
        React.createElement("div", { className: "Containers" },
            React.createElement("div", { className: "announcments" },
                React.createElement(Announcements, { data: props })),
            React.createElement("div", null,
                React.createElement(Birthday, { data: props })),
            React.createElement("div", null,
                React.createElement(Trainings, { data: props })),
            React.createElement("div", null,
                React.createElement(Tasks, { data: props })))));
};
export default LandingPageRow1;
//# sourceMappingURL=LandingPageRow1.js.map