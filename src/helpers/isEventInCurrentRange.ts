import {getCurrentWeek} from "./getCurrentWeek";
import {getCalendarDayOfWeek} from "./getCalendarDayOfWeek";
import {getCalendarHour} from "./getCalendarHour";
import {CalendarEvent} from "../models/CalendarEvent";

export const isEventInCurrentRange = (currentDate: Date | null, cell: number, events: CalendarEvent[]) => {

    if (!currentDate) return false;
    return  events.some(({date: eventDate}) => {
        if (!eventDate) return false
        if (currentDate.getFullYear() === eventDate.getFullYear() && currentDate.getMonth() === eventDate.getMonth()) {
            const weekArray: string[] | number[]  =  getCurrentWeek(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
            const numberWeekArray: number[] = weekArray.map(day => Number(day));
            return (
                numberWeekArray.includes(eventDate.getDate()) &&
                eventDate.getDay() === getCalendarDayOfWeek(cell) &&
                eventDate.getHours() === getCalendarHour(cell )
            )
        }
    })


}
