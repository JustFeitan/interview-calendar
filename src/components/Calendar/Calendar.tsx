import React, {FC, useContext, useState} from 'react';
import {Calendar} from './styled';
import {DateContext, DateContextType} from "../../context/DateContext";
import {CalendarEvent} from "../../models/CalendarEvent";
import {areSameEvents} from "../../helpers/areSameEvents";
import {CalendarBody, StyledEventCellActive, StyledEventCellPicked} from './styles'
import EventTable from "./UI/EventTable";
import SideHours from "./UI/SideHours";
import CalendarHeader from "./CalendarHeader";
import {useEvents} from "../../hooks/useEvents";
import CalendarFooter from "./CalendarFooter";
import {isEventInCurrentRange} from "../../helpers/isEventInCurrentRange";
import {getCalendarHour} from "../../helpers/getCalendarHour";
import {getCellDate} from "../../helpers/getCellDate";


const AppCalendar: FC = () => {


    const [pickedDate, setPickedDate] = useState<Date>(new Date);
    const {currentDate, setCurrentDate} = useContext(DateContext) as DateContextType;

    const {events, pickedEvent, eventPickHandler, deletePickedEventHandler} = useEvents()
    console.log(currentDate)


    const datePickHandler = (date: Date) => {
        setPickedDate(date);
    }



    return (
        <Calendar>
            <CalendarHeader
                pickedDate={pickedDate}
                onDatePick={datePickHandler}
            />

            <CalendarBody id='calendar-body'>
                <SideHours/>
                <EventTable renderItem={(cell) =>
                    isEventInCurrentRange(currentDate, cell + 1, events)
                        ? pickedEvent && areSameEvents(getCellDate(currentDate, cell), pickedEvent)
                            ? <StyledEventCellPicked/>
                            : <StyledEventCellActive
                                onClick={() => eventPickHandler(cell)}/>
                        : null
                }
                />
            </CalendarBody>
            <CalendarFooter
                onTodayBtnClick={datePickHandler}
                pickedEvent={pickedEvent}
                onDeletePickedEvent={deletePickedEventHandler}/>
        </Calendar>
    );
};

export default AppCalendar;
