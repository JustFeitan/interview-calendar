import React, {FC, useContext} from 'react';
import {CalendarHead} from './styles';
import DateAndDaysSlider from "./UI/DateAndDaysSlider";
import {getCurrentWeek} from "../../helpers/getCurrentWeek";
import {DateContext, DateContextType} from "../../context/DateContext";
import CalendarNavigation from "./CalendarNavigation";


interface CalendarNavProps {
    pickedDate: Date;
    onDatePick: (date: Date) => void;
}

const CalendarHeader: FC<CalendarNavProps> = ({onDatePick, pickedDate}) => {

    const {currentDate, setCurrentDate} = useContext(DateContext) as DateContextType;
    const weekArray = getCurrentWeek(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())

    return (
        <CalendarHead>
            <DateAndDaysSlider pickedDate={pickedDate} weekArray={weekArray} onDateClick={onDatePick}/>
            <CalendarNavigation/>
        </CalendarHead>
    );
};

export default CalendarHeader;
