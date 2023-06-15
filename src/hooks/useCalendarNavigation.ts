import {useContext} from "react";
import {DateContext, DateContextType} from "../context/DateContext";
import {getDaysInMonth} from "../helpers/getDaysInMonth";
import {getCurrentWeek} from "../helpers/getCurrentWeek";

export const useCalendarNavigation = () => {

    const {currentDate, setCurrentDate} = useContext(DateContext) as DateContextType;
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const weekArray = getCurrentWeek(currentYear, currentMonth, currentDay);

    const goPreviousWeek = () => {
        let newDateOfWeek;
        if (weekArray.includes(0) || (weekArray.includes(1) && weekArray.includes(7))) {
            newDateOfWeek = new Date(currentYear, currentMonth - 1, getDaysInMonth(currentMonth - 1, currentYear)).getDate();
            currentMonth = currentMonth - 1;
            setCurrentDate(new Date(currentYear, currentMonth, newDateOfWeek))
        } else if (currentDay < 7 && currentDay > 1) {
            currentDay = 1
            setCurrentDate(new Date(currentYear, currentMonth, currentDay))
        } else {
            currentDay = currentDay - 7;
            setCurrentDate(new Date(currentYear, currentMonth, currentDay))
        }
    }

    const goNextWeek = () => {
        if (weekArray.length < 7 || (weekArray.includes(daysInMonth - 6) && weekArray.includes(daysInMonth))) {
            currentMonth = currentMonth + 1;
            currentDay = 1
            setCurrentDate(new Date(currentYear, currentMonth, currentDay))

        } else if (daysInMonth - currentDay < 7 && daysInMonth - currentDay > 0) {
            currentDay = daysInMonth
            setCurrentDate(new Date(currentYear, currentMonth, currentDay))
        } else {
            currentDay = currentDay + 7
            setCurrentDate(new Date(currentYear, currentMonth, currentDay))
        }
    }

    return {currentYear, currentMonth, currentDay, goNextWeek, goPreviousWeek}
}
