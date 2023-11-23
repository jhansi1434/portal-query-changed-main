import * as React from "react";
import { Persona, PersonaSize } from "@fluentui/react/lib/Persona";
import '../LandingPage/Landing.scss';
var MonthSection = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "inCard bg-gradient-2" },
            React.createElement("div", { className: 'inCard--header' },
                React.createElement("p", { className: 'inCard--header one' }, "Today's"),
                React.createElement("p", { className: 'inCard--header two' },
                    React.createElement("b", null, "Birthdays"))),
            React.createElement("div", { className: "inCard--body" },
                React.createElement("ul", { className: 'bullets round' },
                    React.createElement("div", { className: props.data.users.length === 0 ? "row4NoBday" : "row4" },
                        console.log(props.data.users),
                        props.data.users.length === 0 && (React.createElement("div", { className: "birthday" },
                            React.createElement("p", { className: "birthday--sub1" }, "Next Birthday..."),
                            React.createElement("p", { className: "birthday--sub2" }, "Will be celebrated soon!"))),
                        props.data.users.map(function (user) {
                            return (React.createElement("li", null,
                                React.createElement(Persona, { primaryText: "Happy birthday!", secondaryText: user.name, imageUrl: "/_layouts/15/userphoto.aspx?UserName=".concat(user.email), imageAlt: user.name, size: PersonaSize.size56, styles: {
                                        primaryText: {
                                            color: "white",
                                            font: "19px",
                                        },
                                        secondaryText: {
                                            color: "white",
                                        },
                                    } })));
                        })))))));
};
export default MonthSection;
//# sourceMappingURL=MonthSection.js.map