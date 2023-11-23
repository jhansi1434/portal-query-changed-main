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
import * as React from "react";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
import "@pnp/sp/site-users/web";
import { getSP } from "./pnpConfig";
import ImageSliders from "./ImageSlider/ImageSliders";
import Feedback from "./Feedback/Feedback";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import QuickLinks from "./QuickLinks/QuickLinks";
import { useState } from "react";
import { getImagedata, getLinksData } from "../../../common/SpServices";
var MasterPageRow2 = function (props) {
    var arr = [];
    var arrobj = [];
    var _a = React.useState(), imagedata = _a[0], setImageData = _a[1];
    var _b = React.useState(), depID = _b[0], setDepID = _b[1];
    var _c = React.useState(), repMan = _c[0], setRepMan = _c[1];
    var _d = useState(), quicklinkdata = _d[0], SetQuickLinkData = _d[1];
    // const caml3: ICamlQuery = {
    //   ViewXml:
    //     "<View><ViewFields><FieldRef Name='Title'/><FieldRef Name='image'/></ViewFields></View>",
    // };
    var getUserData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _sp, list, user, userobj, r, y;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _sp = getSP(props.context);
                    return [4 /*yield*/, _sp.web.lists.getByTitle("EmployeeDetails")];
                case 1:
                    list = _a.sent();
                    return [4 /*yield*/, _sp.web.currentUser()];
                case 2:
                    user = _a.sent();
                    userobj = user.Email;
                    return [4 /*yield*/, list.items.filter("Name/EMail eq '" + userobj + "'")()];
                case 3:
                    r = _a.sent();
                    return [4 /*yield*/, list.items.select('ReportingManager/EMail').expand('ReportingManager').filter("Name/EMail eq '" + userobj + "'")()];
                case 4:
                    y = _a.sent();
                    y.map(function (x) {
                        setRepMan(x.ReportingManager.EMail);
                    });
                    r.map(function (x) {
                        setDepID(x.DepartmentId);
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    var getQuickLinkData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var qlistitems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getLinksData(props)];
                case 1:
                    qlistitems = _a.sent();
                    qlistitems === null || qlistitems === void 0 ? void 0 : qlistitems.map(function (x) {
                        var imgobj = x.Icon;
                        var jobj = JSON.parse(imgobj);
                        arrobj.push({ Title: x.Title, Icon: window.location.protocol + "//" + window.location.host + jobj.serverRelativeUrl, Url: x.URL.Url });
                    });
                    SetQuickLinkData(arrobj);
                    return [2 /*return*/];
            }
        });
    }); };
    var getImageData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getImagedata(props)];
                case 1:
                    data = _a.sent();
                    data === null || data === void 0 ? void 0 : data.map(function (x) {
                        var y = JSON.parse(x.image);
                        arr.push(y.serverUrl + y.serverRelativeUrl);
                    });
                    setImageData(arr);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        try {
            getImageData();
            getUserData();
            getQuickLinkData();
        }
        catch (e) {
            console.log(e);
        }
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "mainContainer" },
            React.createElement("div", { className: "Containers1" },
                React.createElement("div", { className: "row2container__part1" },
                    React.createElement(ImageSliders, { data: imagedata })),
                React.createElement("div", { className: "row2container__part2" },
                    React.createElement("div", { className: "row2container__part2_quicklinks" },
                        React.createElement(QuickLinks, { data: quicklinkdata })),
                    React.createElement(Feedback, { context: WebPartContext, depID: depID, repman: repMan }))))));
};
export default MasterPageRow2;
//# sourceMappingURL=MasterPageRow2.js.map