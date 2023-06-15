import {getCalendarHour} from "./getCalendarHour";
import {getCalendarDayOfWeek} from "./getCalendarDayOfWeek";
import {getCurrentWeek} from "./getCurrentWeek";

export const getCellDate = (currentDate: Date, cell: number) => {
    const weekDatesArray = getCurrentWeek(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), weekDatesArray[getCalendarDayOfWeek(cell)], getCalendarHour(cell))
}
