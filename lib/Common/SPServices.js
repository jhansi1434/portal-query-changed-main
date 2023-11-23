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
import { SPHttpClient } from "@microsoft/sp-http-base";
export var getAnnouncementsData = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var siteUrl, listName, spHttpClient, endpointUrl, myvalue, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                siteUrl = props.data.weburl;
                listName = "Announcements";
                spHttpClient = props.data.spHttpClient;
                endpointUrl = "".concat(siteUrl, "/_api/web/lists/getbytitle('").concat(listName, "')/items");
                return [4 /*yield*/, spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
                        .then(function (response) {
                        if (response.ok) {
                            return response.json();
                        }
                    }).then(function (res) {
                        //console.log(res.value);
                        return res.value;
                    })];
            case 1:
                myvalue = _a.sent();
                return [2 /*return*/, myvalue];
            case 2:
                error_1 = _a.sent();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var getBirthdayData = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var siteUrl, listName, spHttpClient, endpointUrl, myvalue, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                siteUrl = props.data.weburl;
                console.log(props);
                listName = "Birthdays";
                spHttpClient = props.data.spHttpClient;
                endpointUrl = "".concat(siteUrl, "/_api/web/lists/getbytitle('").concat(listName, "')/items?$select=ID,Month,Date,BirthdayDate,Employee/Title,Employee/UserName&$expand=Employee");
                return [4 /*yield*/, spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
                        .then(function (response) {
                        if (response.ok) {
                            return response.json();
                        }
                    }).then(function (res) {
                        console.log(res.value);
                        return res.value;
                    })];
            case 1:
                myvalue = _a.sent();
                return [2 /*return*/, myvalue];
            case 2:
                error_2 = _a.sent();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var getTrainingsdata = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var siteUrl, listName, spHttpClient, endpointUrl, myvalue, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log(props);
                siteUrl = "https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement";
                listName = "TrainingCalender";
                spHttpClient = props.data.pHttpClient;
                endpointUrl = "".concat(siteUrl, "/_api/web/lists/getbytitle('").concat(listName, "')/items");
                return [4 /*yield*/, spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
                        .then(function (response) {
                        if (response.ok) {
                            return response.json();
                        }
                    }).then(function (res) {
                        console.log(res.value);
                        return res.value;
                    })];
            case 1:
                myvalue = _a.sent();
                return [2 /*return*/, myvalue];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var getTasksdata = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var siteUrl, listName, spHttpClient, endpointUrl, myvalue, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log(props);
                siteUrl = "https://zelarsoft1.sharepoint.com/sites/Zelardemo/learningmanagement";
                listName = "Tasks";
                spHttpClient = props.data.spHttpClient;
                endpointUrl = "".concat(siteUrl, "/_api/web/lists/getbytitle('").concat(listName, "')/items");
                return [4 /*yield*/, spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
                        .then(function (response) {
                        if (response.ok) {
                            return response.json();
                        }
                    }).then(function (res) {
                        console.log(res.value);
                        return res.value;
                    })];
            case 1:
                myvalue = _a.sent();
                return [2 /*return*/, myvalue];
            case 2:
                e_2 = _a.sent();
                console.log(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var getNewsData = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var siteUrl, listName, spHttpClient, endpointUrl, myvalue, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                siteUrl = props.data.weburl;
                listName = "News";
                spHttpClient = props.data.spHttpClient;
                endpointUrl = "".concat(siteUrl, "/_api/web/lists/getbytitle('").concat(listName, "')/items");
                return [4 /*yield*/, spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
                        .then(function (response) {
                        if (response.ok) {
                            return response.json();
                        }
                    }).then(function (res) {
                        return res.value;
                    })];
            case 1:
                myvalue = _a.sent();
                return [2 /*return*/, myvalue];
            case 2:
                error_3 = _a.sent();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var getOpinionPollData = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var siteUrl, listName, spHttpClient, endpointUrl, myvalue, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                siteUrl = props.data.weburl;
                listName = "OpinionPole";
                spHttpClient = props.data.spHttpClient;
                endpointUrl = "".concat(siteUrl, "/_api/web/lists/getbytitle('").concat(listName, "')/items?$select=ID,QuestionId,QuestionName,Choices&$filter=Active eq 1");
                return [4 /*yield*/, spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
                        .then(function (response) {
                        if (response.ok) {
                            return response.json();
                        }
                    }).then(function (res) {
                        //console.log(res.value);
                        return res.value;
                    })];
            case 1:
                myvalue = _a.sent();
                return [2 /*return*/, myvalue];
            case 2:
                error_4 = _a.sent();
                console.log(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var getImagedata = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var siteUrl, listName, spHttpClient, endpointUrl, myvalue, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                siteUrl = props.weburl;
                listName = "ImageSlider";
                spHttpClient = props.spHttpClient;
                endpointUrl = "".concat(siteUrl, "/_api/web/lists/getbytitle('").concat(listName, "')/items?");
                return [4 /*yield*/, spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
                        .then(function (response) {
                        if (response.ok) {
                            return response.json();
                        }
                    }).then(function (res) {
                        // console.log(res.value);
                        return res.value;
                    })];
            case 1:
                myvalue = _a.sent();
                return [2 /*return*/, myvalue];
            case 2:
                e_3 = _a.sent();
                console.log(e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
export var getLinksData = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var siteUrl, listName, spHttpClient, endpointUrl, myvalue, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                siteUrl = props.weburl;
                listName = "Quick Links";
                spHttpClient = props.spHttpClient;
                endpointUrl = "".concat(siteUrl, "/_api/web/lists/getbytitle('").concat(listName, "')/items");
                return [4 /*yield*/, spHttpClient.get(endpointUrl, SPHttpClient.configurations.v1)
                        .then(function (response) {
                        if (response.ok) {
                            return response.json();
                        }
                    }).then(function (res) {
                        //console.log(res.value);
                        return res.value;
                    })];
            case 1:
                myvalue = _a.sent();
                return [2 /*return*/, myvalue];
            case 2:
                e_4 = _a.sent();
                console.log(e_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=SpServices.js.map