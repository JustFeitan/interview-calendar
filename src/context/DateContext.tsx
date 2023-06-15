import {createContext, FC, JSX, ReactNode, useState} from "react";
import {CalendarEvent} from "../models/CalendarEvent";

interface DateContextProviderProps {
    children: JSX.Element
}

export interface DateContextType {
    currentDate: Date,
    setCurrentDate: (events: Date) => void;
}
export const DateContext = createContext<DateContextType | null>(null);

export const DateContextProvider: FC<DateContextProviderProps> = ({children}) => {

    const [currentDate, setCurrentDate] = useState<Date>(new Date)

    return (
        <DateContext.Provider value={{currentDate, setCurrentDate}}>
            {children}
        </DateContext.Provider>
    )
}







