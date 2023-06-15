export const getCalendarHour = (cell: number) => {
    if (cell / 7 < 1) return 0;
    if (Math.floor(cell / 7) === 1) return 1;
    return Math.ceil(cell / 7) -1;
}
