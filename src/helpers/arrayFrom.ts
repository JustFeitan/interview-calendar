export const arrayFrom = (length: number, startFrom?: number): number[] => {
    if (!startFrom) return Array.from(Array(length).keys())
    return Array.from(Array(length).keys()).map(i => i + startFrom)
}
