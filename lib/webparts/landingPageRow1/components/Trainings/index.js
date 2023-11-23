var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import "../LandingPage/Landing.scss";
import { BsCalendar4Event } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { getTrainingsdata } from '../../../../common/SpServices';
import { useState, useEffect } from 'react';
var Trainings = function (props) {
    var _a;
    var _b = useState(), data = _b[0], setData = _b[1];
    var getdata = function () { return __awaiter(void 0, void 0, void 0, function () {
        var actualData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(props);
                    return [4 /*yield*/, getTrainingsdata(props)];
                case 1:
                    actualData = _a.sent();
                    setData(actualData);
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        getdata();
    }, []);
    return (React.createElement("div", { className: 'inCard bg-gradient-3' },
        React.createElement("div", { className: 'inCard--header' },
            React.createElement("p", { className: 'inCard--header one' }, "On Going"),
            React.createElement("p", { className: 'inCard--header two' },
                React.createElement("b", null, "Trainings"))),
        React.createElement("div", { className: 'row1 inCard--body' },
            React.createElement("ul", { className: 'bullets round' }, data === null || data === void 0 ? void 0 : data.map(function (x, i) {
                var timestamp = x.EventDate;
                var dateTime = new Date(timestamp);
                // Extracting the time
                // Extracting the time in 12-hour format
                var hours = dateTime.getUTCHours();
                var minutes = dateTime.getUTCMinutes();
                var period = hours >= 12 ? "PM" : "AM";
                var formattedHours = (hours % 12) || 12;
                var time = "".concat(formattedHours.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'), " ").concat(period);
                // Extracting the date
                var year = dateTime.getUTCFullYear();
                var month = (dateTime.getUTCMonth() + 1).toString().padStart(2, '0');
                var day = dateTime.getUTCDate().toString().padStart(2, '0');
                var date = "".concat(day, "-").concat(month, "-").concat(year);
                return (i < 3 &&
                    React.createElement("li", null,
                        React.createElement("div", { className: 'inCard-list' },
                            React.createElement("div", { className: 'inCard-list--icon1' },
                                " ",
                                React.createElement(FaBookReader, { size: "30px" })),
                            React.createElement("div", { className: 'inCard-list--details' },
                                React.createElement("h3", null, x.trainingname),
                                React.createElement("p", null,
                                    " ",
                                    date,
                                    " ",
                                    time)),
                            React.createElement("a", { href: "https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement/Lists/TrainingCalender/DispForm.aspx?ID='+x.ID+'", target: '_blank' },
                                React.createElement(BsCalendar4Event, { size: "25px", color: '#c8c6c4' })))));
            }))),
        React.createElement("div", { className: ((_a = props.data) === null || _a === void 0 ? void 0 : _a.length) > 3 ? 'inCard--footer' : 'inCard--nofooter' },
            React.createElement("button", { className: 'Footer-Button3', onClick: function () { return window.location.href = "https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement/Lists/TrainingCalender/AllItems.aspx"; } }, "View All"))));
};
export default Trainings;
//# sourceMappingURL=index.js.map