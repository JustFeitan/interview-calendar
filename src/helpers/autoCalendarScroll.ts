import {CalendarEvent} from "../models/CalendarEvent";

export const autoCalendarScroll = (currentEvent: CalendarEvent) => {
    const element = document.getElementById('calendar-body')
    if (!element) return
    const topBottomScroll = currentEvent.date!.getHours() >=12 ? element.scrollHeight : 0;
    element.scrollTo({
        top: topBottomScroll,
        behavior: 'smooth',
        left: 0
    })
}
