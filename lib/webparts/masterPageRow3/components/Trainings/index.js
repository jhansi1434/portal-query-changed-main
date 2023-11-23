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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import "@pnp/sp/fields";
import "@pnp/sp/lists";
import { sp } from 'sp-pnp-js';
import { DetailsList, DetailsListLayoutMode, } from "office-ui-fabric-react/lib/DetailsList";
var Trainings = function (props) {
    var _a = React.useState([]), rowData = _a[0], setRowData = _a[1];
    var _b = React.useState([]), final = _b[0], setFinal = _b[1];
    var columnArr = new Array();
    var filteredarr = new Array();
    var filteredobj;
    var getdata = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, sp.web.lists.getByTitle(props.ListName).items.get().then(function (view) {
                            view.map(function (y) { Object.keys(y).filter(function (x) { return x !== "odata.type" && x !== "odata.id" && x !== "odata.etag" && x !== "odata.editLink" && x !== "FileSystemObjectType" && x !== "ServerRedirectedEmbedUri" && x !== "ServerRedirectedEmbedUrl" && x !== "ContentTypeId" && x !== "ComplianceAssetId" && x !== "OData__ColorTag" && x !== "Modified" && x !== "Created" && x !== "AuthorId" && x !== "EditorId" && x !== "OData__UIVersionString" && x !== "Attachments" && x !== "GUID" && x !== "Id" && x !== "Title"; }).map(function (x) { console.log(x); columnArr.push(x); }); });
                            view.map(function (x, i) {
                                filteredobj = Object.assign.apply(Object, __spreadArray([{}], columnArr.map(function (key) {
                                    var _a;
                                    return (_a = {}, _a[key] = x[key], _a);
                                }), false));
                                filteredarr.push(filteredobj);
                            });
                            setRowData(filteredarr);
                            var _columns = new Array();
                            try {
                                Object.keys(filteredobj).map(function (x, i) {
                                    _columns.push({ key: "_column" + i, name: x, fieldName: x, minWidth: 100,
                                        maxWidth: 100,
                                        isResizable: true });
                                });
                            }
                            catch (error) {
                            }
                            setFinal(_columns);
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        getdata();
    }, []);
    return (React.createElement(React.Fragment, null,
        console.log(final),
        React.createElement("div", { className: "rowMain3" },
            React.createElement("div", { className: "row31" },
                React.createElement("h2", null, "My Tainings")),
            React.createElement("div", { className: "row32" }, React.createElement(DetailsList, { columns: final, items: rowData, setKey: "set", layoutMode: DetailsListLayoutMode.justified, 
                //selection={selection}
                selectionPreservedOnEmptyClick: true })))));
};
export default Trainings;
//# sourceMappingURL=index.js.map