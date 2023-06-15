import {useContext, useState} from "react";
import {EventContext, EventContextType} from "../context/EventContext";
import {CalendarEvent} from "../models/CalendarEvent";
import {areSameEvents} from "../helpers/areSameEvents";
import {DateContext, DateContextType} from "../context/DateContext";
import {getCellDate} from "../helpers/getCellDate";
import {autoCalendarScroll} from "../helpers/autoCalendarScroll";

export const useEvents = () => {

    const {currentDate, setCurrentDate} = useContext(DateContext) as DateContextType;
    const {events, setEvents} = useContext(EventContext) as EventContextType;
    const [pickedEvent, setPickedEvent] = useState<CalendarEvent | null>(null);

    const eventPickHandler = (cell: number) => {
        const newEvent: CalendarEvent = {
            date: getCellDate(currentDate, cell)
        }
        setPickedEvent(newEvent)
    }

    const deletePickedEventHandler = (pickedEvent: CalendarEvent) => {
        const updatedEvents = events.filter(event => !areSameEvents(event, pickedEvent));
        setEvents(updatedEvents);
        setPickedEvent(null);
    }

    const addEvent = () => {
        const promptDatRes = prompt('Write date of event', (currentDate).toString());
        if (!promptDatRes) return;
        const newEventDate = new Date(Date.parse(promptDatRes!))
        const newEvent: CalendarEvent = {
            date: newEventDate
        }
        if (events.some(event => areSameEvents(event, newEvent))) {
            alert('There is already a notification for this day');
            return
        }
        setEvents([...events, newEvent])
        setCurrentDate(newEventDate)
        autoCalendarScroll(newEvent)
    }

    return {events, eventPickHandler, pickedEvent, deletePickedEventHandler, addEvent}
}
