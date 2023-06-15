export const getCalendarDayOfWeek = (cell: number): number => {
    if (cell < 7) return cell;
    return cell % 7 ;
}
