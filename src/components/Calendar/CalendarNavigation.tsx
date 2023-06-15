import React, {FC} from 'react';
import {CalendarNav, CalendarNavDate} from "./styles";
import {MONTHS} from "./consts";
import {useCalendarNavigation} from "../../hooks/useCalendarNavigation";
import {StyledChevronRight, StyledChevronLeft} from '../UI/Icons'

const CalendarNavigation: FC = () => {

    const {currentMonth, currentYear, goNextWeek, goPreviousWeek} = useCalendarNavigation()

    return (
        <CalendarNav>
            <StyledChevronLeft size={35} onClick={goPreviousWeek}/>
            <CalendarNavDate>{MONTHS[currentMonth]} {currentYear}</CalendarNavDate>
            <StyledChevronRight size={35} onClick={goNextWeek}/>
        </CalendarNav>
    );
};

export default CalendarNavigation;
