import React, {FC, useContext, useState} from 'react';
import {AppButton} from "../UI/elements";
import {CalendarBottom} from './styles'
import {CalendarEvent} from "../../models/CalendarEvent";
import {DateContext, DateContextType} from "../../context/DateContext";

interface CalendarFooterProps {
    pickedEvent: CalendarEvent | null;
    onDeletePickedEvent: (event: CalendarEvent) => void;
    onTodayBtnClick: (date: Date) => void;
}

const CalendarFooter: FC<CalendarFooterProps> = ({pickedEvent, onDeletePickedEvent, onTodayBtnClick}) => {


    const {setCurrentDate} = useContext(DateContext) as DateContextType;

    const todayBtnClickHandler = () => {
        setCurrentDate(new Date());
        onTodayBtnClick(new Date())
    }

    const deleteBtnClickHandler = () => {
        onDeletePickedEvent(pickedEvent!)
    }

    return (
        <CalendarBottom>
            <AppButton onClick={todayBtnClickHandler}>Today</AppButton>
            {
                pickedEvent && <AppButton onClick={deleteBtnClickHandler}>Delete</AppButton>
            }
        </CalendarBottom>
    );
};

export default CalendarFooter;
