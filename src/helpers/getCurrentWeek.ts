import {getDaysInMonth} from "./getDaysInMonth";
import {arrayFrom} from "./arrayFrom";
import {useMemo} from "react";

export const getCurrentWeek = (year:number, month: number, day: number) => {

    const daysInMonth = getDaysInMonth(month, year);
    const currentDate = new Date(year, month, day);

    let currentDayOfWeek;
    if (currentDate.getDay() === 0) {
        currentDayOfWeek = 6 ;
    } else {
        currentDayOfWeek = currentDate.getDay() - 1;
    }
    let mondayOfWeek = currentDate.getDate() - currentDayOfWeek;
    let sundayOfWeek = currentDate.getDate() + (6 - currentDayOfWeek);

        if (mondayOfWeek < 1) {
            const arrayOfMonthFirstDays: number[] = arrayFrom(sundayOfWeek, 1)
            return Array.from('0'.repeat(Math.abs(mondayOfWeek) + 1)).map(i => Number(i)).concat(arrayOfMonthFirstDays)
        }
        if (sundayOfWeek >= daysInMonth) {
            return arrayFrom(daysInMonth + 1 - mondayOfWeek, mondayOfWeek)
        }
        return arrayFrom(7, mondayOfWeek)

}
