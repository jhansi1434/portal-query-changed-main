export interface User {
    id: number;
    name: string;
    email: string;
    month: string;
    monthIndex: number;
    date: any;
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
    ListName: string;
}
export declare const GetMonthIndex: (month: string) => number;
export declare const ProcessData: (items: any) => Array<BirthdaysMonth>;
//# sourceMappingURL=BirthdayHelper.d.ts.map