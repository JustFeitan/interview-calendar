import {CalendarEvent} from "../models/CalendarEvent";

export const areSameEvents = (firstDateEvent: Date | CalendarEvent, secondEvent: CalendarEvent) => {
    let firstEvent: CalendarEvent;
    if (firstDateEvent instanceof Date) {
        firstEvent  = {date: firstDateEvent}
    } else {
        firstEvent = firstDateEvent
    }
    if (!firstEvent.date || !secondEvent.date) return false;

    return firstEvent.date.getFullYear() === secondEvent.date.getFullYear() &&
        firstEvent.date.getMonth() === secondEvent.date.getMonth() &&
        firstEvent.date.getDate() === secondEvent.date.getDate() &&
        firstEvent.date.getHours() === secondEvent.date.getHours();


}
