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
import './Feedback.scss';
import { getSP } from '../pnpConfig';
import "@pnp/sp/sputilities";
import { SlCheck } from "react-icons/sl";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
var Feedback = function (props) {
    var _a = React.useState(""), fb = _a[0], setFb = _a[1];
    var _b = React.useState(false), msg = _b[0], setMsg = _b[1];
    var postFeedback = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _sp, list;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _sp = getSP(props.context);
                    return [4 /*yield*/, _sp.web.lists.getByTitle("Feedback List").items.add({
                            Complients_x002f_Comments: fb,
                            DepartmentNameId: props.depID
                        })];
                case 1:
                    list = _a.sent();
                    console.log(list);
                    _sp.utility.sendEmail({
                        To: [props.repman],
                        Subject: "Recived Feedback ",
                        Body: "You got feedback",
                        AdditionalHeaders: {
                            "content-type": "text/html"
                        }
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        console.log(fb);
    }, [fb]);
    return (React.createElement("div", { className: 'rowMains' },
        React.createElement("div", { className: "feedbackTitle" }),
        React.createElement("div", { className: 'formDiv' },
            React.createElement("div", { className: "field" },
                React.createElement("textarea", { value: fb, placeholder: 'Enter your Feedback here', onChange: function (e) { return setFb(e.target.value); } }),
                React.createElement("div", { className: 'submitBtn' },
                    React.createElement("div", { className: msg ? 'msgopen' : 'msgclose' },
                        " ",
                        React.createElement(SlCheck, { size: 15, color: "green" }),
                        "   ",
                        React.createElement("div", { className: "successm" }, " Successfully submitted")),
                    React.createElement("div", { className: fb == "" ? "btnDivHide" : "btnDivShow" },
                        React.createElement("div", { onClick: function () {
                                postFeedback();
                                setFb("");
                                setMsg(true);
                                setTimeout(function () {
                                    setMsg(false);
                                }, 2000);
                            } },
                            React.createElement(BsFillArrowRightSquareFill, { size: 15 }))))))));
};
export default Feedback;
//# sourceMappingURL=Feedback.js.map